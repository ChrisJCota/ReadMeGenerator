const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// const generateReadme = ({ title, description, usage, contribution, installation, test, github, email }) =>
//     ` # ${title} 


// ## Table of Contents

// 1. [Description](#description)
// 2. [Usage](#usage)
// 3. [Installation](#installation)
// 4. [Test](#test)
// 5. [Contribution](#contribution)

// ## Description <a name="description"></a>
// ${description}

// ## Usage <a name="usage"></a>
// ${usage}

// ## Installation <a name="installation"></a>
// ${installation}

// ## Test <a name="test"></a>
// ${test}

// ## Contribution <a name="contribution"></a>
// ${contribution}

// ## Questions
// For any questions on my ${title} project you can reach me at my github account https://github.com/${github} or email me at ${email}

// `;

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project title'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter your project description'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter how your project can be used'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter who the contributors to your project were'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter the installation instructions for your project'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter test instructions for your project'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license did you use?',
        choices: ['Apache', 'LGPL', 'MIT', 'MPL', 'None']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your github account name'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email'
    }

];



// TODO: Create a function to initialize app
const init = () => {
    inquirer
        .prompt(questions)

        .then((data) => {
            const readmeContent = generateMarkdown(data);
            fs.writeFile('README.md', readmeContent, (err) =>
                err ? console.log(err) : console.log('Successfully created your ReadME!')
            );
        });
}

// Function call to initialize app
init();
