const Employee = require("../lib/Employee");

function buildPage(employeesArr) {
  function generateHTML(answers) {
    switch (answers) {
      case "Engineer":
        answers.wildcard = answers.getGithub();
        break;
      case "Intern":
        answers.wildcard = answers.getSchool();
        break;
      case "Manager":
        answers.wildcard = answers.getOfficeNumber();
        break;
    }

    let output = `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${answers.name}</h5>
      <p class="card-text">${getRole().value}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${answers.id}</li>
      <li class="list-group-item">${answers.email}</li>
      <li class="list-group-item">${answers.wildcard}</li>
    </ul>
  </div>
`;
    return output;
  }
  
  function fullPage(answers) {
    let output = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
        <link rel="stylesheet" href="./style.css">
        <title>My Team</title>
    </head>
    <body>
        <header><h1>My Team</h1></header>
        ${generateHTML(employee)}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
    </body>
    </html>
`;
  }
}

module.exports = buildPage;
