#  Amazing Team Profile Builder

A command-line application that takes in information about employees on a software engineering team, and generates an HTML webpage that displays summaries for each person.

## User Story

AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

## Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

To invoke the application, the following command is necessary:

*  node app

The user will then be given the command-line application that accepts user input.  The application will first prompt the user for the following manager's information:

*  Manager's Name
*  Manager's Employee Id
*  Manager's Email
*  Manager's Office Number

After the manager's information is received, the user will be prompted to make one of the following decisions: 

*  To enter an engineer employee's information OR
*  To enter an intern's employee's information OR
*  to complete the input process for employee information

Based on the user's choice above the following will occur:

*  If the user chooses to enter an engineer's information, then the user will be prompted for the following inforamtion:
    *  Engineer's Name
    *  Engineer's Employee Id
    *  Engineer's Email
    *  Engineer's GitHub Username 
    
*  If the user chooses to enter an intern's employee's information, then the user will be prompted for the following inforamtion:
    *  Intern's Name
    *  Intern's Employee Id
    *  Intern's Email
    *  Intern's School Name 
    
*  If the user chooses to complete the input process for employee information, then the teamBuild.HTML page is generated

## Installation

The application can be accessed at https://github.com/dosbor3/wk10_team-profile-builder  

## Usage

*  JavaScript
*  Node JS
*  npm
*  File System
*  Inquirer Package+
*  Jest


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.  Source code can be found at https://github.com/dosbor3/wk10_team-profile-builder





## Image 1 of Application 
![image](https://user-images.githubusercontent.com/40706088/152721846-23848f06-97cd-464e-8a26-6f0a04654a63.png)






## Image 2 of Application
![image](https://user-images.githubusercontent.com/40706088/152721950-1f4a7c9f-3356-4bc2-9b1e-41e46ee19a3e.png)


## Video Demonstration of Application
https://watch.screencastify.com/v/HnAHTNIYXiNcmEIlf8o0

## Video Demonstration of Passing Test
https://watch.screencastify.com/v/o6TXpDDyGSuQbhTsx1Bv 










