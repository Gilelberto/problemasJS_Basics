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
function printMenu(a,b){
    console.log(`1.- Sumar ${a} y ${b}`);
    console.log(`2.- Restar ${a} y ${b}`);
    console.log(`3.- Multiplicar ${a} y ${b}`);
    console.log(`4.- Dividir ${a} y ${b}`);
    console.log("99.- Salir")
}

(async function () {
    let numero1 = await read("Introduce el primer número: ");
    let numero2 = await read("Introduce el segundo número: ");
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);

    let input = ""
    do{
    printMenu(numero1,numero2);
    input = await read("Su opción: ");
    input = parseInt(input);
    console.log("");
    switch (input) {
        case 1:
            console.log(`${numero1} + ${numero2} = ${(numero1 + numero2)}`);
            break;
        case 2:
            console.log(`${numero1} - ${numero2} = ${(numero1 - numero2)}`);
            break;
        case 3:
            console.log(`${numero1} * ${numero2} = ${(numero1 * numero2)}`);
            break;
        case 4:
            console.log(`${numero1} / ${numero2} = ${(numero1 / numero2)}`);
            break;
        case 99:
            break;
        default:
          console.log("Error: Opción no válida.");
      }
      console.log("==========")
    }while(input != 99);

    rl.close();

  })();