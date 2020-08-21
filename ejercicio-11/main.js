let arrToken =[];
let token = new Map();
token.set('data', new Map());
token.get('data').set('record', new Map());

function agregarPorCadena(){
	let cadena = document.getElementById('cadena').value;
	let arrCadena = cadena.split('},{');
	arrCadena.splice(0, 1, arrCadena[0].substr(1));
	arrCadena.splice(arrCadena.length - 1, 1, arrCadena[arrCadena.length-1].substr(0, arrCadena[arrCadena.length-1].length-1));
	arrCadena.forEach(p => {
		token.get('data').get('record').set(capitalizar(p), {});
	});
	console.log(arrCadena);
	document.getElementById('token').innerHTML = JSON.stringify(mapToObj(token), null, 2);
}
function capitalizar(palabra){
	return palabra.charAt(0).toUpperCase() +  palabra.slice(1).toLowerCase();
}
function mapToObj(map){
	let obj = {};
	map.forEach((value, key) => {
		obj[key] = value instanceof Map ? mapToObj(value): value;
	})
	return obj;
}