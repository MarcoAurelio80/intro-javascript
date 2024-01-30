/**
 *  Ejercicio 15
 *  Modificar el algoritmo del ejercicio 6, de forma que, si se teclea un cero,
 *  la funcion te vuelva a pedir que introduzcas otro numero.
 */
function parImparNulo(number){
    
    if(number == 0 ) {
        return "Introduce otro numero";  
    }else {if(number % 2 !== 0) {
        return "El numero es impar";
    }else {
        return "El numero es par";
    }
}
}

module.exports = { parImparNulo };
