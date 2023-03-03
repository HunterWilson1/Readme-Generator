// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");
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
    name: "description",
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
    choices: ["MIT", "GPLv2", "Apache", "None"],
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
  },
];


// This function takes in a file name and data to write to that file using Node's fs module.
// If there is an error during the write process, it logs the error to the console. Otherwise, it logs a success message.
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("README file has been made!");
    }
  });
}


// This function initializes the application by using Inquirer to prompt the user with a series of questions, then generates a markdown file using the user's answers.
// Finally, it calls the writeToFile function to write the markdown
function init() {
  inquirer.prompt(questions).then((data) => {
    const markdown = generateMarkdown(data);
    writeToFile("sampleREADME.md", markdown);
  });
}


init();
