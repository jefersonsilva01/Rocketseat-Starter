function checaIdade(idade) {
    // Retornar uma promise

    return new Promise(function(resolve, reject){
        idade > 18 ? resolve("Maior que 18") : reject("Menor que 18")
    });

}

checaIdade(10)
    .then(function(response) {
        setTimeout(function(){
            console.log("Maior que 18");
        }, 2000)
    })
    .catch(function(error) {
        setTimeout(function(){
            console.log("Menor que 18");
        }, 2000)
    });