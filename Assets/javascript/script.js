 //Create 2 variables 1st card and 2nd card
 //set their value to a random number from 2-11

 
 let hasBlackjack = false;
 let isAlive = true;

 let startButton = document.getElementById("start-button");
 startButton.addEventListener("click", startGame);
 startButton.addEventListener("click", disableStartButton);
 startButton.addEventListener("click", enableNewCardButton);
 startButton.addEventListener("click",cardThreeOrigDisp )
 startButton.addEventListener("click",cardFourOrigDisp )
 startButton.addEventListener("click",cardFiveOrigDisp )


 

 function cardThreeOrigDisp(){
   card3.setAttribute("src", "./Assets/images/Flat Playing Cards Set/Back Covers/Sun Flower.png")
   
 }

 function cardFourOrigDisp(){
   card4.setAttribute("src", "./Assets/images/Flat Playing Cards Set/Back Covers/Sun Flower.png")
   
 }

  function cardFiveOrigDisp(){
   card5.setAttribute("src", "./Assets/images/Flat Playing Cards Set/Back Covers/Sun Flower.png")
   
 }

 
 function disableStartButton(){
   document.getElementById("start-button").disabled = true
 }

 function enableNewCardButton(){
   document.getElementById("new-card").disabled = false
 }
 


 
 let newCardButton = document.querySelector("#new-card");
 newCardButton.addEventListener("click",dealNewCard);
 

 
 let message = document.getElementById("message");
 let displaySum = document.getElementById("sum-el")

 let cards = [];
 cards[0]= "Aheart";
 cards[1]= "2heart"
 cards[2]= "3heart"
 cards[3]= "4heart"
 cards[4]= "5heart"
 cards[5]= "6heart"
 cards[6]= "7heart"
 cards[7]= "8heart"
 cards[8]= "9heart"
 cards[9]= "10heart"
 cards[10]= "Jackheart"
 cards[11]= "Queenheart"
 cards[12]= "Kingheart"

 cards[13]= "Adiamond";
 cards[14]= "2diamond"
 cards[15]= "3diamond"
 cards[16]= "4diamond"
 cards[17]= "5diamond"
 cards[18]= "6diamond"
 cards[19]= "7diamond"
 cards[20]= "8diamond"
 cards[21]= "9diamond"
 cards[22]= "10diamond"
 cards[23]= "Jackdiamond"
 cards[24]= "Queendiamond"
 cards[25]= "Kingdiamond"

 cards[26]= "Aclub";
 cards[27]= "2club"
 cards[28]= "3club"
 cards[29]= "4club"
 cards[30]= "5club"
 cards[31]= "6club"
 cards[32]= "7club"
 cards[33]= "8club"
 cards[34]= "9club"
 cards[35]= "10club"
 cards[36]= "Jackclub"
 cards[37]= "Queenclub"
 cards[38]= "Kingclub"

 cards[39]= "Aspade";
 cards[40]= "2spade"
 cards[41]= "3spade"
 cards[42]= "4spade"
 cards[43]= "5spade"
 cards[44]= "6spade"
 cards[45]= "7spade"
 cards[46]= "8spade"
 cards[47]= "9spade"
 cards[48]= "10spade"
 cards[49]= "Jackspade"
 cards[50]= "Queenspade"
 cards[51]= "Kingspade"
 
 let card1 = document.getElementById("card1");
 let card2 = document.getElementById("card2");
 let card3 = document.getElementById("card3");
 let card4 = document.getElementById("card4");
 let card5 = document.getElementById("card5")
 let sum = 0;

 function startGame(){
   renderGame();
}


 
 function renderGame(){
    
    
    let fistCard

    switch(Math.floor(Math.random() * 52)){
    case 0:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/A.png");
       fistCard = 11;
        break;  
    case 1:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/2.png");
       fistCard = 2;
        break; 
    case 2:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/3.png");
       fistCard =3;
        break;
    case 3:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/4.png");
       fistCard =4;
        break;
    case 4:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/5.png");
       fistCard =5;
        break;
    case 5:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/6.png");
       fistCard =6;
        break;
    case 6:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/7.png");
       fistCard =7;
        break;
    case 7:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/8.png");
       fistCard =8;
        break;
    case 8:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/9.png");
       fistCard =9;
        break;
    case 9:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/10.png");
       fistCard =10;
        break;
    case 10:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/J.png");
       fistCard =10;
        break;
    case 11:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/Q.png");
       fistCard =10;
        break;
    case 12:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/K.png");
       fistCard =10;
        break;
    case 13:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/A.png");
       fistCard =11;
        break;
    case 14:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/2.png");
       fistCard =2;
        break;
     case 15:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/3.png");
       fistCard =3;
        break;
    case 16:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/4.png");
       fistCard =4;
        break;
    case 17:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/5.png");
       fistCard =5;
        break;
    case 18:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/6.png");
       fistCard =6;
        break;
     case 19:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/7.png");
       fistCard =7;
        break;
    case 20:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/8.png");
       fistCard =8;
        break;
    case 21:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/9.png");
       fistCard =9;
        break;
    case 22:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/10.png");
       fistCard =10;
        break;
    case 23:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/J.png");
       fistCard =10;
        break;
    case 24:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/Q.png");
       fistCard =10;
        break;
    case 25:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/K.png");
       fistCard =10;
        break;
    case 26:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/A.png");
       fistCard =11;
        break;
    case 27:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/2.png");
       fistCard =2;
        break;
    case 28:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/3.png");
       fistCard =3;
        break; 
    case 29:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/4.png");
       fistCard =4;
        break; 
    case 30:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/5.png");
       fistCard =5;
        break; 
    case 31:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/6.png");
       fistCard =6;
        break; 
    case 32:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/7.png");
       fistCard =7;
        break; 
    case 33:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/8.png");
       fistCard =8;
        break; 
    case 34:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/9.png");
       fistCard =9;
        break; 
    case 35:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/10.png");
       fistCard =10;
        break; 
     case 36:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/J.png");
       fistCard =10;
        break; 
    case 37:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/Q.png");
       fistCard =10;
        break; 
    case 38:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/K.png");
       fistCard =10;
        break; 
    case 39:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/A.png");
       fistCard =11;
        break; 
    case 40:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/2.png");
       fistCard =2;
        break; 
    case 41:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/3.png");
       fistCard =3;
        break; 
    case 42:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/4.png");
       fistCard =4;
        break; 
    case 43:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/5.png");
       fistCard =5;
        break; 
    case 44:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/6.png");
       fistCard =6;
        break; 
    case 45:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/7.png");
       fistCard =7;
        break; 
    case 46:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/8.png");
       fistCard =8;
        break; 
    case 47:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/9.png");
       fistCard =9;
        break; 
    case 48:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/10.png");
       fistCard =10;
        break; 
    case 49:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/J.png");
       fistCard =10;
        break; 
    case 50:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/Q.png");
       fistCard =10;
        break; 
    case 51:
       card1.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/K.png");
       fistCard =10;
        

        
           
        
        
    }

    let secondCard


       switch(Math.floor(Math.random() * 52)){
    case 0:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/A.png");
       secondCard =11;
        break;  
    case 1:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/2.png");
       secondCard =2;
        break; 
    case 2:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/3.png");
       secondCard =3;
        break;
    case 3:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/4.png");
       secondCard =4;
        break;
    case 4:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/5.png");
       secondCard =5;
        break;
    case 5:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/6.png");
       secondCard =6;
        break;
    case 6:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/7.png");
       secondCard =7;
        break;
    case 7:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/8.png");
       secondCard =8;
        break;
    case 8:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/9.png");
       secondCard =9;
        break;
    case 9:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/10.png");
       secondCard =10;
        break;
    case 10:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/J.png");
       secondCard =10;
        break;
    case 11:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/Q.png");
       secondCard =10;
        break;
    case 12:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/K.png");
       secondCard =10;
        break;
    case 13:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/A.png");
       secondCard =11;
        break;
    case 14:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/2.png");
       secondCard =2;
        break;
     case 15:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/3.png");
       secondCard =3;
        break;
    case 16:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/4.png");
       secondCard =4;
        break;
    case 17:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/5.png");
       secondCard =5;
        break;
    case 18:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/6.png");
       secondCard =6;
        break;
     case 19:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/7.png");
       secondCard =7;
        break;
    case 20:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/8.png");
       secondCard =8;
        break;
    case 21:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/9.png");
       secondCard =9;
        break;
    case 22:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/10.png");
       secondCard =10;
        break;
    case 23:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/J.png");
       secondCard =10;
        break;
    case 24:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/Q.png");
       secondCard =10;
        break;
    case 25:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/K.png");
       secondCard =10;
        break;
    case 26:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/A.png");
       secondCard =11;
        break;
    case 27:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/2.png");
       secondCard =2;
        break;
    case 28:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/3.png");
       secondCard =3;
        break; 
    case 29:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/4.png");
       secondCard =4;
        break; 
    case 30:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/5.png");
       secondCard =5;
        break; 
    case 31:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/6.png");
       secondCard =6;
        break; 
    case 32:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/7.png");
       secondCard =7;
        break; 
    case 33:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/8.png");
       secondCard =8;
        break; 
    case 34:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/9.png");
       secondCard =9;
        break; 
    case 35:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/10.png");
       secondCard =10;
        break; 
     case 36:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/J.png");
       secondCard =10;
        break; 
    case 37:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/Q.png");
       secondCard =10;
        break; 
    case 38:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/K.png");
       secondCard =10;
        break; 
    case 39:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/A.png");
       secondCard =11;
        break; 
    case 40:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/2.png");
       secondCard =2;
        break; 
    case 41:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/3.png");
       secondCard =3;
        break; 
    case 42:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/4.png");
       secondCard =4;
        break; 
    case 43:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/5.png");
       secondCard =5;
        break; 
    case 44:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/6.png");
       secondCard =6;
        break; 
    case 45:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/7.png");
       secondCard =7;
        break; 
    case 46:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/8.png");
       secondCard =8;
        break; 
    case 47:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/9.png");
       secondCard =9;
        break; 
    case 48:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/10.png");
       secondCard =10;
        break; 
    case 49:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/J.png");
       secondCard =10;
        break; 
    case 50:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/Q.png");
       secondCard =10;
        break; 
    case 51:
       card2.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/K.png");
       secondCard =10;
        

        
           
        
        
    }


    sum = fistCard + secondCard;
    displaySum.innerHTML = "Sum:"+ " "  + sum;

    if(sum <= 20){
     message.innerText = "Would you like to stand or recieve another card? 🤔";
     }else if(sum === 21){
     newCardButton.disabled = true;
     message.innerText = "Black-Jack! 🥳";
     hasBlackjack = true;
     }else {
     message.innerText = "Sorry You are out of the round 😭";
     isAlive = false;
     }
console.log(sum)
console.log(isAlive);


 }
 
 

  function dealNewCard(){
   console.log("dealing new card")
   
   let thirdCard

    switch(Math.floor(Math.random() * 52)){
    case 0:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/A.png");
       thirdCard = 11;
        break;  
    case 1:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/2.png");
       thirdCard = 2;
        break; 
    case 2:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/3.png");
       thirdCard =3;
        break;
    case 3:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/4.png");
       thirdCard =4;
        break;
    case 4:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/5.png");
       thirdCard =5;
        break;
    case 5:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/6.png");
       thirdCard =6;
        break;
    case 6:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/7.png");
       thirdCard =7;
        break;
    case 7:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/8.png");
       thirdCard =8;
        break;
    case 8:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/9.png");
       thirdCard =9;
        break;
    case 9:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/10.png");
       thirdCard =10;
        break;
    case 10:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/J.png");
       thirdCard =10;
        break;
    case 11:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/Q.png");
       thirdCard =10;
        break;
    case 12:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/K.png");
       thirdCard =10;
        break;
    case 13:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/A.png");
       thirdCard =11;
        break;
    case 14:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/2.png");
       thirdCard =2;
        break;
     case 15:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/3.png");
       thirdCard =3;
        break;
    case 16:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/4.png");
       thirdCard =4;
        break;
    case 17:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/5.png");
       thirdCard =5;
        break;
    case 18:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/6.png");
       thirdCard =6;
        break;
     case 19:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/7.png");
       thirdCard =7;
        break;
    case 20:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/8.png");
       thirdCard =8;
        break;
    case 21:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/9.png");
       thirdCard =9;
        break;
    case 22:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/10.png");
       thirdCard =10;
        break;
    case 23:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/J.png");
       thirdCard =10;
        break;
    case 24:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/Q.png");
       thirdCard =10;
        break;
    case 25:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/K.png");
       thirdCard =10;
        break;
    case 26:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/A.png");
       thirdCard =11;
        break;
    case 27:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/2.png");
       thirdCard =2;
        break;
    case 28:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/3.png");
       thirdCard =3;
        break; 
    case 29:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/4.png");
       thirdCard =4;
        break; 
    case 30:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/5.png");
       thirdCard =5;
        break; 
    case 31:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/6.png");
       thirdCard =6;
        break; 
    case 32:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/7.png");
       thirdCard =7;
        break; 
    case 33:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/8.png");
       thirdCard =8;
        break; 
    case 34:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/9.png");
       thirdCard =9;
        break; 
    case 35:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/10.png");
       thirdCard =10;
        break; 
     case 36:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/J.png");
       thirdCard =10;
        break; 
    case 37:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/Q.png");
       thirdCard =10;
        break; 
    case 38:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/K.png");
       thirdCard =10;
        break; 
    case 39:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/A.png");
       thirdCard =11;
        break; 
    case 40:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/2.png");
       thirdCard =2;
        break; 
    case 41:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/3.png");
       thirdCard =3;
        break; 
    case 42:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/4.png");
       thirdCard =4;
        break; 
    case 43:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/5.png");
       thirdCard =5;
        break; 
    case 44:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/6.png");
       thirdCard =6;
        break; 
    case 45:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/7.png");
       thirdCard =7;
        break; 
    case 46:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/8.png");
       thirdCard =8;
        break; 
    case 47:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/9.png");
       thirdCard =9;
        break; 
    case 48:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/10.png");
       thirdCard =10;
        break; 
    case 49:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/J.png");
       thirdCard =10;
        break; 
    case 50:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/Q.png");
       thirdCard =10;
        break; 
    case 51:
       card3.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/K.png");
       thirdCard =10;
        

        
           
        
        
    }
    sum +=  thirdCard;
    displaySum.innerHTML = "Sum:"+ " "  + sum;

    if(sum <= 20){
     newCardButton.removeEventListener("click",dealNewCard);
     newCardButton.addEventListener("click",dealNewCard2);
     message.innerText = "Would you like to stand or recieve another card? 🤔";

     }else if(sum === 21){
     newCardButton.removeEventListener("click",dealNewCard2);
     newCardButton.addEventListener("click",dealNewCard)
     message.innerText = "Black-Jack! 🥳";
     hasBlackjack = true;
     newCardButton.disabled = true;
     startButton.disabled = false;
     
     }else {
     newCardButton.removeEventListener("click",dealNewCard2);
     newCardButton.addEventListener("click",dealNewCard)
     newCardButton.disabled = true;
     startButton.disabled = false;
     message.innerText = "Sorry You are out of the round 😭";
     isAlive = false;
     }
console.log(sum)
console.log(isAlive);

 }

 function dealNewCard2(){
   console.log("dealing new card")
   
   let fourthCard

    switch(Math.floor(Math.random() * 52)){
    case 0:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/A.png");
       fourthCard = 11;
        break;  
    case 1:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/2.png");
       fourthCard = 2;
        break; 
    case 2:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/3.png");
       fourthCard =3;
        break;
    case 3:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/4.png");
       fourthCard =4;
        break;
    case 4:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/5.png");
       fourthCard =5;
        break;
    case 5:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/6.png");
       fourthCard =6;
        break;
    case 6:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/7.png");
       fourthCard =7;
        break;
    case 7:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/8.png");
       fourthCard =8;
        break;
    case 8:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/9.png");
       fourthCard =9;
        break;
    case 9:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/10.png");
       fourthCard =10;
        break;
    case 10:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/J.png");
       fourthCard =10;
        break;
    case 11:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/Q.png");
       fourthCard =10;
        break;
    case 12:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/K.png");
       fourthCard =10;
        break;
    case 13:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/A.png");
       fourthCard =11;
        break;
    case 14:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/2.png");
       fourthCard =2;
        break;
     case 15:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/3.png");
       fourthCard =3;
        break;
    case 16:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/4.png");
       fourthCard =4;
        break;
    case 17:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/5.png");
       fourthCard =5;
        break;
    case 18:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/6.png");
       fourthCard =6;
        break;
     case 19:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/7.png");
       fourthCard =7;
        break;
    case 20:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/8.png");
       fourthCard =8;
        break;
    case 21:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/9.png");
       fourthCard =9;
        break;
    case 22:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/10.png");
       fourthCard =10;
        break;
    case 23:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/J.png");
       fourthCard =10;
        break;
    case 24:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/Q.png");
       fourthCard =10;
        break;
    case 25:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/K.png");
       fourthCard =10;
        break;
    case 26:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/A.png");
       fourthCard =11;
        break;
    case 27:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/2.png");
       fourthCard =2;
        break;
    case 28:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/3.png");
       fourthCard =3;
        break; 
    case 29:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/4.png");
       fourthCard =4;
        break; 
    case 30:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/5.png");
       fourthCard =5;
        break; 
    case 31:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/6.png");
       fourthCard =6;
        break; 
    case 32:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/7.png");
       fourthCard =7;
        break; 
    case 33:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/8.png");
       fourthCard =8;
        break; 
    case 34:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/9.png");
       fourthCard =9;
        break; 
    case 35:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/10.png");
       fourthCard =10;
        break; 
     case 36:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/J.png");
       fourthCard =10;
        break; 
    case 37:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/Q.png");
       fourthCard =10;
        break; 
    case 38:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/K.png");
       fourthCard =10;
        break; 
    case 39:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/A.png");
       fourthCard =11;
        break; 
    case 40:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/2.png");
       fourthCard =2;
        break; 
    case 41:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/3.png");
       fourthCard =3;
        break; 
    case 42:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/4.png");
       fourthCard =4;
        break; 
    case 43:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/5.png");
       fourthCard =5;
        break; 
    case 44:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/6.png");
       fourthCard =6;
        break; 
    case 45:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/7.png");
       fourthCard =7;
        break; 
    case 46:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/8.png");
       fourthCard =8;
        break; 
    case 47:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/9.png");
       fourthCard =9;
        break; 
    case 48:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/10.png");
       fourthCard =10;
        break; 
    case 49:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/J.png");
       fourthCard =10;
        break; 
    case 50:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/Q.png");
       fourthCard =10;
        break; 
    case 51:
       card4.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/K.png");
       fourthCard =10;
        

        
           
        
        
    }
    sum +=  fourthCard;
    displaySum.innerHTML = "Sum:"+ " "  + sum;

    if(sum <= 20){
     newCardButton.removeEventListener("click",dealNewCard2);
     newCardButton.addEventListener("click",dealNewCard3)
     message.innerText = "Would you like to stand or recieve another card? 🤔";

     }else if(sum === 21){
     newCardButton.removeEventListener("click",dealNewCard2);
     newCardButton.addEventListener("click",dealNewCard)
     message.innerText = "Black-Jack! 🥳";
     hasBlackjack = true;
     newCardButton.disabled = true;
     startButton.disabled = false;
     
     }else {
     newCardButton.removeEventListener("click",dealNewCard2);
     newCardButton.addEventListener("click",dealNewCard)
     newCardButton.disabled = true;
     startButton.disabled = false;
     message.innerText = "Sorry You are out of the round 😭";
     isAlive = false;
     }
console.log(sum)
console.log(isAlive);

 }




 function dealNewCard3(){
   console.log("dealing new card")
   
   let fithCard

    switch(Math.floor(Math.random() * 52)){
    case 0:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/A.png");
       fithCard = 11;
        break;  
    case 1:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/2.png");
       fithCard = 2;
        break; 
    case 2:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/3.png");
       fithCard =3;
        break;
    case 3:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/4.png");
       fithCard =4;
        break;
    case 4:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/5.png");
       fithCard =5;
        break;
    case 5:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/6.png");
       fithCard =6;
        break;
    case 6:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/7.png");
       fithCard =7;
        break;
    case 7:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/8.png");
       fithCard =8;
        break;
    case 8:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/9.png");
       fithCard =9;
        break;
    case 9:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/10.png");
       fithCard =10;
        break;
    case 10:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/J.png");
       fithCard =10;
        break;
    case 11:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/Q.png");
       fithCard =10;
        break;
    case 12:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Hearts/K.png");
       fithCard =10;
        break;
    case 13:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/A.png");
       fithCard =11;
        break;
    case 14:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/2.png");
       fithCard =2;
        break;
     case 15:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/3.png");
       fithCard =3;
        break;
    case 16:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/4.png");
       fithCard =4;
        break;
    case 17:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/5.png");
       fithCard =5;
        break;
    case 18:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/6.png");
       fithCard =6;
        break;
     case 19:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/7.png");
       fithCard =7;
        break;
    case 20:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/8.png");
       fithCard =8;
        break;
    case 21:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/9.png");
       fithCard =9;
        break;
    case 22:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/10.png");
       fithCard =10;
        break;
    case 23:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/J.png");
       fithCard =10;
        break;
    case 24:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/Q.png");
       fithCard =10;
        break;
    case 25:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Spades/K.png");
       fithCard =10;
        break;
    case 26:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/A.png");
       fithCard =11;
        break;
    case 27:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/2.png");
       fithCard =2;
        break;
    case 28:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/3.png");
       fithCard =3;
        break; 
    case 29:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/4.png");
       fithCard =4;
        break; 
    case 30:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/5.png");
       fithCard =5;
        break; 
    case 31:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/6.png");
       fithCard =6;
        break; 
    case 32:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/7.png");
       fithCard =7;
        break; 
    case 33:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/8.png");
       fithCard =8;
        break; 
    case 34:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/9.png");
       fithCard =9;
        break; 
    case 35:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/10.png");
       fithCard =10;
        break; 
     case 36:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/J.png");
       fithCard =10;
        break; 
    case 37:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/Q.png");
       fithCard =10;
        break; 
    case 38:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Clubs/K.png");
       fithCard =10;
        break; 
    case 39:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/A.png");
       fithCard =11;
        break; 
    case 40:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/2.png");
       fithCard =2;
        break; 
    case 41:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/3.png");
       fithCard =3;
        break; 
    case 42:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/4.png");
       fithCard =4;
        break; 
    case 43:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/5.png");
       fithCard =5;
        break; 
    case 44:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/6.png");
       fithCard =6;
        break; 
    case 45:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/7.png");
       fithCard =7;
        break; 
    case 46:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/8.png");
       fithCard =8;
        break; 
    case 47:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/9.png");
       fithCard =9;
        break; 
    case 48:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/10.png");
       fithCard =10;
        break; 
    case 49:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/J.png");
       fithCard =10;
        break; 
    case 50:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/Q.png");
       fithCard =10;
        break; 
    case 51:
       card5.setAttribute("src","/Assets/images/Flat Playing Cards Set/Diamonds/K.png");
       fithCard =10;
        

        
           
        
        
    }
    sum +=  fithCard;
    displaySum.innerHTML = "Sum:"+ " "  + sum;

    if(sum <= 20){
     message.innerText = "Would you like to stand or recieve another card? 🤔";

     }else if(sum === 21){
     newCardButton.removeEventListener("click",dealNewCard3);
     newCardButton.addEventListener("click",dealNewCard)
     message.innerText = "Black-Jack! 🥳";
     hasBlackjack = true;
     newCardButton.disabled = true;
     startButton.disabled = false;
     
     }else {
     newCardButton.removeEventListener("click",dealNewCard3);
     newCardButton.addEventListener("click",dealNewCard)
     newCardButton.disabled = true;
     startButton.disabled = false;
     message.innerText = "Sorry You are out of the round 😭";
     isAlive = false;
     }
console.log(sum)
console.log(isAlive);

 }

 

 
 

 
 
 

 



 

