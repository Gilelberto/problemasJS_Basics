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

console.log(mat);

