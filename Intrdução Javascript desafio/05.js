var usuarios = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
    ];

    function retornaHabilidades(array){

        for (let values of array ){
            console.log(`O ${values.nome} possui as habilidades: ${values.habilidades.join(', ')}`)
        }

    }

    retornaHabilidades(usuarios)