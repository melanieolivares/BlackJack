const header = document.querySelector('.header__container');
const dealerSection = document.querySelector('.dealer__container');
const playerSection = document.querySelector('.player__container');
const buttonSection = document.querySelector('.button__container');
const startButtonSection = document.querySelector('.startbutton__container');
const aceButtonSection = document.querySelector('.ace__container');

const startText = document.querySelector('.start');
const startCard = document.querySelector('#startCard1');
const startCard2 = document.querySelector('#startCard2');
const startCard3 = document.querySelector('#startCard3');
const dealerTotalText = document.querySelector('.dealer__total');
const playerTotalText = document.querySelector('.player__total');

const acevalue1 = document.querySelector('#value1');
const acevalue11 = document.querySelector('#value11');





function begin (){
    dealerSection.style.display = 'none';
    playerSection.style.display = 'none';
    buttonSection.style.display = 'none';
    startButtonSection.style.display = 'none';
    dealerTotalText.style.display = 'none';
    playerTotalText.style.display = 'none';
    aceButtonSection.style.display = 'none';

    header.classList.add('fadein');
    startText.classList.add('fadein');

}

begin()

document.querySelector('body').addEventListener('click', () => {
    startText.classList.remove('fadein')
    startText.classList.add('fadeout')
    
    dealerSection.classList.add('fadein')
    playerSection.classList.add('fadein')
    startButtonSection.classList.add('fadein')

    

    dealerSection.style.display = '';
    playerSection.style.display = '';
    startButtonSection.style.display = '';

})

startButtonSection.addEventListener('click', () => {
    startButtonSection.classList.remove('fadein')
    startButtonSection.classList.add('fadeout')
    buttonSection.classList.add('fadein')
    buttonSection.style.display = '';
    dealerTotalText.classList.add('fadein')
    playerTotalText.classList.add('fadein')
    dealerTotalText.style.display = '';
    playerTotalText.style.display = '';

    startCard.src = `cards/${dealerCard1}`
    startCard2.src = `cards/${randomCard}`
    startCard3.src = `cards/${randomCard2}`
    dealerTotalText.innerText = `DEALER'S TOTAL: ${parseInt(dealerNum)}`
    playerTotalText.innerText = `YOUR TOTAL: ${total}`


})

const cards = [
    'Aclubs.png', '2clubs.png','3clubs.png','4clubs.png','5clubs.png','6clubs.png','7clubs.png','8clubs.png','9clubs.png','10clubs.png','Jclubs.png','Qclubs.png', 'Kclubs.png', 
    'Adiamonds.png', '2diamonds.png','3diamonds.png','4diamonds.png','5diamonds.png','6diamonds.png','7diamonds.png','8diamonds.png','9diamonds.png','10diamonds.png','Jdiamonds.png','Qdiamonds.png', 'Kdiamonds.png',
    'Ahearts.png', '2hearts.png','3hearts.png','4hearts.png','5hearts.png','6hearts.png','7hearts.png','8hearts.png','9hearts.png','10hearts.png','Jhearts.png','Qhearts.png', 'Khearts.png',
    'Aspades.png', '2spades.png','3spades.png','4spades.png','5spades.png','6spades.png','7spades.png','8spades.png','9spades.png','10spades.png','Jspades.png','Qspades.png', 'Kspades.png',    

]


//dealer first card
const dealerIndex1 = Math.floor(Math.random() * 51);
const dealerCard1 = cards[dealerIndex1];
cards.splice(dealerIndex1, 1);

//dealer second card
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

const randomIndex2 = Math.floor(Math.random() * 48);
const randomCard2 = cards[randomIndex2];
cards.splice(randomIndex2, 1);

let card1 = randomCard;
let card2 = randomCard2;

    


if (card1.charAt(0) === 'J' || card1.charAt(0) === 'Q' || card1.charAt(0) === 'K'){
     card1 = 10;
} else if (card1.charAt(0) === 'A'){
    startButtonSection.addEventListener('click', ()=>{
    aceButtonSection.classList.add = 'fadein'
    aceButtonSection.style.display = '';
    playerTotalText.innerText = `YOUR TOTAL: ${parseInt(card2) + 1} or ${parseInt(card2) + 11}`
        
    })
    acevalue1.addEventListener('click', () => {
        card1 = 1;
        aceButtonSection.classList.add = 'fadeout'
        aceButtonSection.style.display = 'none';
        playerTotalText.innerText = `YOUR TOTAL: ${parseInt(card1) + parseInt(card2)}`
    
    })
    
    acevalue11.addEventListener('click', () => {
        card1 = 11;
        aceButtonSection.classList.add = 'fadeout'
        aceButtonSection.style.display = 'none';
        playerTotalText.innerText = `YOUR TOTAL: ${parseInt(card1) + parseInt(card2)}`
    })


}





    

if (card2.charAt(0) === 'J' || card2.charAt(0) === 'Q' || card2.charAt(0) === 'K'){
     card2 = 10;
} else if (card2.charAt(0) === 'A'){
    startButtonSection.addEventListener('click', ()=>{
        aceButtonSection.classList.add = 'fadein'
        aceButtonSection.style.display = '';
        playerTotalText.innerText = `YOUR TOTAL: ${parseInt(card1) + 1} or ${parseInt(card1) + 11}`

    })
    acevalue1.addEventListener('click', () => {
         card2 = 1;
        aceButtonSection.classList.add = 'fadeout'
        aceButtonSection.style.display = 'none';
        playerTotalText.innerText = `YOUR TOTAL: ${parseInt(card1) + parseInt(card2)}`
    
    })
    
    acevalue11.addEventListener('click', () => {
         card2 = 11;
        aceButtonSection.classList.add = 'fadeout'
        aceButtonSection.style.display = 'none';
        playerTotalText.innerText = `YOUR TOTAL: ${parseInt(card1) + parseInt(card2)}`
    })
    
        
    
}

    


let total =  parseInt(card1) + parseInt(card2);


// console.log( total, parseInt(starterCard1()), parseInt(starterCard2()))

// if (total === 21 && dealerTotal === 21){

// } else if (total === 21 && dealerTotal !== 21) {

// } else if (dealerTotal === 21 && total !== 21){
    
// }


