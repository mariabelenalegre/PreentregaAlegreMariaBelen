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








