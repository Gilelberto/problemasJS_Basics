const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});


var lines = 0;

function linesCounter(){
    lines += 1;
};


function again(){
    rl.question("¿Continuar? S = Si, cualquier otra respuesta = No: ",(args) =>{
        if (args == "S" || args == "s"){
            console.log("");
            ask();
        }
        else{
            rl.close()
        }
        
    });
}
function ask(){
    rl.question("Su entrada: ", () => {
    linesCounter();
    console.log("=====Frases introducidas: " + lines + "=====");
    again();
    }); 
};

//let steps = [ask,again];

(async () => {
    await ask();
})();



