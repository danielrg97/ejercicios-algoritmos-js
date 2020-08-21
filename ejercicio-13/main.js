const DATOS_JSON = [
	{ciudad:'Medellin', almacen:'La 30', mes:'Enero', venta:1000},
	{ciudad:'Medellin', almacen:'La 30', mes:'Febrero', venta:800},
	{ciudad:'Medellin', almacen:'Los Alpes', mes:'Enero', venta:1200},
	{ciudad:'Medellin', almacen:'Los Alpes', mes:'Febrero', venta:1000},
	{ciudad:'Medellin', almacen:'Los Alpes', mes:'Marzo', venta:2000},
	{ciudad:'Cali', almacen:'La 30', mes:'Enero', venta:500},
	{ciudad:'Cali', almacen:'La 30', mes:'Febrero', venta:400},
	{ciudad:'Cali', almacen:'Los Alpes', mes:'Enero', venta:800},
	{ciudad:'Cali', almacen:'Los Alpes', mes:'Febrero', venta:700},
	{ciudad:'Cali', almacen:'Los Alpes', mes:'Marzo', venta:600}
];
document.getElementById('valores').innerHTML = JSON.stringify(DATOS_JSON, null, 2);

/**
*funcion para agrupar
*@param array 	:Array que se ordenará
*
*@param por 	:Puntero para obtener el key del cual se ordenará del item. 
*				e.g. c => c.almacen cuando quiero ordenar por almacenes
*
*@param orden 	:Puntero para dar forma al value item que sera el value
*				e.g. o => {return {"id": o.id, "value": o.value}} 
*
*@param setTotal:Bandera booleana para indicar si se va a agregar el total de ventas en el orden
*/
const agrupar = (array, por, orden, setTotal) =>{
	let total = 0;
	const map = new Map();
	array.forEach((item)=> {
		//Obtengo el valor por el cual quiero filtrar (ciudad)
		const key = por(item);
		//De los valores que tengo, busco si ya hay uno con mi key por la cual ordeno, si lo hay, lo añado, sino, le hago set para crear un nuevo grupo
		const collection = map.get(key);
		if(!collection){
			map.set(key, [orden(item)]);
       	} else {
           	collection.push(orden(item));
			setTotal  ? collection.push({"total":collection.map(m => m.venta).reduce((x, y) => x+y)}):'';
       	}
	});
	return map;
};
//Primer agrupamiento: por ciudad	
const agrupados1 = agrupar(DATOS_JSON, c => c.ciudad, obj =>  obj, false);

//Segundo agrupamiento: por mes
//Se itera por ciudad ya que en el primer agrupamiento quedo dividido
const agrupados2 = {};
agrupados1.forEach( (lista, key) => {
	agrupados2[key] = mapToObj(agrupar(lista, c => c.mes, obj=> {return{"almacen":obj.almacen,"venta":obj.venta}}, true));
});

//Convierto a objeto para poder utilizar JSON.stringify ya que el API no me permite con Maps
//Utilice Maps para poder operar mejor los objetos
function mapToObj(map) {
    let obj = {};
    map.forEach((value, key) =>{
        obj[key] = value
    });
    return obj;
}
document.getElementById('ordenado').innerHTML=JSON.stringify(agrupados2, null, 2);
console.log(agrupados2);
