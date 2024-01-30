/**
 *  Ejercicio 16
 *  Desarrollar un algoritmo que nos calcule el cuadrado de los 9
 *  primeros numeros naturales. La funcion debera retornar un array
 *  con el resultado de estos nueve numeros ([1,4,9...])
 */

function cuadradoNumerosNaturales() {
let squareArray = [];
    
for (let i = 0; i <= 9; i++) {
squareArray [i] = i ** 2;
}
return squareArray;
}

module.exports = { cuadradoNumerosNaturales };
