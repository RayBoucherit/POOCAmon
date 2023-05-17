import { Card } from '@prisma/client';
import {afterAll, beforeAll, describe, expect, expectTypeOf, test} from 'vitest'
import {CardRepository} from "../src/infrastructure/card.repository";

describe('Card Repository - test', () => {
    const cardRepository = new CardRepository()
    const name = 'Snorlax';
    const img = 'snorlax.png';
    let createdCard: Card;

    beforeAll(async () => {
        createdCard = await cardRepository.create({name, img});
    });

    afterAll(async () => {
        if (createdCard) {
            await cardRepository.deleteById(createdCard.id);
        }
    });

    test('#create', async () => {

        expectTypeOf(createdCard.id).toBeNumber();
        expect(createdCard.name).toEqual(name);
        expect(createdCard.img).toEqual(img);
    })
})