let califas = [];

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
    //const numero1 = await read("Introduce el primer número: ");
    for (let i = 0; i<10;i++){
        califas.push(parseInt(await read("Introduzca la calificación número " + (i+1).toString() + ": ")));
    };
    rl.close();
    let sum = 0;
    for(let i = 0; i<califas.length; i ++){
        sum += califas[i];

    }
    console.log(`El promedio es: ${(sum/califas.length)}`);
    
  })();