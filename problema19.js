const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

var watch = new Date();
var hourModi = 0;
var minutesModi = 0;

function modiDate(){
    watch = new Date();
    hourModi = hourModi - watch.getHours();
    minutesModi = minutesModi - watch.getMinutes();
};

function showDate(){
    watch = new Date();toString()
    console.clear();
    let hours = watch.getHours();
    let minutes = watch.getMinutes();
    let seconds = watch.getSeconds();
    let hour = `${hours + hourModi}:${minutes + minutesModi} ${seconds}`;
    console.log("RELOJ, presiones ctrl+c para salir o ingrese 1 para ir al menu.");
    console.log(hour);
    rl.question("",(args) => {
        console.log("xd");
        if (args == "1"){
            clearInterval(showDate,0);
            main();
        };
    });
    

};

function changeHour(){
    rl.question("Ingrese la hora: ",(args) => {
        args = parseInt(args);
        hourModi = args;
        changeMinutes();
    });
};
function changeMinutes(){
    rl.question("Ingrese los minutos: ",(args) => {
        args = parseInt(args);
        minutesModi = args;
        modiDate();
        main();
    });
};

function main(){
    rl.question("1.-Mostrar hora. \n2.-Ajustar hora",(args) =>{
        args = parseInt(args);
        if (args == 2){
            changeHour();
        }
        else{
            const count = setInterval(showDate,1000);
        }
    });
};

main();