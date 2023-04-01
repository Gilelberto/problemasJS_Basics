const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

var n = 0;

rl.question("Introduzca un número máximo para obtener los múltiplos del 3: ",(args) => {
    args = parseInt(args);
    if (isNaN(args)){
        console.log("Error: La entrada no es un número");
    }
    else if(args < 0){
        console.log("Error: introduzca un número válido.");
    }
    else{
        for (let i = 1; i<= args; i += 1){
            if(i % 3 == 0){
                console.log(i + " : Es múltiplo del 3.");
                n += 1;
            };
        };
        console.log("Total de múltiplos del 3 encontrados: " + n);
    }

    rl.close()
});