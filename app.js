import deck from "./deck.js"


const options = {
    values: ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"],
    suits: ["Hearts", "Diamonds", "Spades", "Clubs"]
}

const deck1 = new deck(options);


deck1.shuffle(); 

deck1.displayCards(); 
