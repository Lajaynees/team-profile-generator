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
        const newManager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber)
        employee.push(newManager)
        addTeam();
    })
}




initial();
