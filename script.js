
window.onload = function(){
  var nombreUsuario = prompt("Bienvenido al Terrible, me dices tu nombre?");
  document.querySelector (".saludoInicial").innerHTML = nombreUsuario;
}



var Frases = new Array()
Frases[0] = "Gracias por visitarnos";
Frases[1] = "Con que te vamos a deleitar en esta ocasion";
Frases[2] = "Si es tu primera vez, quedaras con unas ganas Terribles de más";
Frases[3] = "Bienvenido nuevamente, con que te deleitaremos hoy";
Frases[4] = "Bienvenido a probar la mejor hamburguesa de la zona Poniente"
Frases[5] = "Si no sabes que eleguir, prueba con las terribles, te encantaran"
Frases[6] = "Busca tu hamburgueza, tenemos para todos los gustos"

function aleatorio() {
  document.querySelector("#resultado").innerHTML = "";//Limpia el mensaje anterior
  nro = Math.floor(Math.random() * (Frases.length - 0) + 0);//obtienes el valor aleatorio siempre acorde al tamaño de tu array
  document.querySelector("#resultado").innerHTML = Frases[nro];//imprime resultado
}
aleatorio();





const Ingredientes = [ { id: 0 ,  producto: "Huevo", precio: 600 },
                        { id: 1,  producto: "Hamburguesa", precio: 300 },
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
                        { id: 12, producto: "Porotos Verdes", precio: 150}]

Ingredientes.push( {id: 13, producto:"Champiñon", precio: 300} , {id:14, producto: "vienesas", precio: 250} )



for (const ingrediente of Ingredientes) {
    let contenedor = document.createElement("div");
    //Definimos el innerHTML del elemento con una plantilla de texto
    contenedor.innerHTML = `<h4> ${ingrediente.producto}<h4>
                            <b> $ ${ingrediente.precio}</b>`;
    document.querySelector ('.ingredientes').appendChild(contenedor);
}



const tipoHamburguesa = [ "Hamburguesa Basica", "Hamburguesa Glotona", "Hamburguesa  campestre", "Hamburguesa Royal", "Chacarera", 
                        ]

const bebidasCCU = [ "Pepsi", "Crush", "Pap", "Bilz" ]
const bebidaCocacola = [ "Cocacola ", "Fanta", "Sprite"]
const bebidas = bebidasCCU.concat (bebidaCocacola);


console.log(bebidas.join (" - "))


console.log(bebidas.indexOf ("Limon Soda"))
console.log(bebidas.indexOf ("Pepsi"))

console.log(tipoHamburguesa.join(" * "));

//ordenamiento sort
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





  