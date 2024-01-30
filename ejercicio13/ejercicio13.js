/** Ejercicio 13
 * Construir un algoritmo tal que dado los datos de la base y la altura de un rectángulo calcule el perímetro y la superficie del mismo.
        Superficie= base*altura
        Perímetro = 2*(base + altura)
    La funcion debera retornar un string que diga La superficie es de 'x' o El perimetro es de 'x'
 */

function calcularSuperficie(a, b) {
if (a!==0 && b!==0){
return "La superficie es de " + (b * a);
}else {}
}

function calcularPerimetro(a, b) {
if (a!==0 && b!==0){
return "El perimetro es de " + (2 * (b + a));
}else {}
}


module.exports = { calcularPerimetro, calcularSuperficie };
