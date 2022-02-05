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
        this.teamArr = [];        
        this.confirmEngineer = false;
        this.confirmIntern = false;
    }

    getUserInfo() {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Manager's Full Name: ",
                validate: name => {
                    if (name) {
                        return true; 
                    }
                    else {
                        console.log("Please enter Manager's Full Name: ");
                        return false;
                    }
                }
            },
            {
                type: "input", 
                name: "id",
                message: "Manager's id:  (required)"            
            },
            {
                type: "input", 
                name: "email",
                message: "Manager's email address:  (required)",
                validate: email => {
                    if (email) {
                        return true;
                    }
                    else {
                        console.log("Please enter Manager's email address:  (required)");
                        return false;
                    }
                }            
            },
            {
                type: "input",
                name: "officeNumber",
                message: "Manager's  office number:  (required)", 
                validate: officeNumber => {
                    if (officeNumber) {
                        return true;
                    }
                    else {
                        console.log("Please enter Manager's office number:  (required)");
                        return false;
                    }
                }
            }
        ])
        .then(({ name, id, email, officeNumber }) => {
            this.manager = new Manager(name, id, email,  officeNumber);
            this.teamArr.push(this.manager);
            
            // test the object creation
            console.log(this.teamArr);

            this.confirmAdd();
        });
    }

    confirmAdd() {
        inquirer.prompt([
            {
                type: "list",
                        message: "What would you like to do? ",
                        name: "action",
                        choices: ["Add an Engineer", "Add an Intern", "Complete Team Building"],                
                        validate: action => {
                            if (action === "Add an Engineer" ) {
                                confirmEngineer = true;
                                confirmIntern = false;
                            }
                            else if (action === "Add an Intern") {
                                confirmIntern = true;
                                confirmEngineer = false;
                            }
                            else {
                                console.log("Team Building Complete!");
                                confirmIntern = false;
                                confirmEngineer = false;
                            }
                        }     
            }
        ])
        .then(() => {
            if(this.confirmEngineer) {
                this.addEngineer();
            }
            else if (this.confirmIntern) {
                this.addIntern();
            }
            
        });
    }

    addEngineer() {
        inquirer.prompt([
            {
                type: "input", 
                        name: "name",
                        message: "Engineer's FULL NAME:  (required)",
                        validate: name => {
                            if (name) {
                                return true;
                            }
                            else {
                                console.log("Please enter engineer's FULL NAME:  (required)");
                                return false;
                            }
                        }             
            },
            {
                type: "input", 
                name: "id",
                message: "Engineer's id:  (required)",
            },
            {
                type: "input", 
                name: "email",
                message: "Engineer's email address:  (required)",
                validate: email => {
                    if (email) {
                        return true;
                    }
                    else {
                        console.log("Please include engineer's email address:  (required)");
                        return false;
                    }
                }      
            },
            {
                type: "input",
                        name: "github",
                        message: "Engineer's GitHub Username:  (required)",
                        validate: officeNumber => {
                            if (officeNumber) {
                                return true;
                            }
                            else {
                                console.log("Please Enter engineer's GitHub username:  (required)");
                                return false;
                            }
                        }
            }
        ])
        .then(({ name, id, email, github }) => {
            this.engineer = new Manager(name, id, email,  github);
            this.teamArr.push(this.engineer);
            
            // test the object creation
            console.log(this.teamArr);

            this.confirmAdd();
        });
    }






}
module.exports = Prompt;



        