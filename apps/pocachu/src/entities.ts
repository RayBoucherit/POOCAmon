export type Trainer = {
    id: number;
    name: string;
    gender: string;
};

export type Card = {
    id: number;
    name: string;
    img: string;
}

export type Deck = {
    id:number;
    cards : Card[];
    name : string;
}

export type User = {
    id: number;
    name: string;
    password: string;
}