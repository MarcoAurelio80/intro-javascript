function tablaDeMultiplicar2(){
    let resultado = "";
    for(let k = 1 ; k <= 10 ; k++) {  
    for(let i = 1 ; i <= 10; i++) {
        console.log( k  + " x " + i + " = " + ( k * i)) ; /*console.log(`${n} * ${i} = ${n * i}`);*/
      }
      resultado += "\n";
    }
    
  }
  tablaDeMultiplicar2(); 