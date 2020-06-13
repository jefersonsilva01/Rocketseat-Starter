var endereco = {
        rua: "Rua dos pinheiros",
        numero: 1293,
        bairro: "Centro",
        cidade: "São Paulo",
        uf: "SP"
    };

function retornaEndereco(obj){

    return console.log(`O usuário mora em ${obj.cidade} / ${obj.uf}, no bairro ${obj.bairro}, na rua "${obj.rua}" com n° ${obj.numero}.`)

}

retornaEndereco(endereco)