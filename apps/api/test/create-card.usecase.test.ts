import {afterEach, describe, expect, test, vi} from 'vitest';
import {CreateCards} from "../src/domain/card/create-cards";
import {Card} from '../src/domain/entities';


describe('Create Card Usecase - test', () => {
    const cardRepositoryMock = {
        create: vi.fn(),
        findAll: vi.fn(),
        deleteById: vi.fn(),
    }

    const createCard = new CreateCards(cardRepositoryMock)

    afterEach(() => {
        vi.restoreAllMocks()
    })

    test('should create ', async () => {
        // GIVEN
        const expectedCard: Card = {
            id: 1,
            name: 'Pikachu',
            img: 'fake-link.com',
        }
        cardRepositoryMock.create.mockImplementation(() => expectedCard)

        // WHEN
        const card = await createCard.execute({name: expectedCard.name, img: expectedCard.img})

        // THEN
        expect(cardRepositoryMock.create).toHaveBeenCalledOnce()
        expect(cardRepositoryMock.create).toBeCalledWith({
            name: expectedCard.name,
            img: expectedCard.img
        })
        expect(expectedCard).toStrictEqual(card);
    })
})