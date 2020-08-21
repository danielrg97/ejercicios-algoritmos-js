class Pila {
	constructor(){
		this.pila = [];
	}
	eliminar() {
		return this.pila.pop();
	}
	añadir(producto){
		return this.pila.push(producto);
	}
	obtener(){
		let obtener = this.pila[length-1];
		this.pila.pop()
		return obtener;
	}
}

var pila = new Pila();
let listaDeProductos =[
	{
		producto:"SmartPhone",
		valor:1000
	},
	{
		producto:"MacBook Pro",
		valor:2500
	},
	{
		producto:"Reloj",
		valor:500
	},
	{
		producto:"Estuche",
		valor:50
	},
	{
		producto:"PS4",
		valor:400
	}
];
var select = document.getElementById("selectProd"); 

for(var i = 0; i < listaDeProductos.length; i++) {
    var opt = listaDeProductos[i];
    var el = document.createElement("option");
    el.textContent = opt.producto;
    el.value = JSON.stringify(opt);
    select.appendChild(el);
}
function agregarProductoATransaccion(){
	let productoEntrante = select.options[select.selectedIndex].value;
	pila.añadir(productoEntrante);
	document.getElementById('pila').innerHTML = JSON.stringify(pila.pila, null, 2);
}
function pagar(){
	pila.obtener();
	document.getElementById('pila').innerHTML = JSON.stringify(pila.pila, null, 2);
}
