const urlBase = 'https://script.google.com/macros/s/AKfycby2JI5-fKMXyhhc367uTC-Iv2UBR6oUlnhAQP26z5RMqRgQwt2QBoeoeAnnENFSuLwk/exec';

function enviarDatosAGoogle(idPrincipal, idSecundario, puntos, tipo) {
    const urlFinal = `${urlBase}?idPrincipal=${idPrincipal}&idSecundario=${idSecundario}&puntos=${puntos}&tipo=${tipo}`;

    fetch(urlFinal, { method: 'GET' })
    .then(respuesta => respuesta.text())
    .then(datos => {
        console.log("Respuesta del servidor: " + datos);
    })
    .catch(error => {
        console.error("Error al enviar los datos:", error);
    });
}

 
