const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name = " ", id = " ", email = " ", school = " ") {
        super(name, id, email);
        
        this.school = school;
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
        const intern = new Intern();

        intern.name = this.name;
        intern.id = this.id;
        intern.email = this.email;
        intern.school = this.school;
        return intern;
    }
}
module.exports = Intern;