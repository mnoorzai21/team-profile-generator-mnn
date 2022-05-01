const generateList = require('./src/generateList');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');
const inquirer = require('inquirer');

const employeeArray = [];

const addTeamManager = () => {
    return inquirer.prompt([{
                type: "input",
                message: "Please enter team manager's name!",
                name: "name"
            },
            {
                type: "input",
                message: "Please enter manager's ID!",
                name: "id"
            },
            {
                type: "input",
                message: "Please enter manager's email address!",
                name: "email"
            },
            {
                type: "input",
                message: "Please enter manager's office number!",
                name: "officeNumber"
            }
        ])
        .then(managerInput => {
            const { name, id, email, officeNumber } = managerInput;
            const manager = new Manager(name, id, email, officeNumber);

            employeeArray.push(manager);
            console.log(manager);
        })
};

const addTeamMembers = () => {
    console.log(
        `Adding Employees to the Team
        =============================
        `);
    return inquirer.prompt([{
                type: 'list',
                message: "Please choose team member's role!",
                name: 'role',
                choices: ['Engineer', 'Intern']
            },
            {
                type: 'input',
                message: "Please enter team member's name!",
                name: 'name'

            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter the team member's ID!"

            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter the employee's email!",

            },
            {
                type: 'input',
                name: 'github',
                message: "Please enter the employee's github username.",

            },
            {
                type: 'input',
                name: 'school',
                message: "Please enter the intern's school",

            },
            {
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: 'Would you like to add more employees?',
                default: false
            }
        ])
        .then(employeeData => {
            let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
            let employee;

            if (role === 'Engineer') {
                employee = new Engineer(name, id, email, github);
                console.log(employee);

            } else if (role === 'Intern') {
                employee = new Intern(name, id, email, school);
                console.log(employee);

            }
            employeeArray.push(employee);

            if (confirmAddEmployee) {
                return addTeamMembers(employeeArray);
            } else {
                return employeeArray;
            }
        })
};

const writeFile = (data) => {
    fs.writeFile('./dist/team.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Team profile is successfully created on index.html");
        }
    })
};

addTeamManager()
    .then(addTeamMembers)
    .then(employeeArray => {
        return generateList(employeeArray);
    })
    .then(fileHtml => {
        return writeFile(fileHtml);
    })
    .catch(err => {
        console.log(err);
    });