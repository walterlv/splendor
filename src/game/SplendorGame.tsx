import { GameData } from '../data/data';

const shuffle = require('shuffle-array');

export default class SplendorGame {
    constructor() {
        const model = new GameData().get();
        this.decks = [
            shuffle(model.decks.level1),
            shuffle(model.decks.level2),
            shuffle(model.decks.level3),
        ];
        this.tiles = Model.decks.artists;
    }

    flop(deck, count = 1) {
        return this.decks[deck].splice(0, count);
    }
}
