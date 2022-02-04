const inquirer = require("inquirer");
const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Manager = require("./Manager");
const Intern = require("./Intern");

function Prompt() {
    this.employee;
    this.manager;
    this.engineer;
    this.intern;
}

getUserInfo = function() {
    inquirer
        .prompt({
            type: "text",
            name: "manager", 
            message: "Enter Team's Manager Name: "
        })
        .then(({ name }) => {
            this.manager = new Manager(name);

            console.log("Manager: " + this.manager);
        });
}

module.exports = Prompt;