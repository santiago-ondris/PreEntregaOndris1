async function obtenerProductos() {
    try {
      const response = await fetch('../JSON/productos.json');
  
      if (!response.ok) {
        throw new Error('Error en la solicitud. Código de estado: ' + response.status);
      }
  
      const data = await response.json();
      return data.productos; 
    } catch (error) {
      console.error('Error al obtener los productos:', error);
      return []; 
    }
  }
  
  function crearProductoHTML(producto) {
    const div = document.createElement('div');
    div.classList.add('card', 'm-2', 'cajaproducto');
    div.setAttribute('data-color', producto.color);
  
    const img = document.createElement('img');
    img.src = `../imagenes/productos/${producto.id}.png`; // Reemplaza la ruta de la imagen según tu estructura de carpetas.
    img.alt = producto.nombre;
    img.classList.add('card-img-top', 'cajaestilo');
    img.height = '300px';
  
    const nombreProducto = document.createElement('p');
    nombreProducto.id = 'textoproducto';
    nombreProducto.textContent = producto.nombre;
  
    const precioProducto = document.createElement('p');
    precioProducto.id = 'precioproducto';
    precioProducto.textContent = `$${producto.precio}`;
  
    const botonProducto = document.createElement('button');
    botonProducto.id = 'botonproducto';
    botonProducto.setAttribute('data-id', producto.id);
    botonProducto.textContent = 'Agregar al carrito';
  
    div.appendChild(img);
    div.appendChild(nombreProducto);
    div.appendChild(precioProducto);
    div.appendChild(botonProducto);
  
    return div;
  }
  
  async function crearProductosEnHTML(categoria) {
    const productosContainer = document.getElementById('productosContainer');
    productosContainer.innerHTML = ''; // Limpiamos el contenedor antes de agregar los productos.
  
    const productos = await obtenerProductos();
    const productosFiltrados = productos.filter((producto) => producto.categoria === categoria);
  
    productosFiltrados.forEach((producto) => {
      const productoHTML = crearProductoHTML(producto);
      productosContainer.appendChild(productoHTML);
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const verBorcegosBtn = document.getElementById('verBorcegosBtn');
    const verBotasBtn = document.getElementById('verBotasBtn');
    const verZapatitosBtn = document.getElementById('verZapatitosBtn');
  
    verBorcegosBtn.addEventListener('click', () => {
      crearProductosEnHTML('Borcegos');
    });
  
    verBotasBtn.addEventListener('click', () => {
      crearProductosEnHTML('Botas');
    });
  
    verZapatitosBtn.addEventListener('click', () => {
      crearProductosEnHTML('Zapatitos');
    });
  });
  
  
  
  