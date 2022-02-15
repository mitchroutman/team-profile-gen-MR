//console.log("Hello world");
const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('/Users/mitchellroutman/repository/homework/team-profile-gen-MR/src/Manager');
const Engineer = require('/Users/mitchellroutman/repository/homework/team-profile-gen-MR/src/Engineer');
const Intern = require('/Users/mitchellroutman/repository/homework/team-profile-gen-MR/src/Intern');
const Employee = require('/Users/mitchellroutman/repository/homework/team-profile-gen-MR/src/Employee');
const Team = [];
//

//questions manager
const questionBank = () => {
inquirer.prompt([
    {
        type: 'list',
        name: 'employee type',
        message: 'What kind of employee do you want to add?',
        choices: ['Manager', 'Engineer', 'Intern']
    },
    {
        type: 'input',
        name: 'name',
        message: "What is your name?"
    },
    {   
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'office',
        message: 'What is your office number?'
    },
])}

//questions engineer
const questionBank = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'employee type',
            message: 'What kind of employee do you want to add?',
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is your name?"
        },
        {   
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub?'
        },
    ])}

//questions intern
const questionBank = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'employee type',
            message: 'What kind of employee do you want to add?',
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is your name?"
        },
        {   
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is your school?'
        },
    ])}
