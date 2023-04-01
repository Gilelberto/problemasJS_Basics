const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

console.log("=====ES PAR O IMPAR=====");

rl.question("Introduzca un número: ", (args) => {
    args = parseFloat(args);
    if (isNaN(args)){
        console.log("Error: La entrada no es un número");
    }
    else{
        if (args % 2 == 0){
            console.log(args + " Es par.")
        }
        else{
            console.log(args + " Es impar.")
        }

    }

    rl.close();
});