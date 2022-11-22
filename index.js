const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
let generateHTML = require('./generateHTML.js');
const Employee = require('./employee');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'id',
            message: 'What is the Employee ID?',
          },
        {
            type: 'input',
            name: 'name',
            message: 'What is the Employee Name?',
          },
          {
            type: 'input',
            name: 'email',
            message: 'What is the Employee Email Address?',
          },
          {
            type: 'input',
            name: 'role',
            message: 'What is the Employee Role?',
          },

    ]);
};

const init = () => {
    promptUser()
      .then((answers) => writeFile('index.html', generateHTML(answers)))
      .then(() => console.log('Successfully wrote to html file'))
      .catch((err) => console.error(err));
  };
  
  init();