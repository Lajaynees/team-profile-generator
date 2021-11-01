//declare teams/members/mods
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 
const fs = require('fs'); 

const teamMembers = []; 


//set up Manager/first prompts
const initial = () => {
    inquirer.prompt([
        {
            type: "Input",
            message: "What's your manager's name?",
            name: "managerName"
        },
        {
            type: "input",
            message: "What's your manager's employee ID?",
            name: "managerId"

        },
        {
            type: "input",
            message: "What's your manager's email address?",
            name: "managerEmail"
        },
        {
            type: "input",
            message: "What's your manager's office number?",
            name: "managerOfficeNumber"
        }
    ]).then(response => {
        const newManager = newManager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber)
        teamMembers.push(newManager)
        addTeam();
    })
}

//copy paste for engineer and intern prompts
const newEngineer = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the name of the engineer?",
            name: "engineerName"
        },
        {
            type: "input",
            message: "What is the id number of the engineer?",
            name: "engineerId"
        },
        {
            type: "input",
            message: "What is the email address of the engineer?",
            name: "engineerEmail"
        },
        {
            type: "input",
            message: "What is the GitHub username of the engineer?",
            name: "engineerGithub"
        }
    ]).then(response => {
        const newEngineer = newEngineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub)
        teamMembers.push(newEngineer);
        addTeam();
    })
}

const newIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the name of the intern?",
            name: "internName"
        },
        {
            type: "input",
            message: "What is the id number of the intern?",
            name: "internId"
        },
        {
            type: "input",
            message: "What is the Email address of the intern?",
            name: "internEmail"
        },
        {
            type: "input",
            message: "What school does the intern go to?",
            name: "internSchool"
        }
    ]).then(response => {
        const newIntern = newIntern(response.internName, response.internId, response.internEmail, response.internSchool)
        teamMembers.push(newIntern);
        addTeam();
      
    });
}

//connect to html and template

const addTeam = () => {
    inquirer.prompt([
        {
            type: "list",
            message: "What type of employee do you want to add to your team?",
            choices: ["Engineer", "Intern", "none"],
            name: "addEmployee"
        }
    ]).then((response) => {
        if (response.addEmployee === "Engineer") {
            newEngineer();
        } else if (response.addEmployee === "Intern") {
            newIntern();
        } else {
          const generatedTemplate = htmlTemplate.renderTemplate(employee);
          htmlTemplate.outputHTML(generatedTemplate);
        }
    });

}




initial();
// Worked with tutor-Andrew Harmon on initial push-finished 11/01