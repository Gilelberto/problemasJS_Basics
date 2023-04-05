const fs = require('fs');

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

async function createRegister(){
    let id = await read("Introduce ID: ");
    let nombre = await read("Introduce nombre: ");
    let apellidos = await read("Introduce apellidos: ");
    let direccion = await read("Introduce dirección: ");
    let estado = await read("Introduce estado: ");
    let registro = {id: id, nombre: nombre, apellidos: apellidos, direccion: direccion,estado: estado};

    let data = fs.readFileSync('DATOS.DAT', 'utf-8');
    let registros = [];
    if (data) {
        registros = JSON.parse(data);
    }
    registros.push(registro);

    fs.writeFileSync('DATOS.DAT', JSON.stringify(registros));

    console.log('Registro agregado exitosamente.');

    await menu();
}
async function deleteRegister(){
    let data = fs.readFileSync('DATOS.DAT', 'utf-8');
    let registros = JSON.parse(data); //aquí convertimos lo leido     
    let borrar = await read("Ingrese el id del registro a borrar: ");
    borrar = parseInt(borrar);
    //console.log(registros);
    let index = -1;

    for (let i = 0; i < registros.length; i ++){ //sacamos la posición del objeto JSON si es que existe
        let reg = registros[i];
        if (reg.id == borrar){
            index = i;
        }
    }
    //console.log(index);
    if (index != -1) {
        // Eliminar el registro del arreglo
        registros.splice(index, 1);
        
        // Escribir la estructura de datos actualizada en el archivo DATOS.DAT
        fs.writeFileSync('DATOS.DAT', JSON.stringify(registros));
        console.log('Registro eliminado exitosamente.');
      } else {
        console.log('Registro no encontrado.');
      }
    await menu();
}

async function listBy(){
    let data = fs.readFileSync('DATOS.DAT', 'utf-8');
    let registros = JSON.parse(data);
    let criterio = await read("Ingrese el criterio para listar: ");
    for (let i = 0; i < registros.length; i ++){ //sacamos la posición del objeto JSON si es que existe
        let reg = registros[i];
        for (let key in reg){
            if (reg[key] == criterio){
                console.log(reg);
            } 
        }
    }
    await menu();
};

function printMenu(){
    console.log("=======================");
    console.log("1.- Agregar registro.");
    console.log("2.- Eliminar registro.");
    console.log("3.- Listar por propiedad.");
    console.log("99.- Salir");
    console.log("=======================");

};

async function menu() {
    let opt = 0;
    do{
        printMenu();
        opt = await read("Ingrese una opción: ");
        opt = parseInt(opt);
        switch(opt){
            case 1:
                console.log("");
                createRegister();
                break;
            case 2:
                console.log("");
                deleteRegister();
                break;
            case 3:
                console.log("");
                listBy();
                break;
            default:
                break;
        }
    }while(opt != 99);
    rl.close();
    //console.log(regi);
  };

  
(async function () {
    await menu();
})();