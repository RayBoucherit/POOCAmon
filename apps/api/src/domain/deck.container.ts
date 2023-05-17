import { CreateDeck } from "./create-deck&user"
import { DeckRepository } from "../infrastructure/deck.repository"

export type DeckContainer = {
    createDeck: CreateDeck;
}

export const initDeckContainer = () : DeckContainer => {
    const deckRepository = new DeckRepository();
    const createDeck = new CreateDeck(deckRepository);
    return {
        createDeck
    }
}
