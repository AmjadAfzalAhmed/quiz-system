import inquirer from "inquirer";
import chalk from "chalk";

let quizAnswers: number[] = [];

async function startQuiz() {
  let answer = await inquirer.prompt([
    {
      name: "Quesiton1",
      message: chalk.green.bold(
        "Which command is used to transpile the Typescript file to Javascript?"
      ),
      type: "list",
      choices: ["tsc filename.ts", "tsc -js -filename.ts", "all of the above"],
    },
    {
      name: "Quesiton2",
      message: chalk.green.bold(
        "Which of the following are primitive types supported in Typescript?"
      ),
      type: "list",
      choices: ["number", "string", "boolean", "all of the above"],
    },
    {
      name: "Quesiton3",
      message: chalk.green.bold(
        "Which of the following is the valid union type variable?"
      ),
      type: "list",
      choices: [
        "let emp:[number,string]",
        "let emp:(string | number)",
        "let emp:string[]",
        "none of the above",
      ],
    },
    {
      name: "Quesiton4",
      message: chalk.green.bold(
        "The rest parameter in a function is used when _______."
      ),
      type: "list",
      choices: [
        "the type of parameters is not known",
        "the number of parameters is not known",
        "the function needs to excute asynchronously",
        "the function is called recursively",
      ],
    },
    {
      name: "Quesiton5",
      message: chalk.green.bold(
        "Which of the following are valid data modifiers in Typescript?"
      ),
      type: "list",
      choices: ["public", "private", "protected", "all of the above"],
    },
    {
      name: "Quesiton6",
      message: chalk.green.bold("Which keyword is used to declare a module?"),
      type: "list",
      choices: ["type", "export", "namespace", "declare"],
    },
    {
      name: "Quesiton7",
      message: chalk.green.bold("Typescript is a typed superset of __________"),
      type: "list",
      choices: ["Java", "C#", "Javascript", "ReactJS"],
    },
    {
      name: "Quesiton8",
      message: chalk.green.bold(
        "Which cofiguration file is required to compile the whole Typescript Project?"
      ),
      type: "list",
      choices: ["app.json", "tsconfig.json", "tsconfig.js", "web.config"],
    },
    {
      name: "Quesiton9",
      message: chalk.green.bold("Typescript supports enum?"),
      type: "list",
      choices: ["True", "False"],
    },
    {
      name: "Quesiton10",
      message: chalk.green.bold(
        "We can write server side and client side applications in Typescript!"
      ),
      type: "list",
      choices: ["True", "False"],
    },
    {
      name: "Quesiton11",
      message: chalk.green.bold("TypeScript supports all OOP principles?"),
      type: "list",
      choices: ["True", "False"],
    },
    {
      name: "Quesiton12",
      message: chalk.green.bold("In order to install Typescript we require?"),
      type: "list",
      choices: ["mpn", "npp", "npm", "nnm"],
    },
  ]);
  switch (answer.Quesiton1) {
    case "tsc filename.ts":
      quizAnswers.push(1);
      break;
    case "tsc -js -filename.ts":
      break;
    case "all of the above":
      break;
  }
  switch (answer.Quesiton2) {
    case "number":
      break;
    case "string":
      break;
    case "boolean":
      break;
    case "all of the above":
      quizAnswers.push(1);
      break;
  }
  switch (answer.Quesiton3) {
    case "let emp:[number,string]":
      break;
    case "let emp:(string | number)":
      quizAnswers.push(1);
      break;
    case "let emp:string[]":
      break;
    case "none of the above":
      break;
  }
  switch (answer.Quesiton4) {
    case "the type of parameters is not known":
      break;
    case "the number of parameters is not known":
      quizAnswers.push(1);
      break;
    case "the function needs to excute asynchronously":
      break;
    case "the function is called recursively":
      break;
  }
  switch (answer.Quesiton5) {
    case "public":
      break;
    case "private":
      break;
    case "protected":
      break;
    case "all of the above":
      quizAnswers.push(1);
  }
  switch (answer.Quesiton6) {
    case "type":
      break;
    case "export":
      quizAnswers.push(1);
    case "namespace":
      break;
    case "declare":
      break;
  }
  switch (answer.Quesiton7) {
    case "Java":
      break;
    case "C#":
      break;
    case "Javascript":
      quizAnswers.push(1);
      break;
    case "ReactJS":
      break;
  }
  switch (answer.Quesiton8) {
    case "app.json":
      break;
    case "tsconfig.json":
      quizAnswers.push(1);
      break;
    case "tsconfig.js":
      break;
    case "web.config":
      break;
  }
  switch (answer.Quesiton9) {
    case "True":
      quizAnswers.push(1);
      break;
    case "False":
      break;
  }
  switch (answer.Quesiton10) {
    case "True":
      quizAnswers.push(1);
      break;
    case "False":
      break;
  }
  switch (answer.Quesiton11) {
    case "True":
      quizAnswers.push(1);
      break;
    case "False":
      break;
  }
  switch (answer.Quesiton12) {
    case "npp":
      break;
    case "nmp":
      break;
    case "npm":
      quizAnswers.push(1);
      break;
    case "mnp":
      break;
  }

  let result = quizAnswers.reduce((value1: number, value2: number): number => {
    return value1 + value2;
  });

  if (result == 12) {
    const prepareResult = () =>{
      console.log("\n")
      console.log(chalk.redBright.inverse("\t\t\t Preparing final result, wait for a moment....."));
      setTimeout(()=>{
        console.log("\n")
        console.log(chalk.yellow.inverse(`\t Well Done! You have answered all the questions correctly and your score is ${result}.`));
        
      },3000)};
      prepareResult();      
    } else if (result >9 && result <= 11) {
      const prepareResult = () =>{
        console.log("\n")
        console.log(chalk.redBright.inverse("\t\t\t Preparing final result, wait for a moment....."));
        setTimeout(()=>{
          console.log("\n")
          console.log(chalk.yellow.inverse(`\t You have answered mostly right, but missed a little. Your final score is ${result} out of 12.`));
        },3000)};
    prepareResult();
    } else if(result <= 9) {
      const prepareResult = () =>{
        console.log("\n")
        console.log(chalk.redBright.inverse("\t\t\t Preparing final result, wait for a moment....."));
        setTimeout(()=>{
          console.log("\n")
          console.log(chalk.yellow.inverse(`\t You were good, but still need some improvement. Your final score is ${result} out of 12.`));
        },3000)};
    prepareResult();
    };

}
console.log("\n")
console.log(
  chalk.blueBright.inverse("\t\t\t *-*-*- Welcome to Quiz System -*-*-* \n"));
await startQuiz();
