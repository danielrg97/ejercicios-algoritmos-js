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
		this.raiz = new Nodo();
		this.cantidadNodos = 0;
	}
	añadir(numero){
		this.añadirNodo(numero, this.raiz);
	}
	añadirNodo(numero, raizP){
		let nodo = new Nodo();
		nodo.setValor(numero);
		nodo.setFactor(++nodo.factor)
		if(!raizP.nodoDerecho){
			raizP.setnodoDerecho(nodo);
		}else if(!raizP.nodoIzquierdo){
			raizP.setnodoIzquierdo(nodo);
		}else{
			if(!raizP.nodoDerecho.nodoDerecho || !raizP.nodoDerecho.nodoIzquierdo){
				this.añadirNodo(numero, raizP.nodoDerecho);
			}else if(!raizP.nodoIzquierdo.nodoDerecho || !raizP.nodoIzquierdo.nodoIzquierdo){
				this.añadirNodo(numero, raizP.nodoIzquierdo);
			}else if(raizP.nodoDerecho.nodoDerecho && !raizP.nodoIzquierdo.nodoIzquierdo){
				this.añadirNodo(numero, raizP.nodoIzquierdo);
			}else{
				this.añadirNodo(numero, raizP.nodoDerecho);
			}
		}
	}
	contarNodos(){
		let raiz = this.raiz;
		while(raiz.nodoDerecho || raiz.nodoIzquierdo){
			if(raiz.nodoDerecho){
				this.cantidadNodos++;
			}
			if(raiz.nodoIzquierdo){
				this.cantidadNodos++;
			}
			if(raiz.nodoDerecho.nodoDerecho || raiz.nodoDerecho.nodoIzquierdo){
				raiz = raiz.nodoDerecho
			}
			if(raiz.nodoIzquierdo.nodoIzquierdo)
		}
	}
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
