const inquirer = require('inquirer');
const template = require('./src/template');
const writeFile = require('./src/writeFile')

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

var team = [];

const managerForm = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the managers name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the managers employee ID number?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the managers email?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the managers office number?'
        }
    ])
}

const engineerForm = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineers name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the engineers employee ID number?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the engineers email?'
        },
        {
            type: 'input',
            name: 'githubUser',
            message: 'What is the engineers GitHub username?'
        }
    ])
    .then(answers => {
        console.log(answers);
        engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.githubUser);
        team.push(engineer);
        returnToMenu()
    })
        .catch(err => {
		console.log(err);
	});
};

const internForm = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the interns name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the interns employee ID number?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the interns email?'
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What school does the intern attend?'
        }
    ])
    .then(answers => {
        console.log(answers);
        intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        team.push(intern);
        returnToMenu()
    })
        .catch(err => {
		console.log(err);
	});
};

const returnToMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'select',
            message: 'What would you like to do?',
            choices: ['Add new employee', 'Exit']
        }
    ])
    .then(selection => {
        if(selection.select === 'Add new employee'){
            addNewEmployee();
        } else {
            console.log('Youre all set!');
            writeFile(template(JSON.stringify(team)));
        }
    });
};

const addNewEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'employeeRole',
            message: 'Which role does the employee have?',
            choices: ['Engineer', 'Intern']
        }
    ])
    .then(answer => {
        console.log(answer.employeeRole);
        if(answer.employeeRole === 'Engineer') {
            engineerForm();
        }else if (answer.employeeRole === 'Intern'){
            internForm();
        }
    });
};

managerForm()
    .then(answers => {
         console.log(answers);
         manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
         team.push(manager);
    returnToMenu();
})
    .catch(err => {
        console.log(err);
});