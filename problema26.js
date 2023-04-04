
function print(text){
    let readline = require("readline");
    let rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
    }).output.columns;

    //let text = "Este texto está en el centro de la terminal";
    let padding = " ".repeat(Math.floor((rl - text.length) / 2));

    console.log(padding + text);
    process.exit();
};

function read(){
    let readline = require("readline");
    let rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
    });

    rl.question("Introduzca una frase: ",(args) => {
        rl.close();
        print(args);
    });
};

read();