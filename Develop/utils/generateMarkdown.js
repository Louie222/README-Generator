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
  else if (answers.license === "GPLv3"){
    licenseImg = "[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)"
  } 

  console.log(answers)
  return `# ${answers.title, answers.description, answers.installation, answers.usage, answers.contributing, answers.tests, answers.questions}
## Description
${answers.title}

# Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
5. [Email](#email)
6. [License](#license)
7. [Contributing](#contributing)
8. [Tests](#tests)
9. [Questions](#questions)

## Description
${answers.description}

## Installation 
${answers.installation}
To install this application clone the repository from GitHub: https://github.com/Louie222 

## Usage
${answers.usage}
To use this program, open your terminal and type 'npm start'

## Email
My e-mail is: ${answers.email}

## License
${licenseImg}

## Contributing
${answers.contributing}
To install dependencies, open your terminal and type 'npm install' 

## Tests 
${answers.tests}
To run tests, open your terminal and type 'npm run test'

## Questions
To contact me my GitHub user name is ${answers.questions} 
`;
}

module.exports = generateMarkdown;
