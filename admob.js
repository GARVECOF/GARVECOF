// Configuración de AdMob
const ADMOB_CONFIG = {
    appId: "ca-app-pub-6866054031665473~4209446541",
    rewardId: "ca-app-pub-6866054031665473/8901546198"
};

function mostrarAnuncio() {
    if (typeof AdMob !== 'undefined') {
        AdMob.showRewardVideoAd();
    } else {
        console.log("Sistema AdMob cargado solo en APK.");
    }
}

 


 


