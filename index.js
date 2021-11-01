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
        employee.push(newManager)
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
        employee.push(newEngineer);
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
        employee.push(newIntern);
        addTeam();
      
    });
}




initial();
