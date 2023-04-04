const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.question("Ingrese un número: ",(args) => {
    args = parseInt(args);
    rl.close();
    if(esPrimo(args)){
        console.log(`El número ${args} sí es primo.`);
    }
    else{
        console.log(`El número ${args} no es primo.`);
    }
    

});

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