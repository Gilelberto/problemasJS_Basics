//6.- Hacer un programa que imprima todos los números naturales que hay desde el uno hasta un
//número que introducimos por teclado. 
const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});


function count(number){
    for (let i = 1; i <= number; i += 1){
        console.log(i);
    };

};


rl.question("Introduzca el número máximo a contar: ", (arg) => {
    arg = parseInt(arg);
    if (isNaN(arg)){
        console.log("Error: No se ha introducido un número entero.");
    }
    else if(arg <= 0){
        console.log("Error: Se requiere un valor mayor a 0.");
    }
    else{
        count(arg);
    }
    rl.close()
});