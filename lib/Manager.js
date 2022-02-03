class Manager extends Employee {
    constructor(name= "", id = " ", email = " ") {
        super(name, id, email);         
    }

    getName = function() {
        return this.name;
    }

    getId = function() {
        return this.id;
    }

    getEmail = function() {
        return this.email;
    }
    
    getRole() {
        return super.getRole();
    }
}
