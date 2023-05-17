import {Card, Deck} from "./entities";
import {IDeckRepository} from "./interfaces"


export class CreateDeck{
    private deckRepository: IDeckRepository;

    constructor(deckRepository: IDeckRepository){
        this.deckRepository = deckRepository;
    }

    async random(): Promise<Deck> {
        
        const deck = await this.deckRepository.random();
        return deck;
    }
    async deleteCard(deck: { id: number; index: number; }): Promise<Deck> {
        const res = await this.deckRepository.deleteCard(
            deck
            );

        return res;
    }

    async addCard2(deck: { id: number; idCard: number; }){
        const res = await this.deckRepository.addCard2(
            deck
            );

        return res;
    }
    async addCard(deck: { id: number; card: Card; }){
        const res = await this.deckRepository.addCard(
            deck
            );

        return res;
    }

    async getDeck(id:number):Promise<Deck>{
        const deck = await this.deckRepository.getDeckById(id);
        return deck;
    }

    async getAllDeck(id:number):Promise<Deck[]>{
        const deck = await this.deckRepository.getAllDeckFromUSer(id);
        return deck;
    }

    async newDeck(n:{name:string;id:number}):Promise<Deck>{
       return  await this.deckRepository.newDeck(n.name,n.id)
    }

}