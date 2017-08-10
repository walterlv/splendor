import GameData, { LeveledDecks } from '../data/data';
import { Deck, Tile } from '../data/model';
// var shuffle = require('shuffle-array');

export default class SplendorGame {
    decks: LeveledDecks;
    tiles: Tile[];

    constructor() {
        const gameData = new GameData();
        this.decks = {
            level1: gameData.decks.level1, // shuffle(gameData.decks.level1),
            level2: gameData.decks.level2, // shuffle(gameData.decks.level2),
            level3: gameData.decks.level3, // shuffle(gameData.decks.level3),
        };
        this.tiles = gameData.tiles;
    }

    flop(level: number, count: number = 1): Deck[] {
        switch (level) {
            case 1:
                return this.decks.level1.splice(0, count);
            case 2:
                return this.decks.level2.splice(0, count);
            case 3:
                return this.decks.level3.splice(0, count);
            default:
                return [];
        }
    }
}
