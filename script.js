document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('boton-anuncio');
   
    btn.addEventListener('click', async () => {
        // 1. Ejecutar anuncio
        mostrarAnuncio();
       
        // 2. Enviar datos a la hoja de cálculo
        const datos = {
            ingreso: 4,
            gasto: 1,
            fecha: new Date().toLocaleString()
        };

        try {
            await fetch("TU_URL_DE_GOOGLE_SHEETS_AQUI", {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(datos)
            });
            alert("Registro exitoso: $4 sumados y $1 descontados.");
        } catch (e) {
            console.error("Error al conectar con la hoja:", e);
        }
    });
});

 


 


 


 
