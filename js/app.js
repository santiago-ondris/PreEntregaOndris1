// function procesarCompra() {
//   for (let i = 1; i <= 10; i++) {
//     let cantidad = prompt("Ingresa cuantos borcegos queres");
//     if (cantidad >= 1 && cantidad <= 10) {
//       alert("Comunicate con venta minorista");
//     } else if (cantidad > 10 && cantidad <= 20) {
//       alert("Comunicate con venta mayorista");
//     } else if (cantidad > 20) {
//       alert("No podes comprar tantos");
//     } else {
//       alert("No nos estas tomando en serio, chau");
//       break; // Rompo el ciclo
//     }
//   }
// }

// let respuesta = prompt("¿Queres comprar un par de borcegos?");

// if (respuesta == "si") {
//   alert("Estas en el lugar correcto");
//   console.log("Estás en el lugar correcto");
//   procesarCompra(); // Aca llamo a la función 
// } else if (respuesta == "no") {
//   alert("No deberias estar aquí");
//   console.log("No deberias estar aquí");
// } else if (respuesta == "no se") {
//   alert("Solo sabemos que no sabemos nada");
//   console.log("Solo sabemos que no sabemos nada");
// } else {
//   alert("No respondiste lo que pregunté");
//   console.log("No respondiste lo que pregunté");
// }

// Defino los productos como objetos, todos dentro de un array
const productos = [
  { nombre: "Borcego Andromeda", precio: 27500, color: "negro", categoria: "Borcegos", id: "andromedanegro" },
  { nombre: "Borcego Capricornio", precio: 29500, color: "negro", categoria: "Borcegos", id: "capricornionegro" },
  { nombre: "Bota Centauro", precio: 27500, color: "negro", categoria: "Botas", id: "centauronegro" },
  { nombre: "Borcego Mercurio", precio: 30500, color: "negro", categoria: "Borcegos", id: "mercurionegro" },
  { nombre: "Borcego Venus", precio: 28500, color: "suela", categoria: "Borcegos", id: "venussuela" },
  { nombre: "Bota Libra", precio: 26500, color: "negro", categoria: "Botas", id: "libranegro" },
  { nombre: "Zapatito Vega", precio: 23500, color: "negro", categoria: "Zapatitos", id: "veganegro" },
  { nombre: "Borcego Venus", precio: 29500, color: "verde", categoria: "Borcegos", id: "venusverde" },
  { nombre: "Bota Pegasus", precio: 27500, color: "negro", categoria: "Botas", id: "pegasusnegro" },
  { nombre: "Zapatito Antares", precio: 22500, color: "negro", categoria: "Zapatitos", id: "antaresnegro" },
  { nombre: "Bota Fenix", precio: 28500, color: "negro", categoria: "Botas", id: "fenixnegro" },
  { nombre: "Bota Tauro", precio: 29500, color: "negro", categoria: "Botas", id: "tauronegro" },
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

// Referencia al boton de agregar al carrito
const botonesAgregarCarrito = document.querySelectorAll('#botonproducto');

const carrito = [];
 
// Función para agregar un producto al carrito
function agregarAlCarrito(event) {
  const productoId = event.target.dataset.id;
  const producto = productos.find(p => p.id === productoId);
  carrito.push(producto);

    // Guardar el carrito actualizado en el localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito))
  
  // Actualizar la interfaz o realizar cualquier otra acción necesaria o que quiera diriamos
  console.log(`Se ha agregado al carrito: ${producto.nombre}`);
}

botonesAgregarCarrito.forEach(boton => {
  boton.addEventListener('click', agregarAlCarrito);
});

// Filtrado por color

const listaColores = document.getElementById('tony');

listaColores.addEventListener('click', (event) => {
  const colorSeleccionado = event.target.getAttribute('data-color');
  const productosFiltradosPorColor = productos.filter(producto => producto.color === colorSeleccionado);
  console.log(productosFiltradosPorColor);

  const muestraColor = document.querySelectorAll('.cajaproducto')
  muestraColor.forEach(producto => {
    if (producto.getAttribute('data-color') === colorSeleccionado) {
      producto.style.display = 'block';
    } else {
      producto.style.display = 'none';
    }
  });
});

// Formulario de contacto
let miFormulario = document.getElementById('formularioContacto');
  miFormulario.addEventListener('submit', function(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let mail = document.getElementById("mail").value;
    let telefono = document.getElementById("telefono").value;
    let mensaje = document.getElementById("mensaje").value;

  let datosUsuario = {
    nombre: nombre,
    apellido: apellido,
    mail: mail,
    telefono: telefono,
    mensaje: mensaje
  };


  localStorage.setItem("datosUsuario", JSON.stringify(datosUsuario));

  miFormulario.reset();
  });

//Formulario del newsletter
let formNovedades = document.getElementById('novedades');

formNovedades.addEventListener('submit', evento => {
 let mail = document.getElementById('mailnovedades')
  if (mail.value === ''){}

  alert("Probando probando");
  
  evento.preventDefault();
});

