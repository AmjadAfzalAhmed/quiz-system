import inquirer from "inquirer";
import chalk from "chalk";
let quizAnswers = [];
// const result = Math.random();
//   let playerWin = false;
// //   if (outcome > 0.5) {
//     playerWin = true;
//   }
async function startQuiz() {
    let answer = await inquirer.prompt([
        {
            name: "Quesiton1",
            message: chalk.green.bold("Which command is used to transpile the Typescript file to Javascript?"),
            type: "list",
            choices: ["npm filename.ts", "tsc -js -filename.ts", "tsc fileName.ts", "all of the above"]
        },
        {
            name: "Quesiton2",
            message: chalk.green.bold("Which of the following are primitive types supported in Typescript?"),
            type: "list",
            choices: ["number", "string", "boolean", "all of the above"]
        },
        {
            name: "Quesiton3",
            message: chalk.green.bold("Which of the following is the valid union type variable?"),
            type: "list",
            choices: ["let emp:[number,string]", "let emp:(string | number", "lett emp:string[]", "none of the above"]
        },
        {
            name: "Quesiton4",
            message: chalk.green.bold("The rest parameter in a function is used when _______."),
            type: "list",
            choices: ["the type of parameters is not known", "the number of parameters is not known", "the function needs to excute asynchronously", "the function is called recursively"]
        },
        {
            name: "Quesiton5",
            message: chalk.green.bold("Which of the following are valid data modifiers in Typescript?"),
            type: "list",
            choices: ["public", "private", "protected", "all of the above"]
        },
        {
            name: "Quesiton6",
            message: chalk.green.bold("Which keyword is used to declare a module?"),
            type: "list",
            choices: ["type", "export", "namespace", 'declare']
        },
        {
            name: "Quesiton7",
            message: chalk.green.bold("Typescript is a typed superset of __________"),
            type: "list",
            choices: ["Java", "C#", "Javascript", "ReactJS"]
        },
        {
            name: "Quesiton8",
            message: chalk.green.bold("Which cofiguration file is required to compile the whole Typescript Project?"),
            type: "list",
            choices: ["app.json", "tsconfig.json", "tsconfig.js", "web.config"]
        },
        {
            name: "Quesiton9",
            message: chalk.green.bold("Typescript supports enum?"),
            type: "list",
            choices: ["True", "False"]
        },
        {
            name: "Quesiton10",
            message: chalk.green.bold("We can write server side and client side applications in Typescript!"),
            type: "list",
            choices: ["True", "False"]
        },
        {
            name: "Quesiton11",
            message: chalk.green.bold("TypeScript supports all OOP principles?"),
            type: "list",
            choices: ["True", "False"]
        },
        {
            name: "Quesiton12",
            message: chalk.green.bold("In order to install Typescript we require?"),
            type: "list",
            choices: ["mpn", "npp", "npm", "nnm"]
        },
    ]);
}
await startQuiz();
