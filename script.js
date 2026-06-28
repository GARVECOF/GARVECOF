
const boton = document.querySelector('button');
const botonCompartir = document.getElementById('boton-compartir');

// Botón verde: Aviso de validación (el contador ya no suma solo)
boton.addEventListener('click', () => {
  alert("¡Nivel en revisión por el equipo de GARVECOF!");
});

// Botón naranja: Sistema de Referidos Profesional
botonCompartir.addEventListener('click', () => {
  const idJugador = prompt("Ingresa TU ID de jugador para generar tu enlace de invitación:");
 
  if (idJugador) {
    // Aquí creamos un enlace especial que incluye el ID del que invita
    const enlaceInvitacion = "https://script.google.com/macros/s/TU_CODIGO".../exec"+"?invitadopor=" + idjugador;AKfycbxpzU6UlK9OMnAM1yLW0FcQd3x_hTkzc-9W3SqjGSiRsfVCMoiXcfrAvQfy3ZEdVCKA/exec+ "?invitadoPor=" + idJugador;
    // Compartir el enlace personalizado
    if (navigator.share) {
      navigator.share({
        title: '¡Gana 50 diamantes en Garvécof!',
        text: 'Ayúdame a completar mi misión en Garvécof con mi ID: ' + idJugador,
        url: enlaceInvitacion
      }).catch(console.error);
    } else {
      alert("Copia y comparte este enlace con tu amigo:\n" + enlaceInvitacion);
    }
   
    alert("¡Enlace generado! Cuando tu amigo llegue a 4000 monedas usando este enlace, recibirás tus 50 diamantes.");
  }
});

 
