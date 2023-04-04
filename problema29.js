function throwDice(){
    return Math.ceil(Math.random() * 6);
};

let sum10 = 0;
for (let i = 0; i < 100; i++){
    let diceA = throwDice();
    let diceB = throwDice();
    if(diceA+diceB == 10){
        sum10++;
    }
};
console.log(`Se ha conseguido sumar 10 entre los dos dados en ${sum10} lanzamientos.`);