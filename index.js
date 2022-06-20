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
            name: 'mOfficeNumber',
            message: 'What is the managers office number?'
        }
    ])
};

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
            name: 'eOfficeNumber',
            message: 'What is the engineers office number?'
        }
    ])
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
            name: 'iOfficeNumber',
            message: 'What is the interns office number?'
        }
    ])
};