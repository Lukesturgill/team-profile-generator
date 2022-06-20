class Intern {
    constructor(name, id, email, school){
        this.name = name;
        this.is = id;
        this.email = email;
        this.school = school;
        this.type = 'intern'
    }

    fetchName(){

    }

    fetchId(){

    }

    fetchEmail(){

    }

    fetchScool(){
        return this.school;
    }
}

module.exports = Intern