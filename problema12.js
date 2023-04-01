let sumPar = 0;
let sumImp = 0;


for (let i = 1; i <= 100; i+=1){
    if(i % 2 == 0){
        sumPar += i;
    }
    else{
        sumImp += i;
    }
    console.log(i);
};

console.log("Suma de pares = " + sumPar);
console.log("Suma de impares = " + sumImp);