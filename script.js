
const boton = document.querySelector('button');
const botonCompartir = document.getElementById('boton-compartir');
const contador = document.getElementById('contador-monedas');
let monedas = 0;

// Botón verde
boton.addEventListener('click', () => {
  if (monedas < 4000) {
    monedas += 10;
    contador.textContent = monedas;
    
    if (monedas >= 4000) {
      alert("¡Felicidades! Has llegado a la meta.");
      const idFreeFire = prompt("Escribe tu ID de Free Fire:");
      const nombreJugador = prompt("Escribe tu nombre:");
      
      if (idFreeFire && nombreJugador) {
        alert("¡Gracias, " + nombreJugador + "! Solicitud recibida.");
        
        // AQUÍ FORZAMOS EL REINICIO SIN NECESIDAD DE REFRESCAR
        monedas = 0;
        contador.textContent = monedas;
      }
    }
  }
});

// Botón naranja
botonCompartir.addEventListener('click', () => {
  monedas += 100;
  contador.textContent = monedas;
  alert("¡Has ganado 100 monedas extra!");
});
