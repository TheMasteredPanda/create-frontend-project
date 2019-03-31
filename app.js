#!/usr/bin/env node
const commander = require('commander');
const git = require('nodegit');
const fs = require('fs');
var program = require('commander');
 
program
    .usage('[options] <name>')
    .description('Used create a frontend web project using the structured templates found at github.com/TheMasteredPanda.')
    .version('0.1.0')
    .arguments('<name>').action(function (name) {
        projectName = name;
    })
    .parse(process.argv);

projectName = projectName.replace('-', ' ');
fs.mkdirSync(projectName);
git.Clone('https://github.com/TheMasteredPanda/standard-frontend-project-structure.git', projectName);
