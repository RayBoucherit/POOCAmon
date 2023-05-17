import {IDeckRepository} from "../domain/interfaces";
import {Card} from "../domain/entities";
import {Deck} from "../domain/entities";
import {prisma} from "../../db";
import { Trainer } from "../domain/entities";


export class DeckRepository implements IDeckRepository {


  async newDeck(name:string,id:number):Promise<Deck>{
    const deck = this.create({ 
      name:name,
      idTrainer:id
    })

    return deck
  }
  
  async addCard2(deck: { id: number; idCard: number; }): Promise<Deck> {

    const Deck = await prisma.deck.update({
      where: { id: deck.id },
      data: {
        cards:  {
         connect:{id:deck.idCard}
        }
      },
      include: {
        cards: true,
      },
    }); 
 
    return Deck
  }

  async getDeckById(id: number): Promise<Deck> {
    const deck = await prisma.deck.findUniqueOrThrow({
      where:{id:id},
      include: {
        cards: true,
      },
    })
    console.log("getDeckByyID",deck)
    return deck;
  }
  async getAllDeckFromUSer(id:number):Promise<Deck[]>{
    const decks = await prisma.deck.findMany({
      where:{trainerId:id},
      include: {
        cards: true,
      },
    }) 
    return decks;
  }
    async deleteCard(deck: { id: number; index: number; }): Promise<Deck> {
      const record = await prisma.deck.findUniqueOrThrow({ where: { id:deck.id },include: {
        cards: true,
      }, });
      const updatedArray = [...record.cards];
      updatedArray.splice(deck.index, 1);
      const Deck = await prisma.deck.update({
        where: { id: deck.id },
        data: {
          cards: {
            set: updatedArray.map((card) => ({ id: card.id })),
          },
        },
        include: {
          cards: true,
        },
      }); 
      return Deck;
    }

    async addCard(deck: { id: number; card: Card; }): Promise<Deck> {
      console.log("ICI")  
      const Deck = await prisma.deck.update({
        where: { id: deck.id },
        data: {
          cards:  {
           connect:{id:deck.card.id}
          }
        },
        include: {
          cards: true,
        },
      }); 
      console.log("ICI2222222") 
      console.log("dans repo ici --> :",Deck.cards)     
      return Deck
    }

    async create(deck: {name : string,idTrainer : number}): Promise<Deck> {
        const newDeck = await prisma.deck.create({
            data: {
              cards:{},
              name: deck.name,
              trainer: {
                connect: {
                  id: deck.idTrainer
                }
              }
            },
            include: {
              cards: true,
            },
          });
          console.log("create --> :",newDeck.cards)
          return newDeck;
    }   

    async random():Promise<Deck>{
      let trainer : Trainer = await prisma.trainer.create({
        data: {
            name: "nicolas",
            gender: "M",
        },
    });
       
      const deck = this.create({ 
        name:"Deck supra fort",
        idTrainer:trainer.id
      })
      
      for(let i=0;i<10;i++ ){
        let rnd = Math.floor(Math.random() * 500)
        let newCard : Card = await prisma.card.findUniqueOrThrow({
          where:{
            id:rnd
          }
        })
        this.addCard({
          id:(await deck).id,
          card:newCard
        })
      }
      console.log("ICIIII7878787878==>", (await deck).cards)

      return deck
    }
}
