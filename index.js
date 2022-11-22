const inquirer = require('inquirer');
const Employee = require('./employee');

const promptUser = () => {
    return inquirer.prompt([

    ]);
};

const init = () => {
    promptUser()
      //.then((answers) => writeFile('generateMarkdown.md', generateMarkdown(answers)))
      .then(() => console.log('Successfully wrote to html file'))
      .catch((err) => console.error(err));
  };
  
  init();