const nombre = prompt("¿Cuál es tu nombre?");
const producto = prompt("¿Qué producto querés comprar?");
const precio = Number(prompt("¿Cuál es el precio del producto?"));
const cantidad = Number(prompt("¿Cuántas unidades querés comprar?"));

const total = precio * cantidad;

const mensaje = "Hola " + nombre + ". Compraste " + cantidad + " unidades de " + producto + ".";

console.log(mensaje);
console.log("El precio total es $" + total);

alert(mensaje + " El total de tu compra es $" + total);