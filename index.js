#!/usr/bin/env node

'use strict';
const CURR_DIR = process.cwd();
const inquirer = require('inquirer');
const fs = require('fs');
const child_process = require('child_process');
const path = require('path');
const Spinner = require('cli-spinner').Spinner;

const CHOICES = fs.readdirSync(`${__dirname}/templates`);

const QUESTIONS = [
    {
        name: 'project-choice',
        type: 'list',
        message: 'What project template would you like to generate?',
        choices: CHOICES
    },
    {
        name: 'project-name',
        type: 'input',
        message: 'Project name:',
        validate: function (input) {
            if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
            else return 'Project name may only include letters, numbers, underscores and hashes.';
        }
    }
];


async function main() {
    console.log('::: WELCOME TO MEAN CLOUD CLI :::\n');
    const answers = await inquirer.prompt(QUESTIONS);
    const projectChoice = answers['project-choice'];
    const projectName = answers['project-name'];
    const templatePath = `${__dirname}/templates/${projectChoice}`;

    fs.mkdirSync(`${CURR_DIR}/${projectName}`);

    createDirectoryContents(templatePath, projectName, projectName);
    console.log(`:: Setting up ${projectName}.`);
    console.log(':: Installing Dependencies..');
    await npm_install(`${CURR_DIR}/${projectName}`);
    console.log(':: Project Setup Complete');
    console.log('\nWhat next?');
    console.log('Edit the .env file located at the root of the project.');
    console.log('...::: Thank you for using MEAN CLOUD CLI :::...');
}

function createDirectoryContents (templatePath, newProjectPath, projectName) {
    const filesToCreate = fs.readdirSync(templatePath);

    filesToCreate.forEach(file => {
        const origFilePath = `${templatePath}/${file}`;

        // get stats about the current file
        const stats = fs.statSync(origFilePath);

        if (stats.isFile()) {
            let contents = fs.readFileSync(origFilePath, 'utf8');
            // Rename
            if (file === '.npmignore') file = '.gitignore';
            if(file === 'package.json') {
                contents = contents.replace("{{PROJECT_NAME}}", projectName);
            }

            const writePath = `${CURR_DIR}/${newProjectPath}/${file}`;
            fs.writeFileSync(writePath, contents, 'utf8');
        } else if (stats.isDirectory()) {
            fs.mkdirSync(`${CURR_DIR}/${newProjectPath}/${file}`);

            // recursive call
            createDirectoryContents(`${templatePath}/${file}`, `${newProjectPath}/${file}`, projectName);
        }
    });
}

// Performs `npm install`
async function npm_install(where) {
    try {
        let stdout = child_process.execSync('npm install', { cwd: where, env: process.env, stdio: 'pipe' });
    } catch (e) {
        console.error("Error Installing Packages " + e.stderr ) ;
    }

}

main();
