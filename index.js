const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateList');
const util = require('util');

const promptUser = () => {
    return inquirer.prompt([{
            type: 'input',
            message: 'Enter employee name: ',
            name: 'emplayeeName'
        },
        {
            type: 'input',

            name: 'position'
        },
        {
            type: 'input',
            message: 'Enter employee ID: ',
            name: 'id'
        },
        {
            type: 'input',
            message: 'Enter employee office number: ',
            name: 'officeNumber'
        },
        {
            type: 'list',
            message: 'Enter employee position: ',
            name: 'position',
            choices: [{
                    Engineer
                },

                {
                    Manager
                },
                {
                    Intern
                }

            ],
        },
    ])
};

const init = () => {
    promptUser()

    .then((answers) => fs.writeFileSync("./dist/team.html", generateHTML(answers)))
        .then(() => console.log("successfully wrote to team.html"))
        .catch((err) => console.error(err));
};
init();