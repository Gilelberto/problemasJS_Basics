class Representante{
    constructor (name,prod1,prod2,prod3,prod4){
        this.name = name;
        this.prod1 = prod1;
        this.prod2 = prod2;
        this.prod3 = prod3;
        this.prod4 = prod4;
    }
}

function generateInfo(){
    let info = []
    for (let i = 0; i < 12; i++){
        info.push(Math.floor(Math.random() * 201));
    }
    return info;
}

let r1 = new Representante("Fulano",generateInfo(),generateInfo(),generateInfo(),generateInfo());
let r2 = new Representante("Mengano",generateInfo(),generateInfo(),generateInfo(),generateInfo());
let r3 = new Representante("Juan",generateInfo(),generateInfo(),generateInfo(),generateInfo());

//console.log(r3);

for (let i = 0; i<12; i++){
    let sum1 = r1.prod1[i] + r2.prod1[i] + r3.prod1[i];
    let sum2 = r1.prod2[i] + r2.prod2[i] + r3.prod2[i];
    let sum3 = r1.prod3[i] + r2.prod3[i] + r3.prod3[i];
    let sum4 = r1.prod4[i] + r2.prod4[i] + r3.prod4[i];
    console.log(`Mes\tP1\tP2\t P3\tP4`);
    console.log(`${(i+1)}\t${sum1}\t${sum2}\t${sum3}\t${sum4}\n`) 

};