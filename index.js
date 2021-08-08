// Requires
const inquirer = require('inquirer')
const fs = require('fs')
const genMarkdwon = require('./src/generateMarkdown.js')

// TODO: Create an array of questions for user input
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
        validate: (installationInput) => {
            if (installationInput) {
                return true;    
            } else {
                console.log('Please')
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
