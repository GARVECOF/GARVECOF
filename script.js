const { Lithic } = require('lithic');

const lithic = new Lithic({
  apiKey: "2d1191f3-8cec-49eb-8afa-b9c133dd4e21",
  environment: "sandbox"
});

async function crearTarjeta() {
  try {
    const card_params = {
      type: "VIRTUAL"
    };
   
    const card = await lithic.cards.create(card_params);
    console.log("¡Éxito! Tarjeta creada:", card);
  } catch (error) {
    console.error("Hubo un error al crear la tarjeta:", error);
  }
}

crearTarjeta();

 






 


 


 


 


 
