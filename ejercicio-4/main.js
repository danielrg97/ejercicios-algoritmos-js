function leerArchivo(e) {
  //obtengo archivo
  var archivo = e.target.files[0];
  if (!archivo) {
    return;
  }
  var lector = new FileReader();
  lector.onload = function(e) {
    var contenido = e.target.result;
    mostrarContenido(contenido);
  };
  lector.readAsText(archivo);
}

function mostrarContenido(contenido) {
  //Imprimo los valores del archivo en el docummento
  var elemento = document.getElementById('contenido-archivo').innerHTML = contenido;
  //Creo el array de numeros a recorrer
  var arrayNumeros = contenido.split("\n").map(number => parseInt(number));
  //Filtro los valores por los que no son numeros y si la longitud es mayor a 0 es que no contiene la estructura solicitada
  var correctStructure = arrayNumeros.filter( p => Number.isNaN(p)).length === 0;
  //Si no tiene la estuctura correcta imprimo su correspondiente error
  if(!correctStructure){
    document.getElementById('estructuraArchivo').innerHTML = "La estructura del archivo es incorrecta"; 
    document.getElementById('sumaPrimo').innerHTML = "No es posible calcular.";
    document.getElementById('sumaPar').innerHTML = "No es posible calcular.";
    return;
  }
  //Si tiene la estuctura correcta recorro el array, valido y sumo
  let parSum = 0;
  let primoSum = 0;
  for (var i = 0; i < arrayNumeros.length; i++) {
      let numero = arrayNumeros[i];
      //Un numero es par si al ser divido entre dos, retorna un numero entero 
      if(numero % 2 === 0){
        parSum += numero;
      }
      primo(numero) ? primoSum += numero : "";
  }
  document.getElementById('sumaPrimo').innerHTML = primoSum;
  document.getElementById('sumaPar').innerHTML = parSum;
}
//Un numero primo es un numero mayor que 1 que no es producto de 2 o mas numeros menores
function primo(numero){
  for (var i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return numero !== 1;
}

document.getElementById('entradaArchivo')
  .addEventListener('change', leerArchivo, false);