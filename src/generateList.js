function generateList(answers) {
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
                <h1 class="display-5">Team Profile Generator</h1>
            </div>
        </div>
        <div class="subContainer d-flex justify-content-center">
            <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                <div class="card-header">
                    <div class="name"></div>
                    <div class="position"></div>
                </div>
                <div class="card-body bg-light">
                    <div class="subCard text-white bg-primary mb-3" style="max-width: 18rem;">
                        <div class="id card-header"></div>
                        <div class="email card-header"></div>
                        <div class="officeNum card-header"></div>
                    </div>
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
}

module.exports = generateList;