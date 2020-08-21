function evento (){
	console.clear();
	let metros = document.getElementById("unidadesMetros").value;
	//calculo concatenado en string
	let resultadoPies = metros + " metros equivalen a " + (metros * 3.28084) + " pies";
	let resultadoPulgadas = metros + " metros equivalen a " + (metros * 39.37) + " pulgadas"
	//Indexado al DOM y a la consola
	console.log(resultadoPies);
	console.log(resultadoPulgadas);
	document.getElementById("pies").innerHTML =  resultadoPies;
	document.getElementById("pulgadas").innerHTML = resultadoPulgadas;
}