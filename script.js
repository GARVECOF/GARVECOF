const urlBase = 'https://script.google.com/macros/s/AKfycby2Jl5-fKMXyhnc367uTC-Iv2UBR6oUInhAQP26z5RMqRgQwt2QBoeoeAnnENFSuLwk/exec';

function compartirConReglas() {
    // 1. Mostrar la advertencia legal primero
    let acepto = confirm("¡IMPORTANTE!\n\nPara recibir tus 100 rosas (TikTok) o 100 diamantes (Free Fire) por compartir, tu invitado DEBE completar el reto de las 4000 monedas dentro de la aplicación.\n\n¿Estás de acuerdo con esta condición?");
   
    if (!acepto) {
        alert("Lo sentimos, si no aceptas la condición no podemos procesar tu recompensa.");
        return; // Aquí cancelamos el proceso si no aceptan
    }

    // 2. Si aceptó, pedimos los datos
    let redSocial = prompt("¿Red social de donde invitas? (TikTok/FreeFire)");
    let miUsuario = prompt("¿Cuál es tu nombre de usuario?");
    let miID = prompt("¿Cuál es tu ID de jugador?");
    let idInvitado = prompt("Ingresa el ID de la persona que invitaste (El pago depende de que este ID complete el reto):");

    if (!redSocial || !miUsuario || !miID || !idInvitado) {
        alert("Error: Debes completar todos los campos.");
        return;
    }

    // 3. Enviamos los datos
    const urlFinal = `${urlBase}?idPrincipal=${miID}&idSecundario=${miUsuario}&invitado=${idInvitado}&tipo=INVITACION_${redSocial.toUpperCase()}`;

    fetch(urlFinal, { method: 'GET' })
        .then(res => res.text())
        .then(data => {
            alert("¡Registro exitoso! Mantendremos tu ID en espera hasta que tu invitado (" + idInvitado + ") complete el reto de las 4000 monedas.");
        })
        .catch(error => alert("Error al enviar, intenta de nuevo."));
}

 


 
