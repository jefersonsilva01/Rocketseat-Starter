function getGithubUserRepo(){

    const bodyElement = document.querySelector('body')

    const list = document.querySelector('ul')
    const text = document.querySelector('h3')

    if(list !== null){
        bodyElement.removeChild(list)
    }

    if(text !== null){
        bodyElement.removeChild(text)
    }

    const message = document.createElement('h3')
    message.innerText = 'Carregando...'

    bodyElement.appendChild(message)
    
    const inputValue = document.querySelector('input').value

    axios.get(`https://api.github.com/users/${inputValue}/repos`)
    .then(function(response){
        const githubRep = response
         
        bodyElement.removeChild(message)

        const listElement = document.createElement('ul')
        
        bodyElement.appendChild(listElement)

        for(i = 0; i < githubRep.data.length;  i++){
            
            const repoElement = document.createElement('li')

            const repoName = document.createTextNode(githubRep.data[i].name)
            
            listElement.appendChild(repoElement)
            
            repoElement.appendChild(repoName)
        }

    })
    .catch(function(error){
        bodyElement.removeChild(message)
        message.innerText = 'Usuário não existe'
        bodyElement.appendChild(message)

        console.warn(error)
    })

}