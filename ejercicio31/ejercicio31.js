/**
 *  Ejercicio 31
 *  Algoritmo que lea un numero entero (altura) y a partir de el,cree
 *  una escalera invertida de asteriscos con esa altura.
 *  Debera quedar asi, si ponemos una altura de 5
 *  *****
 *   ****
 *    ***
 *     **
 *      *
 *
 *  Deberas recordar la concatenacion y el uso de espacio en blanco (\n)
 */

function crearTriangulo() {
    let resultado = "*";
    for(i = 1 ; i <= 4 ; i++){
      for(j = 1 ; j <= 1 ; j--;){
        resultado += j;
      }
    }

}

module.exports = { crearTriangulo };
