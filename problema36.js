function getNumber(){
    return Math.floor(Math.random() * 100) + 1;
};

let mat = []
for (let i = 0; i < 5; i++){
    mat.push([])
    for(let j = 0; j< 4; j++){
        mat[i].push(getNumber());
    }
};

function trans(matriz) {
    const filas = matriz.length;
    const columnas = matriz[0].length;
    const matrizTranspuesta = [];
  
    for (let i = 0; i < columnas; i++) {
      matrizTranspuesta[i] = [];
      for (let j = 0; j < filas; j++) {
        matrizTranspuesta[i][j] = matriz[j][i];
      }
    }
  
    return matrizTranspuesta;
  };
console.log("=====ORIGINAL=====");
console.log(mat);
console.log("=====TRANSPUESTA=====");
console.log(trans(mat));

