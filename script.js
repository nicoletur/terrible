// pedir un hola y mostrar alerta por consola
let saludo = prompt ("Hola estimado cliente, me saludas con un hola?" );

if ((saludo == "Hola") || (saludo == "hola")){
console.log ("Muchas gracias por tu Hola");
}else{
let Segsaludo = prompt ("nuevamente..., me dices hola");
if ((Segsaludo == "Hola") || (Segsaludo == "hola")){
console.log("gracias por saludar");
}else{
console.log("Que mal que no sepas decir hola .... ");
}
}

// pedir un numero entre 10 y 50 y mostrar un alert
let edad  = prompt ("Segun tu edad tenemos un premio para ti, asi que escribe tu edad " );
if ((edad >= 0) && (edad <= 9)){
    alert("Felicidades!! Te has ganado un dulce");
}
else if ((edad >= 10) && (edad <=25)){
    alert ("Felicidades!! Te has ganado una soda");
}
else if ((edad >=26 ) && (edad <=50))  {
    alert ("Felicidades!! Te has ganado unas papitas");
    }
else if ((edad >=51)){
    alert ("Felicidades!! Te has ganado un trocito de pastel");
}

// pedir un numero mayor a 1000 y mostrar un alert
let monto = prompt ("Cuantas Hamburguezas deseas " );

if (monto >=1000)  {
alert ("Llevas mas de 1000 hamburguezas!!! ");
}
else if ((monto >=501 ) && (monto <=999)) {
console.log ("Llevas " + monto + " Debes esperar unas 3 horas a que tu pedido este listo ");
}
else if (( monto <=500) && (monto >=100))  {
document.write ("Llevas " + monto + " Hamburguezas.  Debes esperar unas 2 horas para que tu pedido este listo");
}
else if ( monto <=99) {
alert ( "Llevas " + monto + " Hamburguezas . Debes esperar una hora para que tu pedido este listo");
}



// Ejercicio clase pasada
// let entrada = prompt ("ingresa su nombre");
// let cantidad = prompt ("Cuantas hamburguezas desea")
// let precio = (cantidad * 4500);
// let salida = "hola "+ entrada+ ", llevas " + cantidad + " hamburguezas y su valor es de " + precio;
// alert(salida);

// let numero=prompt("ingrese su telefono: ");

// document.write( "Estimad@ "+ entrada + ", llevas " + cantidad + " hamburguezas y su valor es de " + precio +  " se le avisara al numero "+ numero + " cuando su pedido este listo" );

// console.log( "Estimad@ "+ entrada + ", llevas " + cantidad + " hamburguezas y su valor es de " + precio +  " se le avisara al numero "+ numero + " cuando su pedido este listo" );