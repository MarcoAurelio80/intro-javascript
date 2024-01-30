/**
 *  Ejercicio 30
 *  Escribir un algoritmo para cada apartado que retorne un triangulo como los mostrados
 *  a continuacion hasta un numero de filas introducidos por teclado. El algoritmo recibira el
 *  numero de filas por parametros.
 *  Si ponemos 4 los triangulos serán asi:
 *
 *  a) 1
 *     12
 *     123
 *     1234
 *
 * b) 1
 *    22
 *    333
 *    4444
 *
 * c) 1
 *    23
 *    456
 *    78910
 *
 *  Recuerda la concatenacion y el uso de espacios en blanco (\n)
 */

// Apartado A --------------------------------------------------------------------------
//n es el número de lineas que se recibe//
function trianguloConsola(n) {
 let resultado = "";
  for(let i = 1; i <= n; i++) {
    for(let j = 1; j <= i ; j++) {
      resultado += j;
   }
     resultado += "\n";

  }
  return(resultado);     //para pasar el test cambiar a return.
}
//para que funcione el node debes ellamar la funcion.



// Apartado B --------------------------------------------------------------------------
function trianguloConsolaB(n) {
  let resultado = "";
  for(let i = 1; i <= n; i++){
    for(let j = 1 ; j <= i; j++){
      resultado += i;
    }
    resultado += "\n";
  }
  return(resultado);
}


// Apartado C --------------------------------------------------------------------------
function trianguloConsolaC(n) {
  let resultado = "";
  let counter = 0;

  for(let i = 1; i <= n; i++){
    for(let j = 1 ; j <= i; j++){
      resultado = resultado + counter + " "; 
      counter++;
      
    }
    resultado = resultado + "\n";/*esto sirve para concatenar los resultados, y hacer un salto de linea)*/
  }
  return(resultado);
}


module.exports = { trianguloConsola, trianguloConsolaB, trianguloConsolaC };
