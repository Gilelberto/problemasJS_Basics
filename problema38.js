// Función para ordenar una matriz por la primera columna utilizando el método Shell
function ordenarMatrizPorPrimeraColumna(matriz) {
    let filas = matriz.length;
    let brechas = [5, 3, 1]; 
    function intercambiar(filaa, filab) {
      let temp = matriz[filaa];
      matriz[filaa] = matriz[filab];
      matriz[filab] = temp;
    }
  
    // Iterar a través de las brechas
    for (let brecha of brechas) {
      // Aplicar el algoritmo de ordenamiento por inserción con la brecha actual
      for (let i = brecha; i < filas; i++) {
        let elementoActual = matriz[i][0];
        let j = i;
        while (j >= brecha && matriz[j - brecha][0] > elementoActual) {
          intercambiar(j, j - brecha);
          j -= brecha;
        }
        matriz[j][0] = elementoActual;
      }
    }
  
    return matriz;
  }
  
  let matriz = [[5, 8, 3], [2, 7, 1], [9, 4, 6], [3, 1, 5]];
  console.log("Matriz original:");
  console.log(matriz);
  let matrizOrdenada = ordenarMatrizPorPrimeraColumna(matriz);
  console.log("Matriz ordenada a partir de la primera columna:");
  console.log(matrizOrdenada);