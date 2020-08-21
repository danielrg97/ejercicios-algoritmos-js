const EXPRESION_INFIJA = '4 * 2 - 2 / 4 * 67 ^ 2';

const PRECEDENCIA_1 = ['+', '-'];
const PRECEDENCIA_2 = ['*', '/'];
const PRECEDENCIA_3 = ['^'];
let pilaOp = [];
let resultado = '';
function infijaAPostfija(){
	const ARR_INFIJA = EXPRESION_INFIJA.split(' ');

	ARR_INFIJA.forEach( char => {
		//Si se valida que es un operador, se valida precedencia del operador
		if(PRECEDENCIA_1.includes(char) || PRECEDENCIA_2.includes(char) || PRECEDENCIA_3.includes(char)){
			validarPrecedencia(char, pilaOp);
		}else if(char === '('){
			pilaOp.push(char);
		}else if(char === ')'){
			pilaOp.push(char);
			casoParentesisDerecho();
		}else{
			//Este es el caso que no es operador sino un operando
			resultado += ','+char;
		}
	})
	//Pulir el resultado
	pilaOp.length > 0 ? resultado += ','+pilaOp.reverse():'';
	resultado = resultado.substr(1);
	console.log(resultado);
	document.getElementById('postfija').innerHTML =resultado;
	document.getElementById('resultado').innerHTML = operarPostfija(resultado);
	//Limpio variables una vez impresos
	pilaOp = [];
	resultado = '';
}
	/**
	*Regas para validar precedencia:
	*
	*1)operador == precedencia -> se cambia 
	*si el operador que estamos evaluando es de igual precedencia al que acabamos de escribir, se cambia en la pila de operadores
	*
	*2)operador > precedencia -> se agrega a la pila
	*Si el operador que estamos evaluando es de mayor precedencia al que acabamos de escribir, se agrega a la pila
	*
	*3)operador < precedencia -> se sacan los operadores
	*Si el operador que estamos evaluando es de menor precedencia al que acabamos de escribir, se sacan los operadores de la pila
	*
	*4)parentesis derecho ')' -> vacia la pila
	*Si el operador que estamos evaluando es un parentesis derecho, se vacia la pila
	*
	*/
function validarPrecedencia(char, pila){
	if(pilaOp.length >0){
		let ultimoOperador = pila[pila.length - 1];
		if (ultimoOperador === '(') {
			pilaOp.push(char);
		}else if((PRECEDENCIA_1.includes(char) && PRECEDENCIA_1.includes(ultimoOperador))
			|| (PRECEDENCIA_2.includes(char) && PRECEDENCIA_2.includes(ultimoOperador))
			|| (PRECEDENCIA_3.includes(char) && PRECEDENCIA_3.includes(ultimoOperador))){
			pilaOp.splice(pila.length - 1, 1, char);
			resultado += ','+ultimoOperador;
			//"IGUAL";
		}else if((PRECEDENCIA_1.includes(char) && !PRECEDENCIA_1.includes(ultimoOperador))
			||(PRECEDENCIA_2.includes(char) && PRECEDENCIA_3.includes(ultimoOperador))){
			resultado += ","+pilaOp.reverse();
			pilaOp=[];
			pilaOp.push(char);
			return "MENOR";
		}else{
			pilaOp.push(char);
			return "MAYOR";
		}
	}else{
		pilaOp.push(char);
	}
}
function casoParentesisDerecho(){
	//En el caso de ser un parentesis derecho, se eliminan estos parentesis, se agregan los operadores al resultado y vacio la pila de operadores
	pilaOp.splice(pilaOp.indexOf('('), 1);
	pilaOp.splice(pilaOp.indexOf(')'), 1);
	resultado += ','+pilaOp;
	pilaOp = [];
}


function operarPostfija(expresionPostfija){
	let pilaOp2 = [];
	const ARR_POSTFIJA = expresionPostfija.split(',');
	ARR_POSTFIJA.forEach(char => {
			switch(char){
				//si es un operador (+, -, *, /, ^) opero los dos valores anteriores con el operador
				case '+':
					let valorS = pilaOp2[pilaOp2.length - 2] + pilaOp2[pilaOp2.length - 1];
					pilaOp2.splice(pilaOp2.length - 2, 2, valorS);
					break;
				case '-':
					pilaOp2.splice(pilaOp2.length - 2, 2, pilaOp2[pilaOp2.length - 2] - pilaOp2[pilaOp2.length - 1]);
					break;
				case '*':
					let valorP = pilaOp2[pilaOp2.length - 2] * pilaOp2[pilaOp2.length - 1];
					pilaOp2.splice(pilaOp2.length - 2, 2, valorP);
					break;
				case '/':
					pilaOp2.splice(pilaOp2.length - 2, 2, pilaOp2[pilaOp2.length - 2] / pilaOp2[pilaOp2.length - 1]);
					break;
				case '^':
					pilaOp2.splice(pilaOp2.length - 2, 2, Math.pow(pilaOp2[pilaOp2.length - 2], pilaOp2[pilaOp2.length - 1]));
					break;
				default:
					//Si no es operador, es un operando, asi que agrego el numero
					pilaOp2.push(parseInt(char));
					break;
			}
	});
	//Sumo con reduce todos los valores de la pila
	return pilaOp2.reduce((a, b) => a + b);
}