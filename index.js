// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Enter the project title",
    name: "title",
  },
  {
    type: "input",
    message: "Enter the project description",
    name: "description",
  },
  {
    type: "input",
    message: "Enter the installation instrucitons",
    name: "installation",
  },
  {
    type: "input",
    message: "Enter the usage information",
    name: "usage",
  },
  {
    type: "input",
    message: "Enter the guidelines for contributing to this project",
    name: "contribution",
  },
  {
    type: "input",
    message: "Enter the instructions for testing this app",
    name: "test",
  },
  {
    type: "input",
    message: "Enter your Github username",
    name: "github",
  },
  {
    type: "input",
    message: "Enter your email",
    name: "email",
  },
  {
    type: "list",
    message: "What kind of license do you want?",
    name: "license",
    choices: ["MIT", "Apache", "GNU GPLv3", "Boost", "ISC"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  // Prompts the user for input according to the questions specified above
  // Writes the output to a README file within the /app directory
  inquirer.prompt(questions).then((response) => {
    fs.writeFile(
      "app/README.md",
      generateMarkdown(response),
      function (err) {
        if (err) {
          return console.log(err);
        }
      }
    );
  });
}

// Function call to initialize app
init();
