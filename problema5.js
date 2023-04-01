let impares = 0

for (let i = 1; i <= 100; i += 1){
    if (i % 2 != 0){
        impares += 1;
        console.log(i);
    };
};

console.log("La cantidad de impares es: " + impares);