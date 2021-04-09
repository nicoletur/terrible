
// function datosUsuario (a, b, c) {
//     this.nombre = a;
//     this.comuna = b,
//     this.pago = c;
//     this.saludar = function(){
//         console.log("Estimado " + this.nombre + " se ha ingresado su metodo de pago " + this.pago)
//     }
// }
 
//     let nombre = prompt ("Ingresar Nombre ");
//     let comuna = prompt (" Ingrese su comuna");
//     let pago = prompt ("Ingresar tipo de pago en tarjeta o efectivo");
         
//     let alumnoLuis = new datosUsuario (nombre, comuna, pago)
    
//     console.log(alumnoLuis);
//     console.log(alumnoLuis.saludar());


// const Comuna = [ 2000, 0 , 500, 1000, 1500, 2000]
// let maipu = Comuna[0] + Comuna[1]; 
// let cerrillos = Comuna[0] + Comuna[2];
// let quinta = Comuna[0] + Comuna[3];
// let prado = Comuna[0] + Comuna[4]
// let estCentral = Comuna[0] + Comuna[5];

// const excluirCobro = Comuna.slice(1,6)

// for (let i = 0 ; i < Comuna.length ; i ++) {
//     console.log(Comuna[i]);
// }

// console.log(Comuna.length);
// console.log(excluirCobro.length);



const Ingredientes = [ { id: 0 ,  producto: "Hamburguesa", precio: 600},
                        { id: 1,  producto: "Pan Casero Hamburguesa", precio: 300 },
                        { id: 2,  producto: "Ketchup", precio: 50 },
                        { id: 3,  producto: "Tomate", precio: 50 },
                        { id: 4,  producto: "Mayonesa Casera", precio: 50},
                        { id: 5,  producto: "Tocino", precio: 100 },
                        { id: 6,  producto: "Cebolla", precio: 30 },
                        { id: 7,  producto: "Salsa Barbacoa", precio: 50 },
                        { id: 8 , producto: "Croqueta", precio: 400},
                        { id: 9,  producto: "Lechuga", precio: 20 },
                        { id: 10, producto: "Palta", precio: 200 },
                        { id: 11, producto: "Queso", precio: 100 },
                        { id: 12, producto: "Pan Completo", precio: 150}]

Ingredientes.push( {id: 13, producto:"Champiñon", precio: 300} , {id:14, producto: "vienesas", precio: 250} )

const tipoHamburguesa = [ "Hamburguesa Basica", "Hamburguesa Glotona", "Hamburguesa  campestre", "Hamburguesa Royal", "Chacarera", 
                        ]

const bebidasCCU = [ "Pepsi", "Crush", "Pap", "Bilz" ]
const bebidaCocacola = [ "Cocacola ", "Fanta", "Sprite"]
const bebidas = bebidasCCU.concat (bebidaCocacola);


console.log(bebidas.join (" - "))

console.log(bebidas.indexOf ("Limon Soda"))
console.log(bebidas.indexOf ("Pepsi"))

console.log(tipoHamburguesa.join(" * "));

for (let Ingrediente of Ingredientes) {
    console.log(Ingrediente);
        }


        Ingredientes.sort(function (a, b) {
            if (a.producto > b.producto) {
              return 1;
            }
            if (a.producto < b.producto) {
              return -1;
            }
              return 0;
          });
          console.log('ordenado por nombre de producto:', Ingredientes.sort());



          Ingredientes.sort(function (a, b) {
            if (a.precio > b.precio) {
              return 1;
            }
            if (a.precio < b.precio) {
              return -1;
            }
              return 0;
          });
          console.log('ordenado por precio:', Ingredientes.sort());