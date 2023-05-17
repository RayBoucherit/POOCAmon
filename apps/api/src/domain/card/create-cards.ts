import {Card} from "./cards";
import {ICardRepository} from "../interfaces"
import jsonFile from "../res.json"


export class CreateCards{
    private cardRepository: ICardRepository;

    constructor(cardRepository: ICardRepository){
        this.cardRepository = cardRepository;
    }


    async execute(command: {name: string,img:string}): Promise<Card>{
        const newCard = await this.cardRepository.create({
            name:command.name,
            img:command.img,
        }) ;
        return newCard;
    }

    async fromJSon():Promise<boolean>{
        console.log(jsonFile)
        jsonFile.forEach((value) =>{
            this.cardRepository.create({
                name:value.name,
                img:value.img,
            }) ;
        })
        return false;
    }

    async getAll(): Promise<Card[]> {
        // return all trainers in db
        const trainers = await this.cardRepository.findAll();
        return trainers;
    }
}