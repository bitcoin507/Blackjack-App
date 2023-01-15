 //Create 2 variables 1st card and 2nd card
 //set their value to a random number from 2-11

 
 let hasBlackjack = false;
 let isAlive = true;

 let startButton = document.getElementById("start-button");
 startButton.addEventListener("click", startGame);
 startButton.addEventListener("click", disableButton);

 let newCardButton = document.getElementById("new-card");

 
 function disableButton(){
   document.getElementById("start-button").disabled = true
 }
 


 
 let newCard = document.querySelector("#new-card");
 newCard.addEventListener("click",dealNewCard);
 

 
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
 let sum = 0;


 
 function startGame(){
    
    
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
     message.innerText = "Would you like to stand or recieve another card? 🤔";
     }else if(sum === 21){
     
     message.innerText = "Black-Jack! 🥳";
     hasBlackjack = true;
     
     }else {
     newCardButton.disabled = true;
     message.innerText = "Sorry You are out of the round 😭";
     isAlive = false;
     }
console.log(sum)
console.log(isAlive);

 }

 
 

 
 
 

 



 
