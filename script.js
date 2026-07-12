// Esta función es la que deberías llamar justo después de alcanzar las 4000 monedas
async function registrarRetiroFinal() {
    const datos = {
        ingreso: 4,
        gasto: 1,
        fecha: new Date().toLocaleString()
    };

    try {
        const respuesta = await fetch("https://script.google.com/macros/s/AKfycbyzPlse7M3IKPs3hXUKHFshdn8rDQt8ykTquca0Tl9gPiOBg0erVA1wbRh5c45dajj/exec", {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(datos)
        });
        console.log("Registro de los $4 y el gasto de $1 enviado exitosamente.");
    } catch (e) {
        console.error("Error al registrar el retiro final:", e);
    }
}

 


 


 


 


 
