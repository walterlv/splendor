import GameData, { LeveledCards } from '../data/data';
import { Card, Noble } from '../data/model';
import * as shuffle from 'shuffle-array';

export default class SplendorGame {
    cards: LeveledCards;
    nobles: Noble[];

    constructor() {
        const gameData = new GameData();
        this.cards = {
            level1: shuffle(gameData.cards.level1),
            level2: shuffle(gameData.cards.level2),
            level3: shuffle(gameData.cards.level3),
        };
        this.nobles = shuffle(gameData.nobles);
    }

    flopCards(level: number, count: number = 1): Card[] {
        switch (level) {
            case 0:
                return this.cards.level1.splice(0, count);
            case 1:
                return this.cards.level2.splice(0, count);
            case 2:
                return this.cards.level3.splice(0, count);
            default:
                return [];
        }
    }

    flopNobles(count: number = 1): Noble[] {
        return this.nobles.splice(0, count);
    }
}
