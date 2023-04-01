const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});


function read(){
    rl.question("Introduzca S o N: ",(args) => {
        if (args == "S" || args == "s" || args == "N" || args == "n"){
            read();
        }
        else{
            console.log("Error: entrada no valida");
            rl.close();
        }
    });
};

(async () => {
    await read();
})();