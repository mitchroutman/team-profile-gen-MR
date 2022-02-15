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
const mainMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'selector',
            message: 'What kind of employeed do you want to add?',
            choices: ['Manager', 'Engineer', 'Intern']
        }])
        .then(userSelect => {
            switch (userSelect.menu) {
                case "Manager":
                    promptManager();
                    break;
                case "Engineer":
                    promptEngineer();
                    break;
                case "Intern":
                    promptIntern();
                    break;
                default:
                    makeTeam();
            }
        })
}