const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

var serie = [];
var count = 0;


function read(){
    if (count < 5){
        rl.question("Introduzca un número: ",(args) => {
            args = parseFloat(args);
            if (isNaN(args)){
                console.log("Error: No se ha introducido un número entero.");
                rl.close();
            }
            else{
                args = parseFloat(args);
                serie.push(args)
                count ++;
                read();
            }
        });
    }
    else{
        if (count >= 5){
            console.log("=====RESULTADOS=====");
            console.log("Su serie es: "+serie);
            console.log("El número mayor de la serie es: "+Math.max(...serie));
            console.log("El número menor de la serie es: "+Math.min(...serie));
            rl.close();
            }
        }
};

(async () => {
    await read();
})();