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
    if(answers.profile === false){
      console.log(profileList);
      print();
    }
    else{
      init();
    }
  }).catch((err) => console.error(err));  
};

const init = () => {
  addAProfile().then((answers) => { 
    if(answers.role === "Manager"){      
      profileList.push(new Manager(answers.id, answers.name, answers.email, answers.officeNumber, answers.role));
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

  const print = () => {
    let employeeProfileData =
    profileList.map( answers => {
      if(answers.getRole() === "Manager"){
        return `
        <div class="card">
        <div class="card-body">
        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header name">${answers.name}</div>
        <div class="card-body text-primary">
        <h5 class="card-title text-white">Manager</h5>
        <ul class="list-group list-group-flush">
        <li class="list-group-item id">ID:${answers.id}</li>
        <li class="list-group-item email">Email: ${answers.email}</li>
        <li class="list-group-item role">Role: ${answers.officeNumber}</li>
        </ul>
        </div>
        </div>
        </div>
        </div>`
      }
      if(answers.getRole() === "Engineer"){
        return `
        <div class="card">
        <div class="card-body">
        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header name">${answers.name}</div>
        <div class="card-body text-primary">
        <h5 class="card-title text-white">Engineer</h5>
        <ul class="list-group list-group-flush">
        <li class="list-group-item id">ID:${answers.id}</li>
        <li class="list-group-item email">Email: ${answers.email}</li>
        <li class="list-group-item role">Role: ${answers.github}</li>
        </ul>
        </div>
        </div>
        </div>
        </div>
        `;
      }
      if(answers.getRole() === "Intern"){
        return `
        <div class="card">
        <div class="card-body">
        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header name">${answers.name}</div>
        <div class="card-body text-primary">
        <h5 class="card-title text-white">Intern</h5>
        <ul class="list-group list-group-flush">
        <li class="list-group-item id">ID:${answers.id}</li>
        <li class="list-group-item email">Email: ${answers.email}</li>
        <li class="list-group-item role">Role: ${answers.school}</li>
        </ul>
        </div>
        </div>
        </div>
        </div>
        `;
      }
    }).join("");
    const data = 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Document</title>
    </head>
    <body>
    <h1 class="fs-1">My Team</h1>
      <div class="card-group">
        ${employeeProfileData}
      </div>
    </body>
    </html>
    `
writeFile('index.html', data)
console.log(employeeProfileData);
console.log('Successfully wrote to index.html');

  }
 