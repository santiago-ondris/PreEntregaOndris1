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

    Toastify({
      text: `Tu producto "${producto.nombre}" ha sido añadido al carrito`,
      backgroundColor: "green",
      className: "toastify-center",
      duration: 4000,
    }).showToast();    
  
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


  function showSearchNotification() {
    Swal.fire({
      title: "Búsqueda no disponible",
      text: "Parece que aún no tenemos disponible la función de búsqueda en la tienda",
      icon: "warning",
      timer: 3000,
      timerProgressBar: true,
    });
  }
  
  const botonBuscar = document.getElementById("superbtn");
  botonBuscar.addEventListener("click", (event) => {
    event.preventDefault();
    showSearchNotification();
  });

  



