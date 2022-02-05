const inquirer = require("inquirer");
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");

class Prompt {
    constructor() {
        this.employee;
        this.manager;
        this.engineer;
        this.intern;
        this.internArr = [];
        this.engineerArr = [];    
        this.addEngineer = false;
        this.addIntern = false;
    }


    getUserInfo() {
        inquirer.prompt([
            {
                type: "input", 
                name: "name",
                message: "Team manager's FULL NAME:  (required)",
                validate: name => {
                    if (name) {
                        return true;
                    }
                    else {
                        console.log("Please enter team manager's FULL NAME:  (required)");
                        return false;
                    }
                }             
            },
            {
                type: "input", 
                name: "id",
                message: "Team manager's id:  (required)"            
            },
            {
                type: "input", 
                name: "email",
                message: "Team manager's email address:  (required)",
                validate: email => {
                    if (email) {
                        return true;
                    }
                    else {
                        console.log("Please include team manager's email address:  (required)");
                        return false;
                    }
                }            
            },        
            {
                type: "input",
                name: "officeNumber",
                message: "Team manager's office number:  (required)", 
                validate: officeNumber => {
                    if (officeNumber) {
                        return true;
                    }
                    else {
                        console.log("Please Enter team manager's office number:  (required)");
                        return false;
                    }
                }
            }
            ])
            .then(({ name, id, email, officeNumber }) => {
                this.manager = new Manager(name, id, email,  officeNumber);
                
                // test the object creation
                console.log(this.manager);
            })
        }
    };
       
module.exports = Prompt;