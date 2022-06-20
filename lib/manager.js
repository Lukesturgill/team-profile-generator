class Manager {
    constructor(name, id, email, officeNumber){
        this.name = name;
        this.is = id;
        this.email = email;
        this.officeNumber = officeNumber;
        this.type = 'manager'
    }

    fetchName(){

    }

    fetchId(){

    }

    fetchEmail(){

    }

    fetchOffice(){
        return this.officeNumber;
    }
}

module.exports = Manager