const paginas = 3;
const filas = 4;
const columnas = 5;
let contador = 1;

for (let pagina = 1; pagina <= paginas; pagina++) {
  console.log(`Página ${pagina}:`);
  
  // Bucle para recorrer las filas
  for (let fila = 1; fila <= filas; fila++) {
    let filaString = "";
    // Bucle para recorrer las columnas
    for (let columna = 1; columna <= columnas; columna++) {
      filaString += `${contador}\t`; //  concateno para no batallar con la salida std.
      contador++;
    } 
    console.log(filaString); 
  }
  console.log("\n"); 
}
