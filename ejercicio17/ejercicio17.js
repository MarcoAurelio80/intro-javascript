/**
 *  Ejercicio 17
 *  Crea un algoritmo que nos calcule la suma de los N primeros numeros
 *  naturales que seran introducidos como parametro de la funcion.
 *  La funcion retornara la suma.
 */

function calcularSumaNumerosNaturales(N) {
let sumaNumeros = 0;
for( i = 0; i <= N ; i++){

sumaNumeros += i;
}
return sumaNumeros;
}

module.exports = { calcularSumaNumerosNaturales };
