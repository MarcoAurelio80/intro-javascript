

function crearCuadrado(lado) {
    let resultado = "";
    
  for( let i = 1; i <= lado; i ++) {
    let columnas = " ";
    //esto repite la cantidad de filas que va ha tener 
    for(let j = 1; j <= lado; j ++) {
      if( i === 1 || i === lado || j === 1 || j === lado) {
        columnas += "* ";
      }else{
        columnas += "  ";
      }
    }
    resultado += columnas.trim() + "\n";
  }
  return resultado;
  
  }
/* 

function crearCuadrado(lado) {
    let resultado = "";
    
    for (let i = 1; i <= lado; i++) {
      let columnas = ""; // Reset columnas for each row
      
      for (let j = 1; j <= lado; j++) {
        if (i === 1 || i === lado || j === 1 || j === lado) {
          columnas += "* ";
        } else {
          columnas += "  ";
        }
      }
      
      resultado += columnas.trim() + "\n"; // Trim to remove trailing space and add a newline
    }
    
    return resultado;
  }
  */
  console.log(crearCuadrado(5));

    