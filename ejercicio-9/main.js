class Nodo{
	constructor(){
		this.nodo ={
			valorAnterior:{valor:"Final"},
			valorSiguiente:{valor:"Inicio"},
			valor:1
		}
	}
	get valorAnterior(){
		return this.nodo.valorAnterior;
	}
	get valorSiguiente(){
		return this.nodo.valorSiguiente;
	}
	get valor(){
		return this.nodo.valor;
	}
	setvalorAnterior(nodo){
		this.nodo.valorAnterior = nodo;
	}
	setvalorSiguiente(nodo){
		this.nodo.valorSiguiente = nodo;
	}
	setValor(numero){
		this.nodo.valor = numero;
	}
	get stringNodo(){
		return ` <[ ${this.nodo.valorAnterior.valor} | ${this.nodo.valor} | ${this.nodo.valorSiguiente.valor} ]> `;
	}
}
class Lista2Ligada{
	constructor(){
		this.cabeza = new Nodo();
	}
	añadirNodo(numero){
		//Creo el nodo que se añadira al inicio
		let nodo = new Nodo();
		nodo.setValor(numero);
		//A la cabeza se le añade este valor al inicio
		this.cabeza.setvalorSiguiente(nodo);
		//Al nodo se le agrega toda la fila(representada en la cabeza) como valor anterior
		nodo.setvalorAnterior(this.cabeza);
		//La cabeza será este nodo para que siempre sea el inicio de la fila
		this.cabeza = nodo;
	}
	removerPrimerNodo(){
		if(this.cabeza.valorAnterior.valorAnterior){
			this.cabeza = this.cabeza.valorAnterior;
		}
	}
	colarElemento(numero){
		//Creo nodo que se colará
		let nodo = new Nodo();
		nodo.setValor(numero);
		//Obtengo la cola de la lista (para llegar al nodo final de la fila)
		let cola = {};
		for (let i = this.cabeza; i.valorAnterior != undefined ; i = i.valorAnterior) {
        	cola = i;
        }
        //A la cola se le añade como valor anterior el nodo a colar (ya que toda la cola quedará atras)
        cola.setvalorAnterior(nodo);
        //Al nodo colado se le añade toda la cola anterior
        nodo.setvalorSiguiente(cola);
        this.cabeza = nodo;
        //Con este ciclo vuelvo a la cabeza la posicion inicial de nuevo para seguir operando
        for(let i = this.cabeza; i.valorSiguiente != undefined; i = i.valorSiguiente){
        	this.cabeza = i;
        }
	}
	mostrar(){
		let arr = [];
		//Recorro nodo por nodo hasta el final de la fila
	   	for (let i = this.cabeza; i != undefined ; i = i.valorAnterior) {
            arr.unshift(i.stringNodo);
        }
        return arr;
	}
}

var lista2L = new Lista2Ligada();
var cont = 1;
function añadirElemento() {
	lista2L.añadirNodo(++cont);
	document.getElementById('lista').innerHTML = lista2L.mostrar().toString().substr(1, lista2L.mostrar().toString().lenght);
}

function eliminarPrimerElemento(){
	lista2L.removerPrimerNodo();
	document.getElementById('lista').innerHTML = lista2L.mostrar().toString().substr(1, lista2L.mostrar().toString().lenght);
}

function colarElemento(){
	lista2L.colarElemento(++cont)
	document.getElementById('lista').innerHTML = lista2L.mostrar().toString().substr(1, lista2L.mostrar().toString().lenght);
}
