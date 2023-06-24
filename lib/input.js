const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
var validateCol = require("validate-color").default;


class Cli {
    constructor() {
        this.title = '';
        this.txtColour = '';
        this.shape = '';
        this.shapeColour = '';
    }
    run() {
        return this.promptTitle()
      .then(() => this.promptTextColour())
      .then(() => this.promptShape())
      .then(() => this.promptShapeColour())
      
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
            //checks if the inputted colour is a valid html keyword or hexa decimal
            if(validateCol(txtColour)) {
                this.txtColour = txtColour;
                return true;
            } else {
                throw new Error('Not a valid colour');
            }
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
            if(validateCol(shapeColour)){
                this.shapeColour = shapeColour;
                return true;
            } else {
                throw new Error('Not a valid colour');
            }
        });
      }
}

module.exports = Cli;