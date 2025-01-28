
const cards = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"]

const body = document.getElementsByTagName("body")


let totalP1 = 0;

const player1 = document.getElementsByClassName("player1")
let cardsPlayer1 = [];
const crupier = document.getElementsByClassName("crupier");
let cardsCrupier = [];

function loadCardsCrupier(){
        let card1 = Math.floor(Math.random() * 13)
        cardsCrupier.push(cards[card1]);
        let gen = document.createElement("div")
        gen.classList.add("cardsCr");
        gen.textContent = cards[card1]
        crupier[0].firstElementChild.insertAdjacentElement("afterbegin",gen);
}



function loadCardsPlayer(){
    for(let i = 0; i < 2; i++){
        let card1 = Math.floor(Math.random() * 13)
        cardsPlayer1.push(cards[card1]);
        let gen = document.createElement("div")
        gen.classList.add("cards");
        gen.textContent = cards[card1]
        player1[0].firstElementChild.insertAdjacentElement("afterbegin",gen);

    } 
    checkCards();
}

function more(){
    
    let card1 = Math.floor(Math.random() * 13)
    cardsPlayer1.push(cards[card1]);
    let gen = document.createElement("div")
    gen.classList.add("cards");
    gen.textContent = cards[card1]
    player1[0].firstElementChild.insertAdjacentElement("afterbegin",gen);
    checkCards();
    points();
}

function checkCards(){
    totalP1 = 0
    for(let i = 0; i < cardsPlayer1.length; i++){
        if(cardsPlayer1[i] == "Q" || cardsPlayer1[i] == "K" || cardsPlayer1[i] == "J"){
            totalP1 += 10;
        }else if(cardsPlayer1[i] == "A"){
            if((totalP1 + 11) <= 21){
                totalP1 += 11;
            }else{
                totalP1 += 1;
            }
        }else{
            totalP1 += cardsPlayer1[i]
        }
        
    }
    
}

function points(){
    let cartas = document.querySelectorAll(".cards");
    
    if(totalP1 > 21){
        cartas.forEach(element => {
            let img = document.createElement("img");
            img.src = "trasera1.png"
            
            element.textContent = "";
            element.append(img)
            
        });
        let loser = document.createElement("p")
        loser.textContent = "Te has pasado de 21" + " Total de tus cartas: " + totalP1;
        loser.classList.add("loser")
        player1[0].insertAdjacentElement("afterbegin",loser)
    }
}

body[0].addEventListener("load",loadCardsCrupier());
body[0].addEventListener("load",loadCardsPlayer());