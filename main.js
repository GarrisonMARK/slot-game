
const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    A: 5,
    B: 5,
    C: 7,
    D: 19,
    // E: 10,
    GW: 3,
}



const SYMBOLS_VALUES = {
    A:5,
    B:4,
    C:3,
    D:2,
    // E:1,
    GW: 20000,
}


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

const getBet = (balance , Lines) => {
    while(true) {
        const bet = prompt("Enter the bet per line: ")
        const numberBet = parseFloat(bet)
    
            if (isNaN(numberBet) || numberBet <= 0 || numberBet >  balance / Lines ) {
                console.log("invalid bet try again ")
            } else{
                return numberBet;
            }
        }
}

const spin = () => {
    const symbols = []
    for ( const [symbol,count] of Object.entries(SYMBOLS_COUNT)){
        for (let i = 0; i < count; i++){
            symbols.push(symbol)
     }
    } 

const reels = [[],[],[]];
for (let i = 0 ; i < COLS; i++){
    const reelSymbols = [...symbols];
    for (let j = 0; j < ROWS; j++){
        const randomIndex = Math.floor(Math.random() * reelSymbols.length)
        const selectedSymbol = reelSymbols[randomIndex];
        reels[i].push(selectedSymbol);
        reelSymbols.splice(randomIndex,1)
        }
    }

    return reels;
};

const transpose = (reels) => {
    const rows = [];

    for (let i = 0; i < ROWS; i++){
        rows.push([]);
        for (let j = 0; j < COLS; j++){
            rows[i].push(reels[j][i])
        }
    }

    return rows;
};

const printRows = (rows) => {
    for (const row of rows){
        let rowString = ""
        for (const [i,symbol] of row.entries() ){
            rowString += symbol
            if (i != row.length -1){
                rowString += " | "
            }
        }
        console.log(rowString);
    }
}

const getWinnings = (rows, bet ,lines) =>{
    let winnings = 0 ;

    for (let row = 0; row < lines; row++){
        const symbols = rows[row];
        let allSame = true


        for(const symbol of symbols){
            if (symbol != symbols[0]){
                allSame = false;
                break;
            }
        }
        if (allSame){
            winnings += bet * SYMBOLS_VALUES[symbols[0]]
        }
    }
    return winnings
}

const game = () => {
    
    let balance = deposit();

    while (true){
    
    console.log("You have a balance of $" + balance);
    const numberOfLines = getNumberOfLines();
     const bet = getBet(balance,numberOfLines);
    balance -= bet * numberOfLines
    const reels = spin()
    const rows = transpose(reels)
    printRows(rows)
    const winnings = getWinnings(rows, bet, numberOfLines)
    balance += winnings;
    console.log("you won, $" + winnings);

    if ( balance <= 0 ){
        console.log("you ran out of money!");
        break
    }
    const playAgain = prompt("Do you want to play again ? (y/n) ");
    if (playAgain != "y") break;
    
    
    }
}

game()
