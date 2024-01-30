
 /**  Ejercicio 2
 * Escriba un algoritmo que lea dos numeros que retorne el valor
 * de la operacion correcta segun el nombre de la funcion
 */

/*const { number } = require("yargs");

let num1 = number;
let num2 = number;*/


function sum(num1, num2) { 
    return num1 + num2;
}




function subtract(num1, num2) {
    return num1 - num2;
}



function multiply(num1, num2) {
    return num1 * num2;
}



function divide(num1, num2) {
    if (num2 !== 0) {
        return num1 / num2;
    } else {
        return "No se puede dividir por cero.";
    }
}



/* Llama a las funciones con los números proporcionados por el usuario
console.log("Suma:", sum(num1, num2));
console.log("Resta:", subtract(num1, num2));
console.log("Multiplicación:", multiply(num1, num2));
console.log("División:", divide(num1, num2));

// Calcula el total de todas las operaciones
let total = sum(num1, num2) + subtract(num1, num2) + multiply(num1, num2) + divide(num1, num2);
console.log(total);*/


function total(num1, num2) {
return sum(num1, num2) + subtract(num1, num2) + multiply(num1, num2) + divide(num1, num2);
}




module.exports = { sum, subtract, multiply, divide, total };



