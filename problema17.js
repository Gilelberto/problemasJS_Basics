const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

var n1 = 0; 
var n2 = 0;

function firstNumber(){
    rl.question("Introduzca un número: ",(args) => {
        args = parseInt(args);
        if (isNaN(args)){
            console.log("Error: No se ha introducido un número.");
            rl.close();
        }
        else{
            n1 = args;
            secondNumber();
        }
    });
};

function secondNumber(){
rl.question("Introduzca otro número: ",(args) => {
    args = parseInt(args);
    if (isNaN(args)){
        console.log("Error: No se ha introducido un número en alguna de las entradas.");
        rl.close();
    }
    else{
        n2 = args;
        rl.close();
        doSomething();
        
    }
});
};

function doSomething(){
    let sumPar= 0;
    if(!(n2 >= n1)){
        console.log("Error: El segundo número dado debe ser mayor o igual al primero.");
    }
    else{
        //realizamos las operaciones
        for (let i = Math.min(n1,n2); i <= Math.max(n1,n2); i++){
            if (i % 2 == 0){
                sumPar += i;
                console.log(i);
            }     
        } 
        let total = Math.max(n1,n2) - Math.min(n1,n2);
        console.log(`La cantidad de números pares entre ${n1} y ${n2} es de: ${total} números.`);
        console.log(`Cuya suma resulta en ${sumPar}.`);
    
    }
};


(async () => {
    await firstNumber();
})();
