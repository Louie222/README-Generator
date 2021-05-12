// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./Develop/utils/generateMarkdown.js");
const writeFileAsync = util.promisify(fs.writeFile);
//const { fstat } = require("node:fs");

// TODO: Create an array of questions for user input
//const questions = [                 //() =>
//inquirer.prompt([
function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "author",
      message: "What is the author's name?",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("You must enter your name.");
        }
        return true;
      },
    },

    {
    type: "input",
    name: "username",
    message: "What is your GitHub username?"
    },
    {
    type: "input",
    name: "email",
    message: "What is your email address?"
    },
    {
    type: "input",
    name: "title",
    message: "What is your project title?"
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
      writeToFile("answersText.md", answers.author)
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
