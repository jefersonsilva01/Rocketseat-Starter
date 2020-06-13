function temHabilidade(skills) {

    if(skills.indexOf('Javascript', 0) > -1){
        return console.log('true')
    } else {
        return console.log('false')
    }
}

    var skills = ["Javascript", "ReactJS", "React Native"];
    temHabilidade(skills); // true ou false