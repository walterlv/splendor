export interface Price {
    w: number;
    b: number;
    g: number;
    r: number;
    k: number;
}

export interface Card {
    bonus: string;
    points: number;
    price: Price;
}

export interface Noble {
    name: string;
    points: number;
    price: Price;
}
