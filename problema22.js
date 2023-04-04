const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});
var input = "";


function read(){
    rl.question("Introduzca una frase: ",(args) => {
        input = args;
        rl.close();

        for (let i = 1; i <= 5; i++){
            console.log("\t".repeat(i) + input);
        };
    });    
};

read();

