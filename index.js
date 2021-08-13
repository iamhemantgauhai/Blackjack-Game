let cards=[]
let sum =0
let hasBlackjack=false
let isAlive=false
let message=""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")
let player={
    name:"Hemant Gauhai",
    chips:145
}
let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+": $"+player.chips
function getRandomCard(){
    let randomNumber=Math.floor(Math.random()*13)+1
    if (randomNumber===1){
        return 11
    } else if(randomNumber>10){
        return 10
    } else {
        return randomNumber
    }
}
function startGame(){
    renderGame()
}
function renderGame(){
    isAlive=true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    let thirdCard = getRandomCard()
    cards=[firstCard,secondCard,thirdCard]
    sum = firstCard + secondCard + thirdCard
    cardsEl.textContent="CARDS: "
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i]+" "
    }
    sumEl.textContent="SUM: "+sum
    if (sum === 21) {
        message="You've got Blackjack!"
        hasBlackjack=true
    } else if (sum < 21){
        message="Do you want to draw a new card?"
    } else {
        message="You are out of the game!"
        isAlive=false
    } 
    messageEl.textContent=message
}
function newCard(){
    if(isAlive===true && hasBlackjack===false){
        let thirdCard=getRandomCard()
        cards.push(thirdCard)
        renderGame()
    }
}
