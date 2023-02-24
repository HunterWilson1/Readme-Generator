// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user "input"
const questions = [
    {
        type: "input",
        message: "What is the title of your project.",
        name: "title",
    },
    {
        type: "input",
        message: "Give a description of your project.",
        name: "Description",
    },
    {
        type: "input",
        message: "What are the installation instructions for your project?",
        name: "installation",
    },
    {
        type: "input",
        message: "How do you use your project?",
        name: "usage",
    },
    {
        type: "list",
        message: "choose a license for your project.",
        name: "license",
        choices: []
    },
    {
        type: "input",
        message: "How can others contribute to your project?",
        name: "contributing",
    },
    {
        type: "input",
        message: "How can you test your project?",
        name: "tests",
    },
    {
        type: "input",
        message: "What is your GtiHub username?",
        name: "github",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
