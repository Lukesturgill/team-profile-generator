const inquirer = require('inquirer');
const template = require('.src/template');

const Manager = require('.lib/manager');
const Engineer = require('.lib/manager');
const Intern = require('.lib/manager');
const Employee = require('.lib/manager');

var team = [];

const managerForm = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the managers name?'
        }
    ])
}

const engineerForm = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the engineers name?'
        }
    ])
}

const internForm = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the interns name?'
        }
    ])
}