let n = 100; 
/**
*Solucion 1: Procedimental
*Esta solucion se hace sumando cada cuadrado uno por uno, 
*en mayor cantidad de numeros naturales, mas podria afectar performace

let formula = 0;
for(var i = 1; i <= n; i++){
	formula += Math.pow(i, 2);
}
**/

/**
*Solicion 2: Formula matematica:
*Esta solucion se hace con un algoritmo matematico 
*que permite hacer el procedimiento con numeros muchos mas grandes sin afectar el performance con ciclos
**/
let formula = (2*(Math.pow(n, 3)) + 3*(Math.pow(n, 2)) + n) / 6 ;
document.getElementById('resultado').innerHTML = formula;
console.log("resultado ",formula)