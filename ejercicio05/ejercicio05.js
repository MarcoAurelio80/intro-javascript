/**
 *  Ejercicio 5
 *  Construir un algoritmo que reciba un numero entero y retorne
 *  un string que nos indique si es positivo, negativo o nulo.
 *  Debes tener en cuenta la opcion de que no se introduzca un
 *  numero.
 */


function determinarTipoNumero(x) {
    if( isNaN(x)) {
    return "No has introducido un numero";
    }else if(x > 0) {
    return "El numero es positivo";
    }else if(x < 0) {
    return "El numero es negativo";
    }else{
    return "El numero es nulo";
    }
    }
    
   

module.exports = { determinarTipoNumero };
