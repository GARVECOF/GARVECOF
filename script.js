// Lógica de juego Garvécof
let totalMonedas = parseInt(localStorage.getItem('totalMonedas') || 0);

function actualizarPantalla() {
    document.getElementById('contador-monedas').innerText = totalMonedas;
    document.getElementById('barra-progreso').style.width = (totalMonedas / 4000 * 100) + '%';
}

// Esta función la llamas cada vez que el usuario gana monedas jugando
function sumarMonedas(cantidad) {
    totalMonedas += cantidad;
    localStorage.setItem('totalMonedas', totalMonedas);
    actualizarPantalla();
   
    if (totalMonedas >= 4000) {
        alert("¡Felicidades! Has completado las 4000 monedas. Haz clic en 'Canjear' para recibir tu tarjeta.");
    }
}

// Cuando el usuario le da al botón "Canjear"
async function canjearPremio() {
    if (totalMonedas < 4000) return alert("Aún no tienes 4000 monedas.");
   
    // Registrar en la hoja de cálculo
    const datos = { usuario: "Usuario_Actual", monto: 1, tipo: "Canje_Efectivo_o_Digital" };
    await fetch('TU_URL_GOOGLE_APPS_SCRIPT', {
        method: 'POST',
        body: JSON.stringify(datos)
    });
   
    alert("¡Aquí tienes tu tarjeta de $1! Puedes usarla para lo que desees.");
    // Aquí mostrarías la imagen de la tarjeta
    totalMonedas = 0; // Reiniciar
    localStorage.setItem('totalMonedas', 0);
    actualizarPantalla();
}

 


 


 
