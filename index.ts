#! /usr/bin/env node

// simple calculator

import inquirer from"inquirer";

const answer = await inquirer.prompt([
    {
        message:"Enter your first Number",
        type:"number",
        name:"number1"
    },
    {
        message:"Enter your second Number",
        type:"number",
        name:"number2"
    },
    {
        message:"Select one of the operator to perform operation",
        type:"list",
        name:"operator",
        choices:["Addition","Subtraction","Multiplication","Division"]
        
    },
])

if(answer.operator==="Addition"){
    console.log(answer.number1 + answer.number2);
} else if(answer.operator==="Subtraction"){
    console.log(answer.number1 - answer.number2);
}  else if(answer.operator==="Multiplication"){
    console.log(answer.number1 * answer.number2);
}  else if(answer.operator==="Division"){
    console.log(answer.number1 / answer.number2);
} else {
    console.log("Please select valid option");
}
console.log("THE END");
