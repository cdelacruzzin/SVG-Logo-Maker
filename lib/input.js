const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');


class Cli {
    constructor() {
        this.title = '';
        this.txtColour = '';
        this.shape = '';
        this.shapeColour = '';
    }
    run() {
        return inquirer.prompt([
            {
                type: 'input',
                message: 'enter your 3 character logo title:',
                name: 'title'
            },
            {
                type: 'input',
                message: 'enter the text colour (hexadecimal or keyword):',
                name: 'txtColour'
            },
            {
                type: 'list',
                message: 'enter a shape you want:',
                choices: [`circle`, `triangle`, `square`],
                name: 'shape'
            },
            {
                type: 'input',
                message: 'enter the shape colour (hexadecimal or keyword):',
                name: 'shapeColour'
            },
        ])
    }
}
