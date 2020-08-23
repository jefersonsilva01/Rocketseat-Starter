/* Exercícios: Módulo 02
Todos os exercícios abaixo necessitam que você esteja com o Webpack configurado.
1o exercício
Crie um arquivo chamado functions.js com o seguinte conteúdo:
export const idade = 23;
export default class Usuario {
static info() {
console.log('Apenas teste');
}
}
1.1
Agora em seu arquivo principal import apenas a classe Usuario renomeando-a para ClasseUsuario
e chame a funão info() ;
1.2
Em seu arquivo principal importe a variável de idade e exiba a mesma em tela;
1.3
Em seu arquivo princip */

/* console.log('test')
alert('Test') */

/* import ClasseUsuario, { idade as IdadeUsuario } from './functions.js'

ClasseUsuario.info()
console.log(IdadeUsuario) */


/* Exercícios: Módulo 03
Todos os exercícios abaixo necessitam que você esteja com o plugin do Async/Await do Babel e o
babel-polyfill devidamente configurados. Em alguns exercícios é necessário instalar o Axios.
Exercício
Transforme os seguintes trechos de código utilizando async/await: */

/* // Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
function umPorSegundo() {
delay().then(() => {
console.log('1s');
delay().then(() => {
console.log('2s');
delay().then(() => {
console.log('3s');
});
})
});
}
umPorSegundo(); */

// Funão delay aciona o .then após 1s
/* const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

function umPorSegundo() {
    delay().then(() => {
        console.log('1s');
        
        delay().then(() => {
            console.log('2s');

                delay().then(() => {
                    console.log('3s');
                });
        })
    }); 
}
umPorSegundo(); */

const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

const umPorSegundo = async () => {
    await delay() 
    console.log('1s')
    await delay() 
    console.log('2s')
    await delay() 
    console.log('3s')
}

umPorSegundo();

/* import axios from 'axios';

function getUserFromGithub(user) {
    axios.get(`https://api.github.com/users/${user}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Usuário não existe');
        })
}

getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123'); */

import axios from 'axios'

const getUserFromGithub = async (user) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`)
        console.log(response)
    } catch (err){
        console.warn('Erro na API');
    }
}

getUserFromGithub('Jeferson1')
getUserFromGithub('diego3g124123')

/* class Github {
    static getRepositories(repo) {
        axios.get(`https://api.github.com/repos/${repo}`)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
               console.log('Repositório não existe');})
    }
}

Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv'); */

class Github {
    static async getRepositories(repo){
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`)
            console.log(response.data)
        } catch (err) {
            console.warn('Repositório não existe')
        }
    }
}

Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('Jeferson1/Jeferson1');

/* const buscaUsuario = usuario => {
    axios.get(`https://api.github.com/users/${user}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Usuário não existe');
        });
}

buscaUsuario('diego3g'); */

const buscaUsuario = async usuario => {
    try {
        const response = await axios.get(`https://api.github.com/users/${usuario}`)
        console.log(response.data)
    } catch(err) {
        console.warn('Usuário não existe')
    }
}

buscaUsuario('diego3aasw');
buscaUsuario('Jeferson1');