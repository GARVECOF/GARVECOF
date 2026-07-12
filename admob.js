// Configuración de AdMob para Garvécof
console.log("AdMob cargado correctamente");

// ID de Aplicación: ca-app-pub-6866054031665473~4209446541
// ID del Banner: ca-app-pub-6866054031665473/4136304678
// ID del Anuncio Bonificado: ca-app-pub-6866054031665473/8901546198

// Conectar con el botón de la página
document.addEventListener('DOMContentLoaded', function() {
    var boton = document.getElementById('boton-anuncio');
    if (boton) {
        boton.addEventListener('click', function() {
            console.log("El usuario presionó el botón de anuncios");
            alert("¡El sistema de anuncios está listo! (Se mostrará el anuncio bonificado)");
        });
    }
});

