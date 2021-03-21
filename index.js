// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);
// TODO: Create an array of questions for user input
const questions = () =>
inquirer.prompt([
     {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your github username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description of what your project is",

    },
    {
        type: "list",
        name: "license",
        message: "Select the license below",
        choices: [
            {
                name: "MIT",
                value: {
                    name: "MIT",
                    link: "MIT",
                    url:  "https://opensource.org/licenses/MIT",
                    color: "blue",
                }
            },
            {
                name: "Boost",
                value: {
                    name: "Boost",
                    link: "Boost",
                    url: "https://www.boost.org/LICENSE_1_0.txt",
                    color: "Green",

                },

            },
        ]

    },

]);


// TODO: Create a function to initialize app
function init () {
    inquirer.prompt(questions)
    // TODO: Create a function to write README file
    .then(function(data){
        console.log(data);
        console.log("WriteFile");
        writeFileAsync("Readme.md", generateMarkdown(data))
    })

};



// Function call to initialize app
init();
