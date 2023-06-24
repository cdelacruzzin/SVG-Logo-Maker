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

    }
    promptTitle() {
        return inquirer.prompt([
          {
            type: 'input',
            message: 'Enter your 3 character logo title:',
            name: 'title',
          },
        ]).then(({ title }) => {

            if(!title) {
                throw new Error('Title is undefined');
            }
            else if(title.length > 3) {
                throw new Error ('Title is more than 3 characters');
            } else {
                this.title = title;
            }
        });
      }
    
      promptTextColour() {
        return inquirer.prompt([
          {
            type: 'input',
            message: 'Enter the text color (hexadecimal or keyword):',
            name: 'txtColour',
          },
        ]).then(({ txtColour }) => {
          this.txtColour = txtColour;
        });
      }
    
      promptShape() {
        return inquirer.prompt([
          {
            type: 'list',
            message: 'Enter a shape you want:',
            choices: ['circle', 'triangle', 'square'],
            name: 'shape',
          },
        ]).then(({ shape }) => {
          this.shape = shape;
        });
      }
    
      promptShapeColour() {
        return inquirer.prompt([
          {
            type: 'input',
            message: 'Enter the shape color (hexadecimal or keyword):',
            name: 'shapeColour',
          },
        ]).then(({ shapeColour }) => {
          this.shapeColour = shapeColour;
        });
      }
}

module.exports = Cli;