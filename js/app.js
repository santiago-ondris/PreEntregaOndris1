function procesarCompra() {
  for (let i = 1; i <= 10; i++) {
    let cantidad = prompt("Ingresa cuantos borcegos queres");
    if (cantidad >= 1 && cantidad <= 10) {
      alert("Comunicate con venta minorista");
    } else if (cantidad > 10 && cantidad <= 20) {
      alert("Comunicate con venta mayorista");
    } else if (cantidad > 20) {
      alert("No podes comprar tantos");
    } else {
      alert("No nos estas tomando en serio, chau");
      break; // Rompo el ciclo
    }
  }
}

let respuesta = prompt("¿Queres comprar un par de borcegos?");

if (respuesta == "si") {
  alert("Estas en el lugar correcto");
  console.log("Estás en el lugar correcto");
  procesarCompra(); // Aca llamo a la función 
} else if (respuesta == "no") {
  alert("No deberias estar aquí");
  console.log("No deberias estar aquí");
} else if (respuesta == "no se") {
  alert("Solo sabemos que no sabemos nada");
  console.log("Solo sabemos que no sabemos nada");
} else {
  alert("No respondiste lo que pregunté");
  console.log("No respondiste lo que pregunté");
}

// Defino los productos como objetos, todos dentro de un array
const productos = [
  { nombre: "Borcego Andromeda", precio: 27500, color: "Negro", categoria: "Borcegos" },
  { nombre: "Borcego Capricornio", precio: 29500, color: "Negro", categoria: "Borcegos" },
  { nombre: "Bota Centauro", precio: 27500, color: "Negro", categoria: "Botas" },
  { nombre: "Borcego Mercurio", precio: 30500, color: "Negro", categoria: "Borcegos" },
  { nombre: "Borcego Venus", precio: 28500, color: "Suela", categoria: "Borcegos" },
  { nombre: "Bota Libra", precio: 26500, color: "Negro", categoria: "Botas" },
  { nombre: "Zapatito Vega", precio: 23500, color: "Negro", categoria: "Zapatitos" },
  { nombre: "Borcego Venus", precio: 29500, color: "Verde", categoria: "Borcegos" },
  { nombre: "Bota Pegasus", precio: 27500, color: "Negro", categoria: "Botas" },
];

// Funcion para ver los productos verdes 
function filtrarPorColor(color) {
  return productos
    .filter((producto) => producto.color === color)
    .map((producto) => producto.nombre);
}

let productosVerdes = filtrarPorColor("Verde");
console.log("En verde tenemos: ", productosVerdes);

// Aca los productos negros 
let productosNegros = filtrarPorColor("Negro");
console.log("En negro tenemos: ", productosNegros);

// Funcion para ver los productos segun un precio maximo establecido 
function filtrarPorPrecioMax(precioMax) {
  return productos
    .filter((producto) => producto.precio <= precioMax)
    .map((producto) => producto.nombre);
}

let precioMax = filtrarPorPrecioMax(27500);
console.log("Productos que valen hasta $27500", precioMax) 

// Funcion para ver la suma de precios de los productos filtrados 
function sumarPrecioMax(precioMax) {
  const productosFiltrados = productos.filter((producto) => producto.precio <= precioMax);
  const sumaPrecios = productosFiltrados.reduce((total, producto) => total + producto.precio, 0);
  return sumaPrecios;
}

// Ejemplo de uso
const sumaPrecios = sumarPrecioMax(27500);
console.log("Suma de precios de productos de hasta $27500:", sumaPrecios);



  