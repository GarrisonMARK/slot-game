
const prompt = require("prompt-sync")();

const deposit = () => {

    while(true) {
    const depositAmount = prompt("Enter a deposit amount: ")
        const numberDepositAmount = parseFloat(depositAmount)

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0){
            console.log("invalid deposit amount, try again ")
        } else{
            return numberDepositAmount;
        }
    }
};


const getNumberOfLines = () => {
    while(true) {
        const Lines = prompt("Enter teh number of lines to bet on (1-3): ")
        const numberOfLines = parseFloat(Lines)
    
            if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
                console.log("invalid number of lines, try again ")
            } else{
                return numberOfLines;
            }
        }
};

const getBet = (balance) => {
    while(true) {
        const bet = prompt("Enter teh number of lines to bet on (1-3): ")
        const numberOfLines = parseFloat(bet)
    
            if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
                console.log("invalid number of lines, try again ")
            } else{
                return numberOfLines;
            }
        }
}


let balance = deposit();
const numberOfLines = getNumberOfLines();

