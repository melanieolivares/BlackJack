const prompt = require('prompt-sync')();
const colors = require('colors');

const cards = [
    'A♣', '2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣', 'K♣', 
    'A♦', '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦', 'K♦',
    'A♥', '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥', 'K♥',
    'A♠', '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠', 'K♠',    

]

const dealerIndex1 = Math.floor(Math.random() * 51);
const dealerCard1 = cards[dealerIndex1];
cards.splice(dealerIndex1, 1);
console.log(`Here is the dealer's card: ${dealerCard1.magenta.bold}`);
    
const dealerIndex2 = Math.floor(Math.random() * 50);
const dealerCard2 = cards[dealerIndex2];
cards.splice(dealerIndex2, 1);

let dealerNum = dealerCard1
let dealerNum2 = dealerCard2

if (dealerNum.charAt(0) === 'A' && dealerNum2.charAt(0) === 'A'){
    dealerNum = 11;
    dealerNum2 = 1;
} else{
    if (dealerNum.charAt(0) === 'J' || dealerNum.charAt(0) === 'Q' || dealerNum.charAt(0) === 'K'){
        dealerNum = 10;
    } else if (dealerNum.charAt(0) === 'A'){
        dealerNum = 11
    
    }
    
    if (dealerNum2.charAt(0) === 'J' || dealerNum2.charAt(0) === 'Q' || dealerNum2.charAt(0) === 'K'){
        dealerNum2 = 10;
    } else if(dealerNum2.charAt(0) === 'A'){
        dealerNum2 = 11;
    }
}

let dealerTotal = parseInt(dealerNum) + parseInt(dealerNum2)

const randomIndex = Math.floor(Math.random() * 49);
const randomCard = cards[randomIndex];
cards.splice(randomIndex, 1);
console.log('Here are your cards:')
console.log(randomCard.blue.bold);

const randomIndex2 = Math.floor(Math.random() * 48);
const randomCard2 = cards[randomIndex2];
cards.splice(randomIndex2, 1);
console.log(randomCard2.blue.bold);


let card1 = randomCard;
let card2 = randomCard2;

if (card1.charAt(0) === 'J' || card1.charAt(0) === 'Q' || card1.charAt(0) === 'K'){
    card1 = 10;
} else if (card1.charAt(0) === 'A'){
    const aceValue = prompt("Enter '1' for value of 1 or '11' for value of 11: ");
    if (aceValue === '1'){
        card1 = 1;
    } else if (aceValue === '11'){
        card1 = 11;
    } else {
        console.log('Invalid command. Try again!');
    }
}

if (card2.charAt(0) === 'J' || card2.charAt(0) === 'Q' || card2.charAt(0) === 'K'){
    card2 = 10;
} else if (card2.charAt(0) === 'A'){
    const aceValue = prompt("Enter '1' for value of 1 or '11' for value of 11: ");
    if (aceValue === '1'){
        card2 = 1;
    } else if (aceValue === '11'){
        card2 = 11;
    } else {
        console.log('Invalid command. Try again!');
    }

}

let total =  parseInt(card1) + parseInt(card2);


if (total === 21 && dealerTotal === 21){
    return console.log('TIED!'.white.bold);
} else if (total === 21 && dealerTotal !== 21) {
    return console.log('BLACKJACK!'.rainbow.bold);
} else if (dealerTotal === 21 && total !== 21){
    return console.log(`Dealer has BlackJack! Dealer's card: ${dealerCard1.magenta.bold} ${dealerCard2.magenta.bold} ${'You lost'.red.bold}!`);
    
}

console.log(`Here is your current total: ${total}`.underline);

let range = 47;

function hitCard(){
    let hitCardCounter = 0;
    hitCardCounter += 1;
    const randomIndex = Math.floor(Math.random() * range - parseInt(hitCardCounter));
    range = range - parseInt(hitCardCounter);
    let randomCard = cards[randomIndex];
    cards.splice(randomIndex, 1);
    console.log(`Here is your card: ${randomCard.blue.bold}`);
    if (randomCard.charAt(0) === 'J' || randomCard.charAt(0) === 'Q' || randomCard.charAt(0) === 'K'){
        randomCard = 10;
    } else if (randomCard.charAt(0) === 'A'){
        const aceValue = prompt("Enter '1' for value of 1 or '11' for value of 11: ");
        if (aceValue === '1'){
            randomCard = 1;
        } else if (aceValue === '11'){
            randomCard = 11;
        } else {
            console.log('Invalid command. Try again!');
        }
    }
    total += parseInt(randomCard)
    console.log(`Here is your current total: ${total}`)
}

