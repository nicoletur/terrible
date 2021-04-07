// quisiera agregar las variables a continuacion a esta function, logre que mostrara la comuna pero no asi el monto... , si pudieras ayudarme... 
// var cobro = 2000;
// var Maipu = 0 + cobro;
// var Cerrillos = 500 + cobro;
// var Quinta = 1000 + cobro;
// var Prado = 1500 + cobro;
// var EstCentral = 2000 + cobro;

// function Usuario (nombre, comuna) {
//     this.name = nombre;
//     this.ubicacion = comuna;
//      this.saludoInicial = function (){
//         alert("Hola "+ this.name + " se despachara a la comunda de  : " + this.ubicacion )
//     }
// }

// let nameUsuario = prompt("Ingresar Nombre ");
// let suUbicacion = prompt("las comunas a considerar son Maipu , Cerrillos, Quinta, Prado, EstCentral , escriba de este mismo modo, ¡Por Favor!");

// if ((nameUsuario !== null) && (suUbicacion !== null)){

//     let primerUsuario = new Usuario(nameUsuario, suUbicacion );
//     primerUsuario.saludoInicial();
    
// }


class Hamburgueza{
    constructor(tipo, acompañamiento, bebida) {
        this.tipo = comer;
        this.acompañamiento = comida;
        this.bebida  = liquido;
    }
    Mensaje(){
        alert("has elegido " + this.tipo + " " + this.acompañamiento + " " + this.bebida);
    }
}
let comer = prompt ("Hamburgueza o Completo")
let comida = prompt("Aros de Cebolla o Papa Rusticas")
let liquido = prompt ("Que bebida deseas") 

if (( comer == "Hamburgueza")|| (comer == "Completo")){

    let persona1 = new Hamburgueza(comer, comida, liquido)    
persona1.Mensaje();
    
}
else {
    alert ("vuelve a elegir")
    comer = prompt ("Hamburgueza o Completo")
    comida = prompt("Aros de Cebolla o Papa Rusticas")
    liquido = prompt ("Que bebida deseas") 

    let persona2 = new Hamburgueza(comer, comida, liquido)    
persona2.Mensaje();
}




// var cobro = 2000;
// var Maipu = 0 + cobro;
// var Cerrillos = 500 + cobro;
// var Quinta = 1000 + cobro;
// var Prado = 1500 + cobro;
// var EstCentral = 2000 + cobro;


// alert ("las comunas a considerar son Maipu , Cerrillos, Quinta, Prado, EstCentral , escriba de este mismo modo, ¡Por Favor! ")

// let comuna = prompt("Calcula tu delivery segun comuna");

//     while (comuna != null ){
       
//     switch (comuna) {
//                 case "Maipu":
//                     alert("El valor de tu delivery es de: " + Maipu);
//                     break;
//                 case "Cerrillos":
//                     alert("El valor de tu delivery es de: " + Cerrillos);
//                     break;
//                 case "Quinta":
//                     alert("El valor de tu delivery es de: " + Quinta);
//                     break;
//                 case "Prado":
//                     alert("El valor de tu delivery es de: " + Prado);
//                     break;
//                 case "EstCentral":
//                     alert("El valor de tu delivery es de: " + EstCentral);
//                 default :
//                 alert ("Ingrese nuevamente");
            
//             }
//              alert ("gracias por comprar, sabemos que te encantara")
//             break  
               
// } 



// var nombre = prompt ("ingrese su nombre");


// function calculo () {
// let precio =  prompt ("Ingrese el precio:");
// let descuento =  prompt ("Ingrese su porcentaje de descuento");

// let porcentaje = ((precio * descuento) / 100);
// montoPorcentaje(porcentaje);

// alert ("El monto es de " + precio + " y tienes un descuento de " + descuento + " te da un descuento de " + porcentaje);

// }


// function montoPorcentaje (porcentaje) {


//  if (porcentaje <50){
//  alert ( nombre + " creo que deberias buscar un descuento mayor");
//  } else if (porcentaje >50){
//  alert (nombre + "Su descuento es estupendo");
//  }
// }

// calculo ();
// montoPorcentaje();






// En este codigo se cumple el ciclo infinito de while, a menos que se coloqe esc, se usa el switch

// let IngresoBebida = prompt("¿Que bebida deseas? (Pespi, Orange, Bilz, Pap)");
// while(IngresoBebida != "ESC" ){

//     switch (IngresoBebida) {
//         case "Pepsi":
//             alert("Has elegido Pepsi");
//             break;
//         case "Orange":
//             alert("has elegido Orange");
//             break;
//         case "Bilz" :
//             alert("has elegido Bilz");
//             break;
//         case "Pap":
//             alert("has elegido Pap");
//             break;
//             case "pepsi":
//                 alert("Has elegido Pepsi");
//                 break;
//             case "orange":
//                 alert("has elegido Orange");
//                 break;
//             case "bilz" :
//                 alert("has elegido Bilz");
//                 break;
//             case "pap":
//                 alert("has elegido Pap");
//                 break;
//         }
//         IngresoBebida = prompt("¿Que bebida deseas? (Pespi, Orange, Bilz, Pap)");
//         }



