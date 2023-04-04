let califas = [5, 6, 7, 8, 9, 10, 5, 6, 7, 8];

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

(async function () {
    let numero1 = await read("Introduce la calificación a buscar: ");
    numero1 = parseInt(numero1);
    rl.close();

    if(califas.includes(numero1)){
        console.log(`${numero1} Existe en la lista.`);
    }
    else{
        console.log(`${numero1} No existe en la lista.`);
    }
  })();