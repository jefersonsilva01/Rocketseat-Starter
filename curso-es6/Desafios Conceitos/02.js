/* 2o exercício
A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find):

const usuarios = [
{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
{ nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
{ nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

2.1 Utilizando o map
Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]

2.2 Utilizando o filter
Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

2.3 Utilizando o find
Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined

2.4 Unindo operaçõesMultiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
no máximo 50 anos:
// Resultado:
[
{ nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
{ nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },
] */


const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
    ];

/* 2.1 Utilizando o map
Crie uma variável que contenha todas idades dos usuários: [23, 15, 30] */

    const idades = usuarios.map(item => item.idade)
    console.log(idades)

    /* 2.2 Utilizando o filter
    Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
    anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }] */

/* const usuariosRocketSeatMaiorQue18 = usuarios.filter(function(item){
    if(item.idade > 18  && item.empresa === 'Rocketseat'){
        return item
    }
}) */

const usuariosRocketSeatMaiorQue18 = usuarios.filter(item => item.idade > 18  && item.empresa === 'Rocketseat' ? item : '')
console.log(usuariosRocketSeatMaiorQue18)

/* 2.3 Utilizando o find
Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined */

const usuarioDoGoogle = usuarios.find(item => item.empresa === 'Google' ? item : '')
console.log(usuarioDoGoogle)

/* 2.4 Unindo operaçõesMultiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
no máximo 50 anos:
// Resultado:
[
{ nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
{ nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },
] */

const result = usuarios.map(function(item){
    item.idade = item.idade * 2
    return item
})
console.log(result)
const usuariosMaiorQue50 = result.filter(item => item.idade > 50 ? item : '')
console.log(usuariosMaiorQue50)