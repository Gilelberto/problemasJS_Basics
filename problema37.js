const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});


function read(text){
    return new Promise((resolve) => {
        rl.question(text, (respuesta) => {
          resolve(respuesta);
        });
      });
}

(async function () {
    let califas = [];
    
    let cursos = await read("Introduzcas la cantidad de cursos: ");
    cursos = parseInt(cursos);

    for (let i = 0; i < cursos; i++){
        califas.push([]);
        let alumnos = await read(`Introduzca la cantidad de alumnos en el curso ${(i+1)}: `);
        alumnos = parseInt(alumnos);
        for(let j = 0; j < alumnos; j++){
            let califa = await read(`Introduzca la calificación para el alumno ${(j+1)} en el curso ${(i+1)}: `);
            califas[i].push(califa);
        }
    };
    rl.close();
    console.log(califas);
    
  })();