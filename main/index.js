let Employee = require('../lib/employee');
let Engineer = require('../lib/engineer');
let Manager = require('../lib/manager');
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
let generateHTML = require('./generateHTML.js');


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
            type: 'list',
            name: 'role',
            message: 'What is the Employee Role?',
            choices: ['Manager', 'Engineer', 'Intern'],
          },
         {
           type: 'input',
           name: 'officeNumber',
           message: `What is the Manager's office number?`,
           when: (answers) => answers.role === 'Manager'
        },
        {
          type: 'input',
          name: 'githubUsername',
          message: `What is the Engineer's GitHub username?`,
          when: (answers) => answers.role === 'Engineer'
       },
       {
        type: 'input',
        name: 'school',
        message: `What is the Intern's school name?`,
        when: (answers) => answers.role === 'Intern'
     },
    ]);
};



const init = () => {
    promptUser()
      .then((answers) => {writeFile('index.html', generateHTML(answers), manger(answers))})
      .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
  };
  
  init();