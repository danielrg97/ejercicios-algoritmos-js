function evento(){
	console.clear();
	let n = document.getElementById("numberSelector").value;
	let number = 4;
	simpleStylesFunc(n)
	while(n % 4 === 0 && number<=n && number < 100){
		console.log("imprime", number);
		number = (number + 4 );
	}
}
function simpleStylesFunc(n){
	document.getElementById("esMultiplo").innerHTML = n % 4 === 0 ? "Es Múltiplo, Abre consola con el resultado": "No Es Múltiplo";
	document.getElementById("esMultiplo").style = n % 4 === 0 ? "color: green":"color: red";
}