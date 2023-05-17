import { CreateCards } from "./create-cards"
import { CardRepository } from "../../infrastructure/card.repository"

export type CardContainer = {
    createCards: CreateCards;
}

export const initCardsContainer = () : CardContainer => {
    const cardRepository = new CardRepository();
    const createCards = new CreateCards(cardRepository);
    return {
        createCards
    }
}
