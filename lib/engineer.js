const Employee = require('./employee');

class Engineer extends Employee {
        constructor(name, id, email, GitHub){
           super(name, id, email)
            this.gitHub = GitHub;
            this.type = 'Engineer'
        }

    getRole(){
        return 'Engineer'
    }

    getGitHub(){
        return this.gitHub;
    }
}

module.exports = Engineer