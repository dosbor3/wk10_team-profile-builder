const Employee = require("./Engineer");

class Engineer extends Employee {
    constructor(name = " ", id = " ", email = " ", github = " ") {
        super(name, id, email);
        
        this.github = github;
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

    getGithub() {
        return this.github;
    }
    
    getRole() {
        const engineer = new Engineer();

        engineer.name = this.name;
        engineer.id = this.id;
        engineer.email = this.email;
        engineer.github = this.github;
        return engineer;
    }
}
module.exports = Engineer;