// en este codigo se puede salir del ciclo si se cumple la condicion true del while

    // var ingresaBebida;

    // while (true) {
    //     ingresaBebida = prompt("¿Que bebida deseas? (Pespi, Orange, Bilz, Pap)", "");
    //     if ((ingresaBebida == "Pepsi") || (ingresaBebida == "Orange") || (ingresaBebida == "Bilz") || (ingresaBebida == "Pap")||(ingresaBebida == "pepsi") || (ingresaBebida == "orange") || (ingresaBebida == "bilz") || (ingresaBebida == "pap")) {
    //         break;
    //     }
    //     alert("Nuevamente, ¿Que bebida deseas? (Pespi, Orange, Bilz, Pap) ");
    // }
    // alert("Muy buena eleccion!");



// let ingresaBebida = prompt("Que bebida deseas (Pespi, Orange, Bilz, Pap)");

// if ((ingresaBebida == "Pepsi") || (ingresaBebida == "Orange") || (ingresaBebida == "Bilz") || (ingresaBebida == "Pap")||(ingresaBebida == "pepsi") || (ingresaBebida == "orange") || (ingresaBebida == "bilz") || (ingresaBebida == "pap")) {
//     alert("Has elegido una  " + ingresaBebida);
// } else {

// while ((ingresaBebida !="Pepsi") || (ingresaBebida !="Orange") || (ingresaBebida !="Bilz") || (ingresaBebida !="Pap")||(ingresaBebida !="pepsi") || (ingresaBebida !="orange") || (ingresaBebida !="bilz") || (ingresaBebida !="pap")){
//     alert("Error: Ingrese su bebida");

//     ingresaBebida = prompt("Ingresa la bebida que deseas (Pespi, Orange, Bilz, Pap");

// alert("Elegiste " + ingresaBebida);
// }
// }




// for (let i = 1; i <= 5; i++) {
//     if (i == 5){
//         continue;
//     }
//     let nombreTurno = prompt ("Ingrese su nombre:");
//     alert ("Turno N° " + i + " Nombre: " + nombreTurno);
// }


// let NumeroSumado = parseInt (prompt("Ingrese Numero:"))
// for (let i = 1; i <= 10; i++){
//     let result = NumeroSumado + i;
//     alert (NumeroSumado + "+" + i + "=" + result);
// }

// var Hola = ["Hola"]
// let HolaRepeticion = parseInt (prompt("Ingrese Numero de veces que quiere que lo saluden:"))
// for (let i = 0; i < HolaRepeticion; i++){
//     let result = HolaRepeticion + i;
//     let  RepeticionDeHola = Hola + result ;
//     console.log (RepeticionDeHola);
// }





// pedir un hola y mostrar alerta por consola
// let saludo = prompt ("Hola estimado cliente, me saludas con un hola?" );

// if ((saludo == "Hola") || (saludo == "hola")){
// console.log ("Muchas gracias por tu Hola");
// }else{
// let Segsaludo = prompt ("nuevamente..., me dices hola");
// if ((Segsaludo == "Hola") || (Segsaludo == "hola")){
// console.log("gracias por saludar");
// }else{
// console.log("Que mal que no sepas decir hola .... ");
// }
// }

// // pedir un numero entre 10 y 50 y mostrar un alert
// let edad  = prompt ("Segun tu edad tenemos un premio para ti, asi que escribe tu edad " );
// if ((edad >= 0) && (edad <= 9)){
//     alert("Felicidades!! Te has ganado un dulce");
// }
// else if ((edad >= 10) && (edad <=25)){
//     alert ("Felicidades!! Te has ganado una soda");
// }
// else if ((edad >=26 ) && (edad <=50))  {
//     alert ("Felicidades!! Te has ganado unas papitas");
//     }
// else if ((edad >=51)){
//     alert ("Felicidades!! Te has ganado un trocito de pastel");
// }

// // pedir un numero mayor a 1000 y mostrar un alert
// let monto = prompt ("Cuantas Hamburguezas deseas " );

// if (monto >=1000)  {
// alert ("Llevas mas de 1000 hamburguezas!!! ");
// }
// else if ((monto >=501 ) && (monto <=999)) {
// console.log ("Llevas " + monto + " Debes esperar unas 3 horas a que tu pedido este listo ");
// }
// else if (( monto <=500) && (monto >=100))  {
// document.write ("Llevas " + monto + " Hamburguezas.  Debes esperar unas 2 horas para que tu pedido este listo");
// }
// else if ( monto <=99) {
// alert ( "Llevas " + monto + " Hamburguezas . Debes esperar una hora para que tu pedido este listo");
// }


// Ejercicio clase pasada
// let entrada = prompt ("ingresa su nombre");
// let cantidad = prompt ("Cuantas hamburguezas desea");
// let precio = (cantidad * 4500);
// let salida = "hola "+ entrada+ ", llevas " + cantidad + " hamburguezas y su valor es de " + precio;
// alert(salida);

// let numero=prompt("ingrese su telefono: ");

// document.write( "Estimad@ "+ entrada + ", llevas " + cantidad + " hamburguezas y su valor es de " + precio +  " se le avisara al numero "+ numero + " cuando su pedido este listo" );

// console.log( "Estimad@ "+ entrada + ", llevas " + cantidad + " hamburguezas y su valor es de " + precio +  " se le avisara al numero "+ numero + " cuando su pedido este listo" );