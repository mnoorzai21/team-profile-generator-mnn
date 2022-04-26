const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer")

const teamManager = (employees) => {

    return employees.map(
        (Manager) => (
            `<div class="subContainer d-flex justify-content-center">
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">
        <div class="name">${Manager.name}</div>
        <div class="position">Manager</div>
    </div>
        <div class="card-body bg-light">
            <div class="subCard text-white bg-primary mb-3" style="max-width: 18rem;">
            <div class="id card-header">ID: ${Manager.id}</div>
            <div class="email card-header">Email: ${Manager.email}</div>
            <div class="email card-header">Email:School: ${Manager.officeNumber}</div>
        </div>
    </div>
    </div>`)
    );
}

const teamEngineer = (employees) => {

    return employees.map(
        (Engineer) => (
            `<div class="subContainer d-flex justify-content-center">
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">
        <div class="name">${Engineer.name}</div>
        <div class="position">Engineer</div>
    </div>
        <div class="card-body bg-light">
            <div class="subCard text-white bg-primary mb-3" style="max-width: 18rem;">
            <div class="id card-header">ID: ${Engineer.id}</div>
            <div class="email card-header">Email: ${Engineer.email}</div>
            <div class="email card-header">Email:School: ${Engineer.github}</div>
        </div>
    </div>
    </div>`)
    );
}

const teamIntern = (employees) => {

    return employees.map(
        (Intern) => (
            `<div class="subContainer d-flex justify-content-center">
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">
        <div class="name">${Intern.name}</div>
        <div class="position">Intern</div>
    </div>
        <div class="card-body bg-light">
            <div class="subCard text-white bg-primary mb-3" style="max-width: 18rem;">
            <div class="id card-header">ID: ${Intern.id}</div>
            <div class="email card-header">Email: ${Intern.email}</div>
            <div class="email card-header">Email:School: ${Intern.school}</div>
        </div>
    </div>
    </div>`)
    );
}

const generateList = (employees) =>
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
        <link rel="stylesheet" href="./dist/tyle.css">
        <title>My Team</title>
    </head>
    <body class="container" style="max-width: 100%; padding: 1px;">
        <div class="jumbotron jumbotron-fluid text-white text-center bg-danger">
            <div class="container">
                <h1 class="display-5">My Team</h1>
            </div>
        </div>
        <div class="subContainer d-flex justify-content-center">
        ${teamManager(employees)} 
        ${teamEngineer(employees)}
        ${teamIntern(employees)}
        </div>
    </body>
    </html>`;

module.exports = generateList;