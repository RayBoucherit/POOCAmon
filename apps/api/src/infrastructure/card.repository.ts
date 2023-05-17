import {ICardRepository} from "../domain/interfaces";
import {Card} from "../domain/card/cards";
import {prisma} from "../../db";


export class CardRepository implements ICardRepository {
    async create(Card: {name: string,img:string}): Promise<Card> {
        const card = await prisma.card.create({
            data: {
                name: Card.name,
                img: Card.img,
            },
        });

        return card;
    }

    async findAll(): Promise<Card[]> {
        const cards: Card[] = await prisma.card.findMany();

        return cards;
    }

    async deleteById(id: number): Promise<void> {
        await prisma.card.delete({
            where: { id },
        });
      }
}
