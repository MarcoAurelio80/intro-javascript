/**
 *  Ejercicio 18
 *  Se pide representar un algoritmo que nos calcule la suma de los N primeros numeros
 *  pares a partir de N, recibida en los parametros de la funcion. Es decir,
 *  si le pasamos 5 a la funcion, nos hara la suma de 6+8+10+12+14.
 *
 *  La funcion retornara la suma
 */

function sumaNPrimerosNumerosPares(N) {
    let sumaPares = 0;
  
    for (let i = 0; i < N; i++) {
      let numeroPar;
      
      if (N % 2 === 0) {
        // N is even
        numeroPar = N + i * 2; //While returning an answer on a IF condicional, one CAN use a variable name
      } else {
        // N is odd
        numeroPar = (N + 1) + i * 2;
      }
  
      sumaPares += numeroPar;
    }
  
    return sumaPares;
  }
  
  module.exports = { sumaNPrimerosNumerosPares };

/*
function sumaNPrimerosNumerosPares(N) {
  
    let sumaPares = 0;
  
    if( N % 2 === 0 ){
    return N + i * 2 ;
    }else{   
        for (let i = 0; i < N; i++) {
  
        let numeroPar = (N  + 1) + i * 2  ;
  
        sumaPares += numeroPar;
    }
    return sumaPares;
    }
}

module.exports = { sumaNPrimerosNumerosPares };
*/

