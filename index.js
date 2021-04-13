const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
// const generatePage = require("./dist/index.html");
const { writeFile, copyFile } = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/generateHTML");
const employeesArr = [];

const mainMenu = () => {
  return new Promise((resolve, reject) => {
    inquirer
      .prompt([
        {
          type: "list",
          name: "menu",
          message: "What would you like to do?",
          choices: ["Add a team", "Exit"],
        },
      ])
      .then((answer) => {
        console.log(answer);
        switch (answer.menu) {
          case "Add a team":
            addManager();
            break;
          case "Exit":
            console.log("exit");
            break;
        }
      });
  });
};
const addManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the team manager's name? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the manager's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the team manager's ID? (Required)",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter the manager's ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the team manager's email? (Required)",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter the manager's email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the team manager's office number? (Required)",
        validate: (officeInput) => {
          if (officeInput) {
            return true;
          } else {
            console.log("Please enter the manager's office number!");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      employeesArr.push(answers);
      addUser();
    });
};

const addUser = () => {
  return inquirer
    .prompt({
      type: "list",
      name: "role",
      message: "Which employee are you adding? (Required)",
      choices: ["Engineer", "Intern"],
    })
    .then((choices) => {
      switch (choices.role) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        default:
          buildTeam();
      }
    });
};

const addEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the engineer's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the engineer's ID? (Required)",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter the engineers ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineer's email? (Required)",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter the engineer's email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "What's your engineer's GitHub profile?",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter the engineer's GitHub!");
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "addAnother",
        message: "Do you want to add another employee?",
        default: "true",
      },
    ])
    .then((answer) => {
      console.log(answer);
      if (answer.addAnother) {
        addUser();
      } else {
        buildEngineer();
      }
    });
};

const addIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern's name? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the intern's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the intern's ID? (Required)",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter the intern's ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the intern's email? (Required)",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter the intern's email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "What's your intern's school?",
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          } else {
            console.log("Please enter the intern's school!");
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "addAnother",
        message: "Do you want to add another employee?",
        default: "true",
      },
    ])
    .then((answer) => {
      console.log(answer);
      if (answer.addAnother) {
        addUser();
      } else {
        buildIntern();
      }
    });
};

function buildEngineer(answers) {
  employeesArr.push(
    new Engineer(answers.name, answers.id, answers.email, answers.github)
  );
  addUser();
}

function buildIntern(answers) {
  employeesArr.push(
    new Intern(answers.name, answers.id, answers.email, answers.school)
  );
  addUser();
}

function buildTeam(employeesArr) {
  for (let i = 0; i < employeesArr.length; i++) {
    generateHTML(employeesArr[i]);
  }
}

const writeToFile = (data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", data, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "HTML page created!",
      });
    });
  });
};

function init() {
  mainMenu()
    .then((response) => generateHTML(response))
    .then((res) => {
      writeToFile(res);
      console.log("Success! Check out your generated HTML page!");
    });
}

init();

// writefile
// encapsulate fx into separate fx
// call general questions, switch based on role
// call role specific quetions
// create employee, save to array
// ask question, do i want to create another employee
// if so, start over again. if not, writeFile
// take array of employees, generate card for each
// take array of HTML cards, join and write to file

// loop through array, take name, id, email, generate in cards
// based on role, generate office number, github
// ICONS based on role
// write new index.html
