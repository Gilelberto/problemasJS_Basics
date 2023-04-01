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
            console.log("Error: No se ha introducido un número entero.");
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
    let countPar = 0;
    let sumImp = 0;
    if(n1 < 0 || n2 < 0){
        console.log("Error: Se ha introducido un número menor a 0.");
    }
    else{
        //realizamos las operaciones
        for (let i = Math.min(n1,n2); i <= Math.max(n1,n2); i++){
            console.log(i);
            if (i % 2 == 0)
                countPar++;
            else
                sumImp += i;
            
        }
        let total = Math.max(n1,n2) - Math.min(n1,n2);
        console.log(`La cantidad de números entre ${n1} y ${n2} es de: ${total} números.`);
        console.log(`Donde existen: ${countPar} números pares y la suma de los impares resulta en: ${sumImp}.`);
    }
};


(async () => {
    await firstNumber();
})();


