function throwCoin() {
    return Math.random(); //regresa entre 0 y 1 mucho ojo
}

function printRes(){
    if(throwCoin() < 0.5){
        console.log("Cara");
    }
    else{
        console.log("Cruz");
    }
};

printRes();