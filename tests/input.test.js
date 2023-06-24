// condition ? expression1 : expression2;

// var age = 20;
// var message = (age >= 18) ? "You are an adult" : "You are a minor";
// console.log(message);

const Cli = require('../lib/input');
const inquirer = require('inquirer');

describe('prompt title', () => {
    it('should throw an error if title is more than 3 chars', async () => {

        const title = new Cli();
        const input = 'reds';

        //This allows you to control the behavior of the prompt and provide mock responses.
        inquirer.prompt = jest.fn();

        //mockResolvedValue() is used for asynchronous prompts
        inquirer.prompt.mockResolvedValue({ title: input });
        await expect(title.promptTitle()).rejects.toThrow('Title is more than 3 characters');
    });
});