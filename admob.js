// Configuración de AdMob para Garvécof
console.log("AdMob cargado correctamente");

// ID de Aplicación: ca-app-pub-6866054031665473~4209446541
// ID del Banner: ca-app-pub-6866054031665473/4136304678
// ID del Anuncio Bonificado: ca-app-pub-6866054031665473/8901546198

document.addEventListener('DOMContentLoaded', function() {
    var boton = document.getElementById('boton-anuncio');
    if (boton) {
        boton.addEventListener('click', function() {
            console.log("Intentando mostrar anuncio...");
           
            // Esta función intenta llamar al anuncio de Google
            if (typeof AdMob !== 'undefined') {
                AdMob.showRewardVideoAd();
            } else {
                console.log("El sistema AdMob no está cargado.");
                alert("Para ver anuncios reales, la página debe abrirse dentro de la App (APK).");
            }
        });
    }
});

 


