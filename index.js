import inquirer from "inquirer";
//user id & pin
//account create
//list show => balance chek, amount deposit,amouont wthdraw
//confrm
//no = thank u msg
let id = "";
let pin = 0;
let Account_balance = 0;
let running = true;
//--------------------user id--------------------
let question1 = await inquirer.prompt({
    name: "id",
    type: "input",
    message: "Enter your name ?"
});
id = question1.id;
//--------------------pin--------------------
let question2 = await inquirer.prompt({
    name: "pin",
    type: "number",
    message: "Enter your 4 digit pin !"
});
if (question2.pin <= 9999 && question2.pin > 999) {
    pin = question2.pin;
}
else {
    console.log("You entered more than 4 digits");
}
console.log("🎉Welcome to bank application, your account is created🎉");
console.log(`your id is ${id}`);
console.log(`your ATM pin is ${pin}`);
//--------------------list show--------------------
do {
    let option = await inquirer.prompt({
        name: "list",
        type: "list",
        message: "Select any of one",
        choices: ["balance check", "Amount deposit", "Amount withdraw"]
    });
    //---------balance chek---------------
    if (option.list === "balance check") {
        console.log(`Your account balance is ${Account_balance} `);
    }
    else if (option.list === "Amount deposit") {
        let deposit = await inquirer.prompt({
            name: "Amount",
            type: "number",
            message: "Enter your deposit amount !"
        });
        if (deposit.Amount > 0) {
            Account_balance += deposit.Amount;
        }
        else {
            console.log("Invalid amount");
        }
    }
    else if (option.list === "Amount withdraw") {
        if (Account_balance > 0) {
            let withdraw = await inquirer.prompt({
                name: "Amount",
                type: "number",
                message: "Enter your withdraw amount !"
            });
            if (Account_balance > withdraw.Amount) {
                Account_balance -= withdraw.Amount;
                console.log(`your new balance is Rs: ${Account_balance}`);
            }
            else {
                console.log("Low balance");
            }
        }
        else {
            console.log(`your account balance is 0, please deposit some ammount`);
        }
    }
    //--------------------user confrmation--------------------
    let confrm = await inquirer.prompt({
        name: "ans",
        type: "confirm",
        message: "Do you want to continue",
        default: true
    });
    if (confrm.ans === false) {
        running = false;
    }
} while (running);
console.log("🎉Thank you for using ATM machine🎉");
