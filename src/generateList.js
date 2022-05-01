const addManager = function(managerInfo) {
    return `<div class="subContainer d-flex justify-content-center">
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">
        <div class="name">${managerInfo.name}</div>
        <div class="position">Manager</div>
    </div>
        <div class="card-body bg-light">
            <div class="subCard text-white bg-primary mb-3" style="max-width: 18rem;">
            <div class="id card-header">ID: ${managerInfo.id}</div>
            <div class="email card-header">Email: ${managerInfo.email}</div>
            <div class="email card-header">Email:School: ${managerInfo.officeNumber}</div>
        </div>
    </div>
    </div>`;
}

const addEngineer = function(engineerInfo) {
    return `<div class="subContainer d-flex justify-content-center">
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">
        <div class="name">${engineerInfo.name}</div>
        <div class="position">Engineer</div>
    </div>
        <div class="card-body bg-light">
            <div class="subCard text-white bg-primary mb-3" style="max-width: 18rem;">
            <div class="id card-header">ID: ${engineerInfo.id}</div>
            <div class="email card-header">Email: ${engineerInfo.email}</div>
            <div class="email card-header">Email:School: ${engineerInfo.github}</div>
        </div>
    </div>
    </div>`;
}

const addIntern = function(internInfo) {
    return `<div class="subContainer d-flex justify-content-center">
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">
        <div class="name">${internInfo.name}</div>
        <div class="position">Intern</div>
    </div>
        <div class="card-body bg-light">
            <div class="subCard text-white bg-primary mb-3" style="max-width: 18rem;">
            <div class="id card-header">ID: ${internInfo.id}</div>
            <div class="email card-header">Email: ${internInfo.email}</div>
            <div class="email card-header">Email:School: ${internInfo.school}</div>
       </div>
    </div>
    </div>`;
}
generateList = (data) => {
    employeeArray = [];
    for (let i = 0; i < data.length; i++) {
        const currentMember = data[i];
        const currentRole = currentMember.getRole();

        if (currentRole === 'Manager') {
            const managerCard = addManager(currentMember);
            employeeArray.push(managerCard);
        }
        if (currentRole === 'Engineer') {
            const engineerCard = addEngineer(currentMember);
            employeeArray.push(engineerCard);
        }
        if (currentRole === 'Intern') {
            const internCard = addIntern(currentMember);
            employeeArray.push(internCard);
        }
    }

    const employeeCards = employeeArray.join('');

    const generatedTeam = generateTeamMember(employeeCards);
    return generatedTeam;
}

const generateTeamMember = function(employeeCards) {
    return `<!DOCTYPE html>
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
        ${employeeCards}
        </div>
    </body>
    </html>`;
}
module.exports = generateList;