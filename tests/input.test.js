
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