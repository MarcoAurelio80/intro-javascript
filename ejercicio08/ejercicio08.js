/**
 *  Ejercicio 8
 *  Crea un algoritmo que reciba el sueldo de un trabajador y
 *  aplique un incremento del 15% si el sueldo es inferior a 1000€.
 *  El algoritmo debera retornar el nuevo salario.
 */

function incrementarSueldo(a) {

if ( a < 1000 ) {
return a + ( a * ( 0.15 ) );
} else { return a; 
}
}

module.exports = { incrementarSueldo };
