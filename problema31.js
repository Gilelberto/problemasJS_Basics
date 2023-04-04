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
function printMenu(a){
    console.log("===================================");
    console.log(`1.- ${a} es primo?`);
    console.log(`2.- Factorial de ${a}`);
    console.log(`3.- Tabla del 0 al 10 de ${a}`);
    console.log("99.- Salir")
    console.log("===================================");
}

function esPrimo(num) {
    if (num < 2) {
      return false; 
    }
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return false; 
      }
    }
    return true; 
}

function fact(num,calc){
    if (num == 0){
        return calc
    }
    else{
        calc += calc * --num;
        //console.log(num + " " + calc);
        return fact(num,calc);
    }
};

function table(args){
    for (let i = 0; i <= 10; i++){
        let res = i * args;
        //let text = i.toString() + "x" + args.toString() + " = "
        console.log(`${i}x${args} = ${res}`);
    }
}

(async function () {
    let numero1 = await read("Introduce el primer número: ");
    numero1 = parseInt(numero1);

    let input = ""
    do{
    printMenu(numero1);
    input = await read("Su opción: ");
    input = parseInt(input);
    console.log("");
    switch (input) {
        case 1:
            if(esPrimo(numero1)){
                console.log(`El número ${numero1} sí es primo.`);
            }
            else{
                console.log(`El número ${numero1} no es primo.`);
            }
            break;
        case 2:
            console.log(`${numero1}! = ${fact(numero1,1)}`);
            break;
        case 3:
            table(numero1);
            break;
        case 99:
            break;
        default:
          console.log("Error: Opción no válida.");
      }
    }while(input != 99);

    rl.close();

  })();
