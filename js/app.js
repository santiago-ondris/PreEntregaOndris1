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




  