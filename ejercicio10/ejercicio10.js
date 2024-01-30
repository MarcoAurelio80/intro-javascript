/**
 *  Ejercicio 10
 *  Construir un algoritmo que reciba la categoria y el sueldo de un trabajador y
 *  calcule el aumento de sueldo correspondiente teniendo en cuenta la siguiente
 *  tabla.
 *
 *  Categoria 1 = Aumento del 15%
 *  Categoria 2 = Aumento del 10%
 *  Categoria 3 = Aumento del 6%
 *  Categoria 4 = Aumento del 3%
 *
 *  El algoritmo debera retornar el nuevo salario. Ten en cuenta que el sueldo del
 *  trabajador podria no entrar en ninguna categoria.
 */

function nuevoSalario(a, b) {

if (b === 1){
return a + ( a * (15/100));
}else{
  if (b === 2){
    return a + ( a * (1/10));
    }else{  
      if (b === 3){
      return a + ( a * (6/100));
      }else{
        if (b === 4){
        return a + ( a * (3/100));
        }else{ 
          if( b=== 5){
            return a ;
          }
        }
      }  
    }
  }
}
// El ejercicio se tiene que hacer con swicth//
/*function nuevoSalario(salary, category){
switch(category){
  case 1:
    return salary *(1.15);

}
}
*/
module.exports = { nuevoSalario };
