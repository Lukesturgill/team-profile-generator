const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
       super(name, id, email)
        this.officeNumber = officeNumber;
        this.type = 'manager'
    }

    getRole() {
        return 'manager'
    }

    getOffice(){
        return this.officeNumber;
    }
}

module.exports = Manager