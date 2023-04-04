let sumPar = 0;
let sumImp = 0;

for (let i = 1; i <= 1000; i++) {
  if (i % 2 == 0) {
    sumPar += i;
  } 
  else {
    sumImp += i; 
  }
};

console.log("La suma de los números pares entre 1 y 1000 es: " + sumPar);
console.log("La suma de los números impares entre 1 y 1000 es: " + sumImp);