
const Cli = require('../lib/input');
const inquirer = require('inquirer');

//test case fo the title
describe('prompt title', () => {
    //since the promptTitle() is an asynchronous fucntion, we have to use async and await
    it('should throw an error if title is more than 3 chars', async () => {

        const title = new Cli();
        const input = 'reds';

        //This allows you to control the behavior of the prompt and provide mock responses.
        inquirer.prompt = jest.fn();

        //mockResolvedValue() is used for asynchronous prompts
        inquirer.prompt.mockResolvedValue({ title: input });
        await expect(title.promptTitle()).rejects.toThrow('Title is more than 3 characters');
    });

    it('should throw an error if title is more than 3 chars', async () => {

        const title = new Cli();
        const input = '';

        //This allows you to control the behavior of the prompt and provide mock responses.
        inquirer.prompt = jest.fn();

        //mockResolvedValue() is used for asynchronous prompts
        inquirer.prompt.mockResolvedValue({ title: input });
        await expect(title.promptTitle()).rejects.toThrow('Title is undefined');
    });
});

describe('promptTextColour', () => {
    it('should throw an error if keyword or hexadecimal is not valid', async () => {
        const colClass = new Cli();
        const input = 'ewsasd';

        inquirer.prompt = jest.fn();
        inquirer.prompt.mockResolvedValue({txtColour: input});
        await expect(colClass.promptTextColour()).rejects.toThrow('Not a valid colour');
    });

    it('should pass if keyword or hexadecimal is valid', async () => {
        const colClass = new Cli();
        const input = 'red';
    
        inquirer.prompt = jest.fn();
        inquirer.prompt.mockResolvedValue({txtColour: input});
    
        await expect(colClass.promptTextColour()).resolves.toEqual(true);
    });
});


describe('promptShapeColour', () => {
    it('should throw an error if colour is not a valid keyword or hexadecimal', async () => {
        const input = 'asdsa';
        const colClass = new Cli();

        inquirer.prompt=jest.fn();
        inquirer.prompt.mockResolvedValue({shapeColour: input});
        await expect(colClass.promptShapeColour()).rejects.toThrow('Not a valid colour');
    });

    it('should pass if colour is a valid keyword or hexadecimal', async () => {
        const input = 'blue';
        const colClass = new Cli();

        inquirer.prompt=jest.fn();
        inquirer.prompt.mockResolvedValue({shapeColour: input});
        await expect(colClass.promptShapeColour()).resolves.toEqual(true);
    });

});