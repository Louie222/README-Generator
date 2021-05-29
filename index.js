// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./Develop/utils/generateMarkdown.js");
//const writeFileAsync = util.promisify(fs.writeFile);
//const { fstat } = require("node:fs");

// TODO: Create an array of questions for user input
//const questions = [                 //() =>
//inquirer.prompt([
function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project title?",
      validate: function (answers) {
        if (answers.length < 1) {
          return console.log("You must enter your name.");
        }
        return true;
    }
    },
    {
      type: "input",
      name: "installation",
      message: "To install this application clone the repository from GitHub: https://github.com/Louie222, press ''enter' to confirm",
    },
    {
    type: "input",
    name: "usage",
    message: "To use this program, open your terminal and type npm start, press 'enter' to confirm",
    },
    {
    type: "input",
    name: "email",
    message: "What is your email address?"
    },
    {
    type: "input",
    name: "description",
    message: "Please write a brief description of your project:"
    },
    {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "B"]

    }
  ])
  .then(answers => {
      writeToFile("answersText.md", generateMarkdown(answers))
      console.log(answers)
  })
}

promptUser();

//TODO: Create a function to write README file

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }

    console.log("Your markdown file has been created");
  });
}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
// function init

