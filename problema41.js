const fs = require('fs');

const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});


function read(text){
    return new Promise((resolve) => {
        rl.question(text, (respuesta) => {
          resolve(respuesta);
        });
      });
}

async function createRegister(){
    let id = await read("Introduce ID: ");
    let nombre = await read("Introduce nombre: ");
    let apellidos = await read("Introduce apellidos: ");
    let direccion = await read("Introduce dirección: ");
    let estado = await read("Introduce estado: ");
    let registro = {id: id, nombre: nombre, apellidos: apellidos, direccion: direccion,estado: estado};
    return registro;
}



(async function () {

    let regi = await createRegister();
    rl.close();
    //console.log(regi);
    fs.appendFile('DATOS.DAT', JSON.stringify(regi) + '\n', (err) => {
        if (err) throw err;
        console.log('Registro agregado exitosamente.');
      });

  })();