//PRE-ENTREGA 1
alert("Bienvenidos a a DECO-HOME")
alert("Las compras pueden ser realizadas por mayores de 18 años")


let nombre;
let edad;

nombre = prompt("Nombre completo, por favor");
edad = prompt("Edad?");

console.log(nombre);
console.log(edad);

let tipoDeCompra;

tipoDeCompra = prompt("Que tipo de compra desea hacer? Mayorista/Minorista");
if (tipoDeCompra == "mayorista") {
    console.log("mostrar opciones mayorista");

} else {
    console.log("mostrar opciones minorista");

}


let nombreUsuario;
let contraseña;
let usuario;
usuario = prompt("ya es usuario? SI/NO")
if (usuario == "si") {

    console.log("pedir usuario y contraseña");

    nombreUsuario = prompt("Ingrese nombre de usuario")

    if (nombreUsuario != "") {

        contraseña = prompt("Ingrese nombre la contraseña")
        if (contraseña != "") {
            console.log("verificando contraseña")

        } else {
            console.log("por favor ingrese contraseña")
        }
    } else {
        alert("por favor ingrese usuario")
    }
}



else {
    console.log("permitir seguir mirando la pagina");

}

alert("Bienvenidos a su carrito")


let continuar;
let precio;
let cantidad;
let total = 0;
let Textiles;

const SABANAS = 250;
const TOALLONES = 200;
const TOALLASdEmANO = 150;


Textiles = alert("1-SABANAS, $250 / 2-TOALLONES, $200 / 3-TOALLAS DE MANO, $150")
do {

    console.log("armando carrito de compras")
    precio = parseFloat(prompt("precio de su eleccion"));
    cantidad = parseInt(prompt("cantidad"));
    total = total + precio * cantidad;
    continuar = prompt("desea agregar otro item en el carrito de compras? si/no")

} while (continuar == "si")

alert("el total del carrito es de $" + total);


//PRE-ENTREGA 2

//FOR...IN

const Sabanas = { color: "blancas", tamaño: "king", hilos: 600 };


for (const atributo in Sabanas) { 
    console.log(atributo + ": " + Sabanas[atributo]);
  }

  
  if ("calidad" in Sabanas){
    console.log("el atributo calidad esta en sabanas");
    } else {
        console.log("el atributo calidad no esta en sabanas");
        }



        //CONSTRUCTORES

function Producto (textil,color,propiedad,precio){ 
    this.textil = textil;  
    this.color = color;
    this.hilos = propiedad;
    this.precio = precio;
    }
    
    const producto1 = new Producto("sabanas","blancas","600 Hilos",  10000);
    
    console.log(producto1)



    //ARRAYS

const arrayVacio = []; 

const arrayTextiles = ["Sabanas", "Toallones", "Toallas de mano"];

console.log (arrayVacio);
console.log (arrayTextiles);


console.log(arrayTextiles[0]);
console.log(arrayTextiles[2]);

arrayTextiles[2] = "funda";

console.log(arrayTextiles)



//ATRIBUTOS
//LENGTH


console.log("cantidad de textiles: " + arrayTextiles.length);

const lista = ["Sabanas", "Toallones", "Toallas de mano"]; 

for(let i = 0; i < lista.length; i ++){
    console.log(lista[i]);
}


//METODOS:

//PUSH

const coloresSabanas = ["blanca", "celeste", "rosada"]
console.log(coloresSabanas);

let masColoresSabanas = "lila";

coloresSabanas.push(masColoresSabanas);
coloresSabanas.push("amarilla");
console.log(coloresSabanas);

//UNSHIFT

coloresSabanas.unshift("verde");
console.log(coloresSabanas);



//CARRITO DE COMPRAS

const carrito = [];

function insertarTextilesEnCarrito(producto){
    carrito.push(producto); 
}

function cargarTextilesEnCarrito() {
    let seguir;
    let producto;
    do {
producto = prompt("Ingrese textil deseado");
insertarTextilesEnCarrito(producto)
seguir = prompt("Desea continuar? si/no");
    }while(seguir === "si");

}

function muestraCarrito() {
   for (let i = 0 ; i < carrito.length; i++) {
    console.log(carrito[i]);
   } 
}

cargarTextilesEnCarrito();
muestraCarrito();


//SHIF

let quitoTextil = carrito.shift();
console.log("Quite el textil: " + quitoTextil);
muestraCarrito();


//POP

let otrotextilQuitado = carrito.pop();
console.log("Quite otro textil; " + otrotextilQuitado);





/// METODOS DE BUSQUEDA Y TRANSFORMACION AVANZADA DE ARRAYS

//SOME
const textiles1 = [{tex:"sabanas", color: "celestes"}, {tex:"toalla", color: "blanca"}]

if(textiles1.some((item) => {return item.tex === "sabanas"})) {
    console.log("tex sabanas tienen descuentos");
}else {
    console.log("no tiene descuento");
}

//MAP
const textiles1SinIVA = [{tex:"sabanas", color: "celestes", precio: 10560.52}, {tex:"toalla", color: "blanca", precio: 8520.89}]
const textiles1ConIVA = textiles1SinIVA.map((item)=> {return {tex : item.tex, color : item.color, precio: item.precio*1.21}})

console.log(textiles1SinIVA)
console.log(textiles1ConIVA)

//MATH
//REDONDEO
console.log("redondeo honesto sin IVA");
textiles1SinIVA.forEach((item) => {
    console.log(Math.round(item.precio))
})

console.log("redondeo honesto con IVA");
textiles1ConIVA.forEach((item) => {
    console.log(Math.round(item.precio))
})

//REDUCE
const totalCarrito = textiles1ConIVA.reduce((total,item) => {return total + item.precio}, 0)
console.log(totalCarrito);

//SORT
textiles1SinIVA.sort ((item1,item2)=> {return item2.precio - item1.precio});
console.log(textiles1SinIVA)

//CLASE DATE
const fechaDeCompra = new Date(2023,3,25);
console.log(fechaDeCompra);
consolelog(fechaDeCompra.toLocaleString)


