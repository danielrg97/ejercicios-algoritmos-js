class Nodo{
	constructor(){
		this.nodo ={
			nodoIzquierdo:undefined,
			nodoDerecho:undefined,
			valor:undefined,
			factorEquilibrio:0
		}
	}
	get nodoIzquierdo(){
		return this.nodo.nodoIzquierdo;
	}
	get nodoDerecho(){
		return this.nodo.nodoDerecho;
	}
	get valor(){
		return this.nodo.valor;
	}
	get factorEquilibrio(){
		return this.nodo.factorEquilibrio;
	}
	setnodoIzquierdo(nodo){
		this.nodo.nodoIzquierdo = nodo;
	}
	setnodoDerecho(nodo){
		this.nodo.nodoDerecho = nodo;
	}
	setValor(numero){
		this.nodo.valor = numero;
	}
	setFactorEquilibrio(numero){
		this.nodo.factor =numero;
	}
	get stringNodo(){
		return ` <[ ${this.nodo.nodoIzquierdo.valor} | ${this.nodo.valor} | ${this.nodo.nodoDerecho.valor} ]> `;
	}
}

class ArbolBinario{
	constructor(){
		this.raiz = null;
		this.cantidadNodos = 0;
	}
	/*buscar(dato, raiz){
		if(raiz == null){
			return null;
		}else if(raiz.valor === dato){
			return raiz;
		}else if(raiz.valor < dato){
			return this.buscar(dato, raiz.nodoDerecho);
		}else{
			return this.buscar(dato, raiz.nodoIzquierdo);
		}
	}
	obtenerFactorEquilibrio(nodo){
		if(!nodo){
			return -1;
		}else{
			return nodo.factorEquilibrio;
		}
	}
	rotacionIzquierda(nodo){
		aux = nodo.nodoIzquierdo;
		nodo.nodoIzquierdo = aux.nodoDerecho;
		aux.nodoDerecho = nodo;
		nodo.setFactorEquilibrio(Math.max(nodo.nodoDerecho nodo.nodoIzquierdo));
	}*/
	
	mostrar(){
		return JSON.stringify(this.raiz, null, 2);
	}
}
var arbol = new ArbolBinario();
let i =0;
var contadorNodos =
function añadirElemento(){
	for (var j = 0; j < 6; j++) {
		arbol.añadir(++i);
		document.getElementById('elemento').value = i;
		document.getElementById('arbol').innerHTML = arbol.mostrar();
	}
}
