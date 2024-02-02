import Card from "./card.js"
import shuffle from "./node_modules/lodash-es/shuffle.js"

class deck {

    #cards = []; 
    constructor(options) {
        this.values = options.values; 
        this.suits = options.suits; 
        this.createFullDeck(); 
    }

    createFullDeck() {
        this.suits.forEach(suit => {
            this.values.forEach(value => {
                const newCard = new Card(value, suit); 
                this.#cards.push(newCard); 
            })
        });
    }

    displayCards() {
        this.#cards.forEach(card => {
            card.display(); 
        })
    }

    shuffle() {
        this.#cards = shuffle(this.#cards); 
    }
}

export default deck; 