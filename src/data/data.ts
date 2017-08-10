import { Deck, Tile } from './model';

export interface LeveledDecks {
    level1: Deck[];
    level2: Deck[];
    level3: Deck[];
}

export default class GameData {
    decks: LeveledDecks;
    tiles: Tile[];

    constructor() {
        var level1 = [
            {
                bonus: 'k',
                points: 0,
                price: {
                    w: 1,
                    b: 1,
                    g: 1,
                    r: 1,
                    k: 0,
                },
            },
            {
                bonus: 'g',
                points: 0,
                price: {
                    w: 1,
                    b: 1,
                    r: 1,
                    k: 2,
                    g: 0,
                },
            },
            {
                bonus: 'g',
                points: 0,
                price: {
                    r: 3,
                    w: 0,
                    b: 0,
                    g: 0,
                    k: 0,
                },
            },
            {
                bonus: 'g',
                points: 0,
                price: {
                    b: 1,
                    r: 2,
                    k: 2,
                    w: 0,
                    g: 0,
                },
            },
            {
                bonus: 'k',
                points: 0,
                price: {
                    g: 2,
                    r: 1,
                    w: 0,
                    b: 0,
                    k: 0,
                },
            },
            {
                bonus: 'k',
                points: 0,
                price: {
                    w: 2,
                    b: 2,
                    r: 1,
                    g: 0,
                    k: 0,
                },
            },
            {
                bonus: 'b',
                points: 0,
                price: {
                    w: 1,
                    g: 1,
                    r: 2,
                    k: 1,
                    b: 0,
                },
            },
            {
                bonus: 'r',
                points: 0,
                price: {
                    b: 2,
                    g: 1,
                    w: 0,
                    r: 0,
                    k: 0,
                },
            },
            {
                bonus: 'w',
                points: 0,
                price: {
                    b: 2,
                    k: 2,
                    w: 0,
                    g: 0,
                    r: 0,
                },
            },
            {
                bonus: 'w',
                points: 0,
                price: {
                    b: 1,
                    g: 2,
                    r: 1,
                    k: 1,
                    w: 0,
                },
            },
            {
                bonus: 'g',
                points: 1,
                price: {
                    k: 4,
                    w: 0,
                    b: 0,
                    g: 0,
                    r: 0,
                },
            },
            {
                bonus: 'r',
                points: 0,
                price: {
                    w: 3,
                    b: 0,
                    g: 0,
                    r: 0,
                    k: 0,
                },
            },
            {
                bonus: 'r',
                points: 0,
                price: {
                    w: 2,
                    b: 1,
                    g: 1,
                    k: 1,
                    r: 0,
                },
            },
            {
                bonus: 'g',
                points: 0,
                price: {
                    b: 2,
                    r: 2,
                    w: 0,
                    g: 0,
                    k: 0,
                },
            },
            {
                bonus: 'b',
                points: 0,
                price: {
                    g: 2,
                    k: 2,
                    w: 0,
                    b: 0,
                    r: 0,
                },
            },
            {
                bonus: 'b',
                points: 0,
                price: {
                    w: 1,
                    g: 2,
                    r: 2,
                    b: 0,
                    k: 0,
                },
            },
            {
                bonus: 'k',
                points: 0,
                price: {
                    w: 1,
                    b: 2,
                    g: 1,
                    r: 1,
                    k: 0,
                },
            },
            {
                bonus: 'k',
                points: 0,
                price: {
                    g: 1,
                    r: 3,
                    k: 1,
                    w: 0,
                    b: 0,
                },
            },
            {
                bonus: 'k',
                points: 1,
                price: {
                    b: 4,
                    w: 0,
                    g: 0,
                    r: 0,
                    k: 0,
                },
            },
            {
                bonus: 'g',
                points: 0,
                price: {
                    w: 1,
                    b: 3,
                    g: 1,
                    r: 0,
                    k: 0,
                },
            },
            {
                bonus: 'w',
                points: 1,
                price: {
                    g: 4,
                    w: 0,
                    b: 0,
                    r: 0,
                    k: 0,
                },
            },
            {
                bonus: 'w',
                points: 0,
                price: {
                    w: 3,
                    b: 1,
                    k: 1,
                    g: 0,
                    r: 0,
                },
            },
            {
                bonus: 'b',
                points: 0,
                price: {
                    w: 1,
                    g: 1,
                    r: 1,
                    k: 1,
                    b: 0,
                },
            },
            {
                bonus: 'b',
                points: 0,
                price: {
                    w: 1,
                    k: 2,
                    b: 0,
                    g: 0,
                    r: 0,
                },
            },
            {
                bonus: 'b',
                points: 0,
                price: {
                    k: 3,
                    w: 0,
                    b: 0,
                    g: 0,
                    r: 0,
                },
            },
            {
                bonus: 'r',
                points: 0,
                price: {
                    w: 2,
                    r: 2,
                    b: 0,
                    g: 0,
                    k: 0,
                },
            },
            {
                bonus: 'w',
                points: 0,
                price: {
                    b: 2,
                    g: 2,
                    k: 1,
                    w: 0,
                    r: 0,
                },
            },
            {
                bonus: 'g',
                points: 0,
                price: {
                    w: 2,
                    b: 1,
                    g: 0,
                    r: 0,
                    k: 0,
                },
            },
            {
                bonus: 'g',
                points: 0,
                price: {
                    w: 1,
                    b: 1,
                    r: 1,
                    k: 1,
                    g: 0,
                },
            },
            {
                bonus: 'k',
                points: 0,
                price: {
                    w: 2,
                    g: 2,
                    b: 0,
                    r: 0,
                    k: 0,
                },
            },
            {
                bonus: 'k',
                points: 0,
                price: {
                    g: 3,
                    w: 0,
                    b: 0,
                    r: 0,
                    k: 0,
                },
            },
            {
                bonus: 'w',
                points: 0,
                price: {
                    b: 1,
                    g: 1,
                    r: 1,
                    k: 1,
                    w: 0,
                },
            },
            {
                bonus: 'w',
                points: 0,
                price: {
                    r: 2,
                    k: 1,
                    w: 0,
                    b: 0,
                    g: 0,
                },
            },
            {
                bonus: 'r',
                points: 0,
                price: {
                    w: 1,
                    r: 1,
                    k: 3,
                    b: 0,
                    g: 0,
                },
            },
            {
                bonus: 'r',
                points: 0,
                price: {
                    w: 2,
                    g: 1,
                    k: 2,
                    b: 0,
                    r: 0,
                },
            },
            {
                bonus: 'r',
                points: 0,
                price: {
                    w: 1,
                    b: 1,
                    g: 1,
                    k: 1,
                    r: 0,
                },
            },
            {
                bonus: 'r',
                points: 1,
                price: {
                    w: 4,
                    b: 0,
                    g: 0,
                    r: 0,
                    k: 0,
                },
            },
            {
                bonus: 'w',
                points: 0,
                price: {
                    b: 3,
                    w: 0,
                    g: 0,
                    r: 0,
                    k: 0,
                },
            },
            {
                bonus: 'b',
                points: 0,
                price: {
                    b: 1,
                    g: 3,
                    r: 1,
                    w: 0,
                    k: 0,
                },
            },
            {
                bonus: 'b',
                points: 1,
                price: {
                    r: 4,
                    w: 0,
                    b: 0,
                    g: 0,
                    k: 0,
                },
            },
        ];
        var level2 = [
            {
                bonus: 'w',
                points: 1,
                price: {
                    w: 2,
                    b: 3,
                    r: 3,
                    g: 0,
                    k: 0,
                },
            },
            {
                bonus: 'g',
                points: 1,
                price: {
                    w: 2,
                    b: 3,
                    k: 2,
                    g: 0,
                    r: 0,
                },
            },
            {
                bonus: 'k',
                points: 2,
                price: {
                    g: 5,
                    r: 3,
                    w: 0,
                    b: 0,
                    k: 0,
                },
            },
            {
                bonus: 'r',
                points: 1,
                price: {
                    b: 3,
                    r: 2,
                    k: 3,
                    w: 0,
                    g: 0,
                },
            },
            {
                bonus: 'g',
                points: 2,
                price: {
                    w: 4,
                    b: 2,
                    k: 1,
                    g: 0,
                    r: 0,
                },
            },
            {
                bonus: 'b',
                points: 2,
                price: {
                    w: 5,
                    b: 3,
                    g: 0,
                    r: 0,
                    k: 0,
                },
            },
            {
                bonus: 'g',
                points: 2,
                price: {
                    b: 5,
                    g: 3,
                    w: 0,
                    r: 0,
                    k: 0,
                },
            },
            {
                bonus: 'k',
                points: 2,
                price: {
                    b: 1,
                    g: 4,
                    r: 2,
                    w: 0,
                    k: 0,
                },
            },
            {
                bonus: 'w',
                points: 1,
                price: {
                    g: 3,
                    r: 2,
                    k: 2,
                    w: 0,
                    b: 0,
                },
            },
            {
                bonus: 'g',
                points: 1,
                price: {
                    w: 3,
                    g: 2,
                    r: 3,
                    b: 0,
                    k: 0,
                },
            },
            {
                bonus: 'r',
                points: 2,
                price: {
                    k: 5,
                    w: 0,
                    b: 0,
                    g: 0,
                    r: 0,
                },
            },
            {
                bonus: 'b',
                points: 3,
                price: {
                    b: 6,
                    w: 0,
                    g: 0,
                    r: 0,
                    k: 0,
                },
            },
            {
                bonus: 'b',
                points: 2,
                price: {
                    w: 2,
                    r: 1,
                    k: 4,
                    b: 0,
                    g: 0,
                },
            },
            {
                bonus: 'k',
                points: 1,
                price: {
                    w: 3,
                    g: 3,
                    k: 2,
                    b: 0,
                    r: 0,
                },
            },
            {
                bonus: 'r',
                points: 2,
                price: {
                    w: 1,
                    b: 4,
                    g: 2,
                    r: 0,
                    k: 0,
                },
            },
            {
                bonus: 'w',
                points: 2,
                price: {
                    g: 1,
                    r: 4,
                    k: 2,
                    w: 0,
                    b: 0,
                },
            },
            {
                bonus: 'k',
                points: 2,
                price: {
                    w: 5,
                    b: 0,
                    g: 0,
                    r: 0,
                    k: 0,
                },
            },
            {
                bonus: 'k',
                points: 1,
                price: {
                    w: 3,
                    b: 2,
                    g: 2,
                    r: 0,
                    k: 0,
                },
            },
            {
                bonus: 'k',
                points: 3,
                price: {
                    k: 6,
                    w: 0,
                    b: 0,
                    g: 0,
                    r: 0,
                },
            },
            {
                bonus: 'r',
                points: 1,
                price: {
                    w: 2,
                    r: 2,
                    k: 3,
                    b: 0,
                    g: 0,
                },
            },
            {
                bonus: 'b',
                points: 1,
                price: {
                    b: 2,
                    g: 2,
                    r: 3,
                    w: 0,
                    k: 0,
                },
            },
            {
                bonus: 'r',
                points: 2,
                price: {
                    w: 3,
                    k: 5,
                    b: 0,
                    g: 0,
                    r: 0,
                },
            },
            {
                bonus: 'w',
                points: 2,
                price: {
                    r: 5,
                    k: 3,
                    w: 0,
                    b: 0,
                    g: 0,
                },
            },
            {
                bonus: 'b',
                points: 1,
                price: {
                    b: 2,
                    g: 3,
                    k: 3,
                    w: 0,
                    r: 0,
                },
            },
            {
                bonus: 'b',
                points: 2,
                price: {
                    b: 5,
                    w: 0,
                    g: 0,
                    r: 0,
                    k: 0,
                },
            },
            {
                bonus: 'g',
                points: 2,
                price: {
                    g: 5,
                    w: 0,
                    b: 0,
                    r: 0,
                    k: 0,
                },
            },
            {
                bonus: 'w',
                points: 3,
                price: {
                    w: 6,
                    b: 0,
                    g: 0,
                    r: 0,
                    k: 0,
                },
            },
            {
                bonus: 'r',
                points: 3,
                price: {
                    r: 6,
                    w: 0,
                    b: 0,
                    g: 0,
                    k: 0,
                },
            },
            {
                bonus: 'g',
                points: 3,
                price: {
                    g: 6,
                    w: 0,
                    b: 0,
                    r: 0,
                    k: 0,
                },
            },
            {
                bonus: 'w',
                points: 2,
                price: {
                    r: 5,
                    w: 0,
                    b: 0,
                    g: 0,
                    k: 0,
                },
            },
        ];
        var level3 = [
            {
                bonus: 'r',
                points: 3,
                price: {
                    w: 3,
                    b: 5,
                    g: 3,
                    k: 3,
                    r: 0,
                },
            },
            {
                bonus: 'k',
                points: 5,
                price: {
                    r: 7,
                    k: 3,
                    w: 0,
                    b: 0,
                    g: 0,
                },
            },
            {
                bonus: 'r',
                points: 4,
                price: {
                    g: 7,
                    w: 0,
                    b: 0,
                    r: 0,
                    k: 0,
                },
            },
            {
                bonus: 'r',
                points: 5,
                price: {
                    g: 7,
                    r: 3,
                    w: 0,
                    b: 0,
                    k: 0,
                },
            },
            {
                bonus: 'g',
                points: 4,
                price: {
                    b: 7,
                    w: 0,
                    g: 0,
                    r: 0,
                    k: 0,
                },
            },
            {
                bonus: 'g',
                points: 3,
                price: {
                    w: 5,
                    b: 3,
                    r: 3,
                    k: 3,
                    g: 0,
                },
            },
            {
                bonus: 'w',
                points: 3,
                price: {
                    b: 5,
                    g: 3,
                    r: 5,
                    k: 3,
                    w: 0,
                },
            },
            {
                bonus: 'b',
                points: 4,
                price: {
                    w: 6,
                    b: 3,
                    k: 3,
                    g: 0,
                    r: 0,
                },
            },
            {
                bonus: 'w',
                points: 5,
                price: {
                    w: 3,
                    k: 7,
                    b: 0,
                    g: 0,
                    r: 0,
                },
            },
            {
                bonus: 'k',
                points: 3,
                price: {
                    w: 3,
                    b: 3,
                    g: 5,
                    r: 3,
                    k: 0,
                },
            },
            {
                bonus: 'w',
                points: 4,
                price: {
                    w: 3,
                    r: 3,
                    k: 6,
                    b: 0,
                    g: 0,
                },
            },
            {
                bonus: 'g',
                points: 4,
                price: {
                    w: 3,
                    b: 6,
                    g: 3,
                    r: 0,
                    k: 0,
                },
            },
            {
                bonus: 'w',
                points: 4,
                price: {
                    k: 7,
                    w: 0,
                    b: 0,
                    g: 0,
                    r: 0,
                },
            },
            {
                bonus: 'r',
                points: 4,
                price: {
                    b: 3,
                    g: 6,
                    r: 3,
                    w: 0,
                    k: 0,
                },
            },
            {
                bonus: 'b',
                points: 5,
                price: {
                    w: 7,
                    b: 3,
                    g: 0,
                    r: 0,
                    k: 0,
                },
            },
            {
                bonus: 'b',
                points: 3,
                price: {
                    w: 3,
                    g: 3,
                    r: 3,
                    k: 5,
                    b: 0,
                },
            },
            {
                bonus: 'k',
                points: 4,
                price: {
                    g: 3,
                    r: 6,
                    k: 3,
                    w: 0,
                    b: 0,
                },
            },
            {
                bonus: 'b',
                points: 4,
                price: {
                    w: 7,
                    b: 0,
                    g: 0,
                    r: 0,
                    k: 0,
                },
            },
            {
                bonus: 'k',
                points: 4,
                price: {
                    r: 7,
                    w: 0,
                    b: 0,
                    g: 0,
                    k: 0,
                },
            },
            {
                bonus: 'g',
                points: 5,
                price: {
                    b: 7,
                    g: 3,
                    w: 0,
                    r: 0,
                    k: 0,
                },
            },
        ];
        var tiles = [
            {
                name: '红衣夫人',
                points: 3,
                price: {
                    r: 4,
                    g: 4,
                    w: 0,
                    b: 0,
                    k: 0,
                },
            },
            {
                name: '白胡子老头',
                points: 3,
                price: {
                    b: 4,
                    g: 4,
                    w: 0,
                    r: 0,
                    k: 0,
                },
            },
            {
                name: '短发勇士',
                points: 3,
                price: {
                    b: 4,
                    w: 4,
                    g: 0,
                    r: 0,
                    k: 0,
                },
            },
            {
                name: '胖乎乎的贵人',
                points: 3,
                price: {
                    k: 4,
                    r: 4,
                    w: 0,
                    b: 0,
                    g: 0,
                },
            },
            {
                name: '农妇',
                points: 3,
                price: {
                    g: 3,
                    b: 3,
                    w: 3,
                    r: 0,
                    k: 0,
                },
            },
            {
                name: '皇冠农妇',
                points: 3,
                price: {
                    k: 4,
                    w: 4,
                    b: 0,
                    g: 0,
                    r: 0,
                },
            },
            {
                name: '暗红衣夫人',
                points: 3,
                price: {
                    r: 4,
                    g: 4,
                    w: 0,
                    b: 0,
                    k: 0,
                },
            },
            {
                name: '红衣夫人',
                points: 3,
                price: {
                    k: 3,
                    b: 3,
                    w: 3,
                    g: 0,
                    r: 0,
                },
            },
            {
                name: '有钱的绅士',
                points: 3,
                price: {
                    g: 3,
                    b: 3,
                    r: 3,
                    w: 0,
                    k: 0,
                },
            },
            {
                name: '盔甲将军',
                points: 3,
                price: {
                    k: 3,
                    r: 3,
                    w: 3,
                    b: 0,
                    g: 0,
                },
            },
            {
                name: '天使',
                points: 3,
                price: {
                    k: 3,
                    r: 3,
                    g: 3,
                    w: 0,
                    b: 0,
                },
            },
        ];
        this.decks = {
            level1: level1,
            level2: level2,
            level3: level3,
        };
        this.tiles = tiles;
    }
}
