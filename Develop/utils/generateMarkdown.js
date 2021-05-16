// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  console.log(answers)
  return `# ${answers.title, answers.installation, answers.usage}
## Description
${answers.title}
## Table of Contents
//google the code for this
## Installation 
${answers.installation}
   To install this application clone the repository from GitHub: https://github.com/Louie222 
## Usage
${answers.usage}
  To use this program, open your terminal and type 'npm start'
## License
## Contributing
## Tests 
## Questions

`;
}

module.exports = generateMarkdown;
