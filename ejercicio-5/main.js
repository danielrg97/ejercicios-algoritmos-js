function calcular(){
	let n = parseInt(document.getElementById('inputN').value);
	let x = parseInt(document.getElementById('inputX').value);
	if(x <= 0 || n <= 0){
		document.getElementById('errorMessage').innerHTML = 'Valores incorrectos. Los valores deben ser mayores a 0';
		return;
	}
	document.getElementById('errorMessage').innerHTML = '';
	let resultado = 1 + x;
	for (var i = 2; i <= n; i++) {
		resultado += (Math.pow(x, i)/ factorial(i));
	}
	document.getElementById('result').innerHTML = resultado;
}

function factorial(numero){
	let total = 1;
	for(var i = 1; i<=numero; i++){
		total *= i;
	} 
	return total;
}