function dealerHitCard(){
    let dealerHitCardCounter = 0;
    dealerHitCardCounter += 1;
    const randomIndex = Math.floor(Math.random() * range - parseInt(dealerHitCardCounter));
    range = range - parseInt(dealerHitCardCounter);
    console.log('----------------------------------'.cyan)
    let randomCard = cards[randomIndex];
    cards.splice(randomIndex, 1);
    console.log(`Dealer draws: ${randomCard.magenta.bold}`);
    if (randomCard.charAt(0) === 'A' && parseInt(dealerTotal) <= 10 ){
        randomCard = 11;
        
    } else{
        if (randomCard.charAt(0) === 'J' || randomCard.charAt(0) === 'Q' || randomCard.charAt(0) === 'K'){
            randomCard = 10;
        } else if (randomCard.charAt(0) === 'A'){
            randomCard = 1
        
        }
        
    }
    dealerTotal += parseInt(randomCard)

}

let userCommand = prompt("Enter 'h' to hit or 's' to stand: ".bold);

if (userCommand.toLowerCase() === 'h'){
    hitCard();
    if (total > 21){
        console.log('You bust! Dealer wins!'.red.bold);
        console.log(`Here were the dealer's cards: ${dealerCard1.magenta.bold} ${dealerCard2.magenta.bold}`);
    } else if (parseInt(total) === 21){
        console.log('BLACKJACK!'.rainbow.bold);
        console.log(`Here were the dealer's cards: ${dealerCard1.magenta.bold} ${dealerCard2.magenta.bold}`)
        
    } else if (total < 21){
        while (total <= 21){
            userCommand = prompt("Enter 'h' to hit or 's' to stand: ".bold);
            if (userCommand.toLowerCase() === 's'){
                console.log(`Here are the dealer's cards: ${dealerCard1.magenta.bold} ${dealerCard2.magenta.bold}`);
        
                if (parseInt(dealerTotal) < 17){
                    while (parseInt(dealerTotal) < 17){
                        dealerHitCard();
                        console.log(`Dealer's total: ${dealerTotal}`);
                        if (parseInt(dealerTotal) > 21){
                            return console.log('Dealer busts! You win!'.green.bold);
                        } else{
                            if (parseInt(dealerTotal)  >= 17){
                                if (total > dealerTotal){
                                    return console.log('YOU WIN!'.green.bold);
                                } else if (total === dealerTotal){
                                    return console.log('TIED!'.white.bold);
                                } else if (total < dealerTotal){
                                    return console.log('You lost!'.red.bold);
                                }
                            }
                        }
                        
                            
                    }
                } else {
                    console.log(`Dealer's total: ${dealerTotal}`)

                    if (parseInt(dealerTotal) > 21){
                        console.log('Dealer busts! You win!'.green.bold);
                    } else {
                        if (total > dealerTotal){
                            return console.log('YOU WIN!'.green.bold);
                        } else if (total === dealerTotal){
                            return console.log('TIED!'.white.bold);
                        } else if (total < dealerTotal){
                            returnconsole.log('You lost!'.red.bold);
                        }
                    }
                        
                }
                } else if (userCommand.toLowerCase() === 'h'){
                    hitCard();
                    if (total > 21){
                        console.log('You bust! Dealer wins!'.red.bold);
                        console.log(`Here were the dealer's cards: ${dealerCard1.magenta.bold} ${dealerCard2.magenta.bold}`);
                    }
                }
        }
    }
    
} else if (userCommand.toLowerCase() === 's'){
    console.log(`Here are the dealer's cards: ${dealerCard1.magenta.bold} ${dealerCard2.magenta.bold}`);
    
    if (parseInt(dealerTotal) < 17){
        while (parseInt(dealerTotal) < 17){
            dealerHitCard()
            console.log(`Dealer's total: ${dealerTotal}`)
            if (parseInt(dealerTotal) > 21){
                return console.log('Dealer busts! You win!'.green.bold);
            } else{
                if (parseInt(dealerTotal)  >= 17){
                    if (total > dealerTotal){
                        return console.log('YOU WIN!'.green.bold);
                    } else if (total === dealerTotal){
                        return console.log('TIED!'.white.bold);
                    } else if (total < dealerTotal){
                        return console.log('You lost!'.red.bold);
                    }
                }
            }
            
                
        }
    } else {
        console.log(`Dealer's total: ${dealerTotal}`)
        if (parseInt(dealerTotal) > 21){
            console.log('Dealer busts! You win!'.green.bold);
        } else {
            if (total > dealerTotal){
                return console.log('YOU WIN!'.green.bold);
            } else if (total === dealerTotal){
                return console.log('TIED!'.white.bold);
            } else if (total < dealerTotal){
                return console.log('You lost!'.red.bold);
            }
        }
            
    }
    
}

