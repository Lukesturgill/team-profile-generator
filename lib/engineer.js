
class Engineer {
    constructor(name, id, email, github){
        this.name = name;
        this.is = id;
        this.email = email;
        this.github = github;
        this.type = 'engineer'
    }

    fetchName(){

    }

    fetchId(){

    }

    fetchEmail(){

    }

    fetchGitHub(){
        return this.github;
    }
}

module.exports = Engineer