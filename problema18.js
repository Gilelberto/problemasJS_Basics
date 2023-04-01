const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

function countLetter(sen,le){
    let appears = 0;
    for(let i = 0; i < sen.length; i++){
        if (le == sen[i]){
            appears++;
        }
    };
    console.log("=====RESULTADO=====");
    console.log(`La letra --${le}-- aparece ${appears} veces en la cadena: ${sen}.`);

    
};

function getSentence(){
    console.log("ENTRA");
    rl.question("Introduzca una sentencia: ",(args) => {
        getLetter(args);
    });
};
function getLetter(sentence){
    rl.question("Introduzca la letra a contar en la sentencia: ",(args) => {
        rl.close();
        countLetter(sentence,args);
    });
};

(async () => {
    await getSentence();
})();
