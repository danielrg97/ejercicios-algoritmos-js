
/**
*calculo de fibonacci:
*Para calcular se declara dos variables con valores iniciales para la secuencia (0 y 1) 
*y se imprimen inicialmente, luego con un ciclo se inicia la secuencia agregando en el acumulador la suma de los valores inicales,
*se guarda en en el valor 1 el valor 2 y en el valor 2 el acumulador (que seria el ultimo valor de la secuencia)
*El ciclo for se encarga de seguir repitiendo esta secuencia n veces
**/
function fibonacci(){
	console.clear();
	let n = parseInt(document.getElementById('valueN').value);
	let value1 = 0;
	let value2 = 1;
	let acum = 0;

	//String para imprimir en el DOM (con los dos valores iniciales de la secuencia (value1 y value2))
	let string =value1+'-'+value2;
	console.log(value1);
	console.log(value2);
	for (var i = 0; i < n-2; i++) {
		acum = value1 + value2;
		console.log(acum);
		string +='-'+acum;
		value1 = value2
		value2 = acum
	}
	let nesimo = n === 1 ? 0 : n === 2 ? 1 : acum;
	console.log('n-esimo valor de la secuencia: ', nesimo);
	document.getElementById('result').innerHTML = string;
	document.getElementById('nesimo').innerHTML = nesimo;

}