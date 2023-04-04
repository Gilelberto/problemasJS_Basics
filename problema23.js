for (let i = 0; i <= 100; i++) {
    process.stdout.write(i.toString() + " ");
    if(i % 10 == 0){     
        console.log("");    
    }
}