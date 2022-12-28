let Employee = require('../lib/employee');
let Engineer = require('../lib/engineer');
let Manager = require('../lib/manager');
let Intern = require('../lib/intern');
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
let generateHTML = require('./generateHTML.js');

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
      console.log('Successfully wrote to index.html')
    }
  }).catch((err) => console.error(err));  
};

const init = () => {
  addAProfile().then((answers) => { 
    if(answers.role === "Manager"){
      const manager = new Manager(answers.id, "Stephanie Lockland", "steph.lockland@gmail.com", "Room 208")
      profileList.push(manager);
    }
      if(answers.role === "Engineer"){
      const engineer = new Engineer(answers.id, "Ronald Grandyour", "ronald.grandyour@gmail.com", "rgrandy@github.com")
      profileList.push(engineer);
    }
      if(answers.role === "Intern"){
      const intern = new Intern(answers.id, "Veronica Spicer", "vspicer@gmail.com", "Temple University")
      profileList.push(intern);
    }
    addATeam();
  })
      .catch((err) => console.error(err));  
  };
  
  init();

 