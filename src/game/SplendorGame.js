// import { shuffle } from 'shuffle-array';
import Model from '../data/model';
// import { randomNumber } from '../data/math';

const shuffle = require('shuffle-array');

export default class SplendorGame {
    constructor() {
        const model = JSON.parse(JSON.stringify(Model));
        this.decks = [
            shuffle(model.decks.deck0),
            shuffle(model.decks.deck1),
            shuffle(model.decks.deck2),
        ];
        this.artists = Model.decks.artists;
    }

    flop(deck, count = 1) {
        return this.decks[deck].splice(0, count);
    }
}
