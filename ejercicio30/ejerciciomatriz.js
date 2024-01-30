
let matrix = [[1, 2,3],
             [4, 5, 6], 
            [7, 8, 9]]

function matrixSum(matrix) {
    let suma = 0;
    for( let i = 0; i < matrix.length; i++) {   /* i son las filas */
    for( let j = 0; j < matrix.length; j++) {   /* j elementos columnas*/
    suma += matrix [i] [j];                     /*Aqui especificamos la suma por la dimensión de la matriz*/
    /*console.log("%d", matrix [i] [j]);*/   
    }
    console.log("=%d", suma);
    return suma;
}
}
/*/let aux = matrix [i] [j];
console.log(aux)*/
matrixSum();


