#! /usr/bin/env node
import inquirer from "inquirer";

console.log("\n\tWELCOME TO CODE WITH AMMAR - CLI NUMBER GUESSING GAME\n");

const randomNumber = Math.floor(Math.random() * 3 + 1);

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter Your Guess Number(Number Limit From 1 and 5):",
    },
]);

if (answer.userGuessedNumber === randomNumber){
    console.log("Congratulations !!! You Guess Correct Number.");
}
else {
    console.log("Sorry you guessing a wrong number");
}

