/**
 *  Ejercicio 11
 *  En una tienda efectuan un descuento a los clientes dependiendo de la cantidad
 *  de la compra. El descuento se basa en lo siguiente:
 *
 *  Si el monto es menor que 500€ -> No hay descuento
 *  Si el monto está comprendido entre 500€ y 1.000€ inclusive –> 5% descuento
 *  Si el monto está entre 1.000€ y 7.000€ inclusive -> 10% descuento
 *  Si el monto está entre 7.000€ y 15.000€ inclusive -> 20% descuento
 *  Más de 15.000€ -> 25% descuento
 *
 *  El algoritmo recibira la cantidad y retornara el precio final aplicandole el
 *  descuento correspondiente.
 */
/*NOTE: JavaScript doesn't support the syntax I using initially for multiple comparisons."( if(500<= a <= 1000))"" 
Instead, one should separate each comparison with the logical AND (&&) operator.*/

function descuentoCompra(a) {
if (a < 500){ return a;
} 
else if(a >= 500 && a <= 1000) {return a - (a * 5/100);
}
else if(a >= 1000 && a <= 7000) {return a - (a * 10/100);
}
else if(a >= 7000 && a <= 15000) {return a - (a * 20/100);
}
else if(15000< a ) {return a - (a * 25/100);
}
else{

}
}

module.exports = { descuentoCompra };
