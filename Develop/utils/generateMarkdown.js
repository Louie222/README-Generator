// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}
  //if (license)


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {

  var licenseImg;
  if (answers.license === "MIT"){
    licenseImg = "[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)"
  }
  //else if () 



  console.log(answers)
  return `# ${answers.title, answers.installation, answers.usage}
## Description
${answers.title}
# Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests] (#tests)
7. [Questions] (#questions)

## Installation 
${answers.installation}
   To install this application clone the repository from GitHub: https://github.com/Louie222 
## Usage
${answers.usage}
  To use this program, open your terminal and type 'npm start'
## License
${licenseImg}
## Contributing
## Tests 
## Questions

`;
}

module.exports = generateMarkdown;
