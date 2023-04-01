let count2 = 0;
let count3 = 0;


for (let i = 1; i <= 100; i+=1){
    if(i % 2 == 0){
        count2 += 1;
        console.log(i);
    }
    else if(i % 3 == 0){
        count3 += 1;
        console.log(i);
    }
};

console.log("La cantidad de múltiplos del 2 es: " + count2 + ".");
console.log("La cantidad de múltiplos del 3 es: " + count3 + ".");
console.log("EL total es de: "+(count2+count3));