const fs = require('fs');
const inquirer = require('inquirer');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateList');
const util = require('util');


const employees = [];

const promptUser = () => {
    return inquirer.prompt(
        [{
                type: "list",
                message: "Enter your role",
                name: "role",
                choices: ["Manager", "Engineer", "Intern", "Exit"],
            },
            {
                type: "input",
                message: ({ role }) => `Creating a new ${role}?. What is the ${role}'s name?`,
                name: "name",
                when: ({ role }) => role != "Exit",
                validate: name => {
                    if (name) {
                        return true;
                    } else {
                        console.log('Please enter a name.');
                        return false;
                    }
                }
            },
            {
                type: "input",
                message: ({ role }) => `What is the ${role}'s employee ID?`,
                name: "id",
                when: ({ role }) => role != "Exit",
                validate: id => {
                    if (id) {
                        return true;
                    } else {
                        console.log('Please enter an employee ID.');
                        return false;
                    }
                }
            },
            {
                type: "input",
                message: ({ role }) => `What is the ${role}'s email?`,
                name: "email",
                when: (data) => data.role != "Exit",
                validate: email => {
                    if (email) {
                        return true;
                    } else {
                        console.log('Please enter an email.');
                        return false;
                    }
                }
            },
            {
                type: "input",
                message: ({ role }) => `What is the ${role}'s office number?`,
                name: "officeN",
                when: ({ role }) => role === "Manager",
                validate: function(value) {
                    return value.match(/^\d+$/) ? true : "Invalid office number";
                }

            },
            {
                type: "input",
                message: ({ role }) => `What is the ${role}'s github?`,
                name: "github",
                when: ({ role }) => role === "Engineer",
                validate: github => {
                    if (github) {
                        return true;
                    } else {
                        console.log('Please enter a github username.');
                        return false;
                    }
                }

            },
            {
                type: "input",
                message: ({ role }) => `What is the ${role}'s school?`,
                name: "school",
                when: ({ role }) => role === "Intern",
                validate: school => {
                    if (school) {
                        return true;
                    } else {
                        console.log('Please enter a school.');
                        return false;
                    }
                }
            }
        ]);
}

const init = () => {
    promptUser()

    .then((employees) => fs.writeFileSync("./dist/team.html", generateHTML(employees)))
        .then(() => console.log("\nsuccessfully wrote to team.html"))
        .catch((err) => console.error(err));
};
init();