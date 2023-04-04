const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.question("Ingrese un número: ",(args) => {
    rl.close();
    args = parseInt(args);
    for (let i = 0; i <= 10; i++){
        let res = i * args;
        //let text = i.toString() + "x" + args.toString() + " = "
        console.log(`${i}x${args} = ${res}`);
    }
});