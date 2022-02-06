const inquirer = require("inquirer");
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");
const fs = require("fs");
const path = require("path");
const generatePage = require("../src/page-template.js");
const output = path.resolve("./dist");
const outputFile = path.join(output, "teamBuild.HTML");



class Prompt {
    constructor() {
        this.employee;
        this.manager;
        this.engineer;
        this.intern;
        this.teamArr = [];        
        this.confirmEngineer;
        this.confirmIntern;
    }

  managerPrompt() {
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
    ]).then(({ name, id, email, officeNumber }) => {
        this.manager = new Manager(name, id, email,  officeNumber);
        this.teamArr.push(this.manager);        
        this.addTeamMember();
      });
    }
    addTeamMember() {
        inquirer.prompt([
            {
                type: "list",
                message: "What member would you like to add? ",
                name: "member",
                choices: ["Engineer", "Intern", "Complete Team Building"],                
                validate: action => {
                    if (action === "Add an Engineer" ) {
                        addEngineer = true;
                        addIntern = false;
                    }
                    else if (action === "Add an Intern") {
                        addIntern = true;
                        addEngineer = false;
                    }
                    else {
                        console.log("Team Building Complete!");
                        addIntern = false;
                        addEngineer = false;
                    }
                }     
            },
        ]).then(userChoice => {
            
            switch(userChoice.member) {
            case "Engineer":
              this.engineerPrompt();
              break;
            case "Intern":
              this.internPrompt();
              break;
            default:
            this.buildPage(this.teamArr)
            console.log("Team Additions Complete!");
            this.buildPage();
            }
          });
    }

    engineerPrompt() {
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
                validate: github => {
                    if (github) {
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
            this.engineer = new Engineer(name, id, email,  github);
            this.teamArr.push(this.engineer);            
            this.addTeamMember();
        });
    }

    internPrompt() {
        inquirer.prompt([
            {
                type: "input", 
                name: "name",
                message: "Intern's FULL NAME:  (required)",
                validate: name => {
                    if (name) {
                        return true;
                    }
                    else {
                        console.log("Please enter intern's FULL NAME:  (required)");
                        return false;
                    }
                }             
            },
            {
                type: "input", 
                name: "id",
                message: "Intern's id:  (required)",
            },
            {
                type: "input", 
                name: "email",
                message: "Intern's email address:  (required)",
                validate: email => {
                    if (email) {
                        return true;
                    }
                    else {
                        console.log("Please include intern's email address:  (required)");
                        return false;
                    }
                }      
            },
            {
                type: "input",
                name: "school",
                message: "Intern's school:  (required)",
                validate: school => {
                    if (school) {
                        return true;
                    }
                    else {
                        console.log("Please Enter intern's school:  (required)");
                        return false;
                    }
                }
            }
        ])
        .then(({ name, id, email, school }) => {
            this.intern = new Intern(name, id, email, school);
            this.teamArr.push(this.intern);            
            this.addTeamMember();
        });
    }

   buildPage() {
    if (!fs.existsSync(output)) {
        fs.mkdirSync(output);
    }
    fs.writeFileSync(outputFile, generatePage(this.teamArr), "utf-8");
    
    }    
} 
module.exports = Prompt;