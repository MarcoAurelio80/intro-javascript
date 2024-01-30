/**
 *  Ejercicio 3
 * Algoritmo que lea tres numeros y nos retorne el mayor o que, en caso de serlo,
 * nos retornara un string que diga iguales.
 * Recuerda usar la estructura condicional If.
 */

function compareThreeNumbers(a,b,c) {
    
            if( typeof a!== "number" || typeof b!== "number" || typeof c!== "number") {
            return "No has introducido un caracter valido";
            }else if( a >= b && a >= c && b !== c ) {
                return a;
            }else if( b >= a && b >= c && a !== c ) {
                return b;
            }else if( c >= a && c >= b && a !== b ) {
                return c;
            }else{
                return "iguales"
                }    
            }
            

module.exports = { compareThreeNumbers };
