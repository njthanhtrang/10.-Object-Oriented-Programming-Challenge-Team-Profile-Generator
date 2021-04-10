const inquirer = require("inquirer");
const generatePage = require("./dist/index.html");
const { writeFile, copyFile } = require("./lib/Employee")

const promptUser = () => {
    return inquirer
    .prompt([
        {
            type: ""
        }
    ])
}