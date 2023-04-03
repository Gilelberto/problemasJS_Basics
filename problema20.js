const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});


function fact(num,calc){
    if (num == 0){
        return calc
    }
    else{
        calc += calc * --num;
        //console.log(num + " " + calc);
        return fact(num,calc);
    }
};

rl.question("Ingrese un número para calcular factorial: ",(args) =>{
    args = parseInt(args);
    let factorial = fact(args,1);
    console.log(`${args}! = ${factorial}`);
    rl.close();
});