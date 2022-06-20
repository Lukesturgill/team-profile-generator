const inquirer = require('inquirer');
const template = require('.src/template');

const Manager = require('.lib/manager');
const Engineer = require('.lib/manager');
const Intern = require('.lib/manager');

var team = [];

const managerForm = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the managers name?'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is the managers employee ID number?'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the managers email?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the managers office number?'
        }
    ])
    .then(answers => {
        console.log(answers);
        manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
        team.push(manager);
        returnToMenu()
    })
        .catch(err => {
		console.log(err);
	});
}

const engineerForm = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the engineers name?'
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'What is the engineers employee ID number?'
        },
        {
            type: 'input',
            name: 'engineerEmail',
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
            name: 'internName',
            message: 'What is the interns name?'
        },
        {
            type: 'input',
            name: 'internId',
            message: 'What is the interns employee ID number?'
        },
        {
            type: 'input',
            name: 'internEmail',
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
        }
    });
};