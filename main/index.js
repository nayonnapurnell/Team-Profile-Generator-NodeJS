let generateHTML = require('./generateHTML.js');
let Employee = require('../lib/employee');
let Engineer = require('../lib/engineer');
let Manager = require('../lib/manager');
let Intern = require('../lib/intern');
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;


let profileList = [];

const addAProfile = () => {
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
          name: 'github',
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

const addATeam = () => {
  inquirer.prompt([
    {
      type: 'confirm',
      name: 'profile',
      message: 'Do you want to add another profile?',
    },
  ]).then((answers) => {
    if(answers.profile === true){
      init();
    }
    else{
      writeFile('index.html', generateHTML(profileList))
      console.log(answers);
      console.log(profileList);
      console.log('Successfully wrote to index.html');
    }
  }).catch((err) => console.error(err));  
};

const init = () => {
  addAProfile().then((answers) => { 
    if(answers.role === "Manager"){      
      profileList.push(new Manager(answers.id, answers.name, answers.email, answers.officeNumber));
    }
      if(answers.role === "Engineer"){
      profileList.push(new Engineer(answers.id, answers.name, answers.email, answers.github));
    }
      if(answers.role === "Intern"){
      profileList.push(new Intern(answers.id,answers.name, answers.email, answers.school));
    }
    addATeam();
  })
      .catch((err) => console.error(err));  
  };
  
  init();

 