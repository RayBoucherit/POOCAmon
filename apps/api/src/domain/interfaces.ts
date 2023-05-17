import {Card} from "./card/cards";
import {Trainer} from "./entities";
import {Deck} from "./entities";
import {User} from "./user/users";



export interface ITrainerRepository {
    create(trainer: { name: string, gender: string }): Promise<Trainer>;

    findAll(): Promise<Trainer[]>
}

export interface ICardRepository {
    create(card: {name: string, img: string}): Promise<Card>;
    deleteById(id: number):Promise<void>;
    findAll(): Promise<Card[]>
}

export interface IDeckRepository {
    create(deck: {name : string}): Promise<Deck>;
    addCard(deck: {id:number,card : Card}):Promise<Deck>;
    addCard2(deck: {id:number,idCard : number}):Promise<Deck>;
    random():Promise<Deck>
    getDeckById(id:number):Promise<Deck>;
    deleteCard(deck: { id: number; index: number; }): Promise<Deck>;
    getAllDeckFromUSer(id:number):Promise<Deck[]>
    
}
export interface IUserRepository {
    create(user: {name: string, password: string}): Promise<User>;
    deleteById(id: number):Promise<void>;
    findAll(): Promise<User[]>
}
export interface IDeckRepository {
    create(deck: {name : string}): Promise<Deck>;
    addCard(deck: {id:number,card : Card}):Promise<Deck>;
    random():Promise<Deck>
    getDeckById(id:number):Promise<Deck>;
    getAllDeckFromUSer(id:number):Promise<Deck[]>
    newDeck(name:string,id:number):Promise<Deck>
    
}