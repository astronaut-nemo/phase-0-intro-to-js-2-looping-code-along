// Code your solutions in this file

// Write thank you cards
function writeCards(name, event){
     // Array for holding the messages
     const messages = [];

     // Loop for iterating
    for (let i = 0; i < name.length; i++) {
        let cardMessage = `Thank you, ${name[i]}, for the wonderful ${event} gift!`;
        console.log(cardMessage);

        // Adding to the array
        messages.push(cardMessage);
    }
    // Returning the array
    return messages;
}
writeCards(["Ada", "Brendan", "Ali"], "birthday");


// Count Down
function countDown(num){
    while(num >= 0){
        console.log(num);
        num--;
    }
}

countDown(10);


// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts){
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);  
//         debugger;
//     }

//     return gifts;
// }

// wrapGifts(gifts);

// for (let age = 30; age < 40; age++){
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
// }