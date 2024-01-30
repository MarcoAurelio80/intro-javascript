/**
 *  Ejercicio 25
 *  Algoritmo que lea un número entero (lado) y a partir de él cree un cuadrado de asteriscos con ese tamaño.
 *  Los asteriscos sólo se verán en el borde del cuadrado, no en el interior.
 *  Ejemplo, para lado = 4 escribiría:
 *  * * * *
 *  *     *
 *  *     *
 *  * * * *
 *  Recuerda la estructura repetitiva For.
 *
 *  La funcion debera retornar cada linea + un espacio en blanco '\n';
 */

function crearCuadrado(lado) {
  let resultado = "";

for( let i = 1; i <= lado; i ++) {
  let columnas = "";
  //esto repite la cantidad de filas que va ha tener 
  for(let j = 1; j <= lado; j ++) {
    if( i === 1 || i === lado || j === 1 || j === lado) {
      columnas += "*";
    }else{
      columnas += " ";
    }
  }
  resultado += columnas + "\n";
}
return resultado;

}

/*
function crearCuadrado(lado) {
  let resultado = "";
  
  for (let i = 1; i <= lado; i++) {
    let columnas = ""; // Reset columnas for each row
    
    for (let j = 1; j <= lado; j++) {
      if (i === 1 || i === lado || j === 1 || j === lado) {
        columnas += "* ";
      } else {
        columnas += "  ";
      }
    }
    
    resultado += columnas.trim() + "\n"; // Trim to remove trailing space and add a newline
  }
  
  return resultado;
}
*/

module.exports = { crearCuadrado };
