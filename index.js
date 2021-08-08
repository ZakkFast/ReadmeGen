// Requires
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js');
// Array of questions for user input
const questions = [
    {
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a title to continue')
                return false;
            }
        }
    },
    {
        name: 'description',
        message: 'Please provide a brief description of your project',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description to continue.')
            }
        }
    },
    {
        name: 'installation',
        message: 'How is your project installed?',
        validate: installationInput => {
            if (installationInput) {
                return true;    
            } else {
                console.log('Please enter install instructions continue. If none please enter N/A.')
                return false;
            }
        }
    },
    {
        name: 'usage',
        message: 'How do you use your project',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter usage details to continue')
                return false;
            }
        }
    },
    {
        name: 'contribution',
        message: 'How can people contribute to this project?',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please enter contribution details. If none please enter N/A')
                return false
            }
        }
    },
    {
        name: 'testing',
        message: 'How do you test this project?',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('Please enter testing details. If none please enter N/A')
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'usage license',
        choices: [ 'None', 'Apache', 'Common-Development-and Distribution', 'GNU-General-Public', 'MIT', 'Mozilla-Public'],
        validate: licenseInput => {
            if (licenseInput) {
                return true
            } else {
                console.log('Please pick a license for your project.')
                return false
            }
        }
    },
    {
        name: 'gituser',
        message: 'What is your Github username?',
        validate: gituser => {
            if (gituser) {
                return true;
            } else {
                console.log('Please enter your Github username to continue')
                return false;
            }
        }
    },
    {
        name: 'email',
        message: 'What is your contact email?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your contact email to continue.')
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Information has been store into your Readme.')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput))
    })
}

// Function call to initialize app
init();