//console.log("Hello world");
const inquirer = require('inquirer');
const Manager = require('/Users/mitchellroutman/repository/homework/team-profile-gen-MR/src/Manager');
const Engineer = require('/Users/mitchellroutman/repository/homework/team-profile-gen-MR/src/Engineer');
const Intern = require('/Users/mitchellroutman/repository/homework/team-profile-gen-MR/src/Intern');
const Employee = require('/Users/mitchellroutman/repository/homework/team-profile-gen-MR/src/Employee');
const genreateHTML = require('./src/htmlgenerator');
const Team = [];
//

//questions manager
function mainMenu() {

    inquirer.prompt([
        {
            type: 'list',
            name: 'selector',
            message: 'What kind of employee do you want to add?',
            choices: ['Manager', 'Engineer', 'Intern']
        }]).then(({selector}) => {
            if(selector === "Manager") {
                newManager()
            } else if (selector === "Engineer") {
                newEngineer()
            } else (selector === "Intern") {
                newIntern()
            }
        })
    }

function addMore () {
    inquirer.prompt([
        {
            type: 'list',
            choices: ['Yes', 'No'],
            name: 'choice',
            message: 'Would you like to add more team members?',
        }]).then(({choice}) => {
            if(choice === "Yes") {
                mainMenu()
            } else {
                createNewFile()
                    const htmlPage = generateHTML(Team);

                    FileSystem.writeFile('index.html', htmlPage, (error) =>
                    error ? console.log(error) : console.log('Generated HTML Team page')
                    );
                }
            }
        )
    
}


const newManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your managers name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your managers employee ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your managers email?'
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is your managers office number?'
        },
    ]).then(response => {
        const manager = new Manager(response.id, response.name, response.email, response.office)
        Team.push(manager);
        console.log(Team)
        // console.log(genreateHTML(Team))
        addMore();
    })
}


const newEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your Engineers name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your Engineers employee ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your Engineers email?'
        },
        {   type: 'input',
            name: 'git',
            message: 'What is your Engineers GitHub?'
        }
    ]).then(response => {
        const engineer = new Engineer(response.id, response.name, response.email, response.git)
        Team.push(engineer);
        mainMenu();
    })
}

const newIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your Interns name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your Interns employee ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your Interns email?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is your Interns school?'
        }
    ]).then(response => {
        const intern = new Engineer(response.id, response.name, response.email, response.school)
        Team.push(intern);
        mainMenu();
    })
}

mainMenu()

