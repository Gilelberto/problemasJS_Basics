const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

console.log("=====ES POSITIVO O NEGATIVO=====");

rl.question("Introduzca un número: ", (args) => {
    args = parseFloat(args);
    if (isNaN(args)){
        console.log("Error: La entrada no es un número");
    }
    else{
        if (args > 0){
            console.log(args + " Es positivo.")
        }
        else if (args < 0){
            console.log(args + " Es negativo.")
        }
        else{
            console.log(args + " Es 0.")
        }

    }

    rl.close();
});