const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name = " ", id = " ", email = " ", officeNumber = " ") {
        super(name, id, email);
        
        this.officeNumber = officeNumber;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }
    
    getRole() {
        const manager = new Manager();

        manager.name = this.name;
        manager.id = this.id;
        manager.email = this.email;
        manager.officeNumber = this.officeNumber;
        return manager;
    }
}
module.exports = Manager;