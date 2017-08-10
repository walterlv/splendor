export interface Price {
    w: number;
    b: number;
    g: number;
    r: number;
    k: number;
}

export interface Deck {
    bonus: string;
    points: number;
    price: Price;
}

export interface Tile {
    name: string;
    points: number;
    price: Price;
}
