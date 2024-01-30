

function tablaPermutaciones(){
let resultado = [""];
let contadorFuncion = 0;
    for(let i = 1; i <= 3; i++) {
    for(let j = 1; j <= 3; j++) {
    for(let k = 1; k <= 3; k++) {
console.log( i,   j,  k );
contadorFuncion ++;
}    
resultado += "\n";    
} 
    
} 
console.log("El número de datos es " + contadorFuncion); 
}

tablaPermutaciones();

/*Tenemos que correr la funcion hasta encontrar el numero de tres cifras creado de forma random creado previamente.*/

/*
  let rndInt = Math.floor(Math.random() * 3 ) + 1; ESTO SE BUSCÓ EN GOOGLE
  for(let i = 1; i <= 3; i++) {
  for(let j = 1; j <= 3; j++) {
  for(let k = 1; k <= 3; k++) {
  console.log( i,   j,  k );
  */
                
function randomNumberCombination(digits){
  let result = ""
  for(let i = 0; i < digits; i ++) { 
    result += Math.floor(Math.random() * 3 ) + 1;
  }
  return result;          
}

console.log(randomNumberCombination(3))

function getCombinationNumber(){
  let attempts = 1;                                      /*CAUSE ATTEMPT ZERO DOESNT MAKE SENS*/
  const combination = randomNumberCombination(3);        /*Cómo almacenar el valor de la funcioón 
                                                          randomNumberCombination para que getCombintionNumber dé la posición. Explicación de lo que hay, se refiere a la funcion anterior randomNumberCombination()*/
  for(let i = 1; i <= 3; i++) {                          /* 1 tiene que <= 3 por que no hay combinación que empiece 0*/
    for(let j = 1; j <= 3; j++) {
      for(let k = 1; k <= 3; k++) {  
        if( combination === `${i}${j}${k}`) {
          return `Has encontrado la combinación en el ${attempts}º intento y era ${combination}`;
        } else {
          attempts++;
        }
      }
    }
  }
}
console.log(getCombinationNumber());

