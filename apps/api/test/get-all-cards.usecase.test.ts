import { describe, test, expect, vi } from 'vitest';
import { CreateCards } from '../src/domain/card/create-cards';
import { Card } from '../src/domain/entities';

describe('GetAllCardsUsecase', () => {
  const cardsRepositoryMock = {
    create: vi.fn(),
    findAll: vi.fn(),
    deleteById: vi.fn(),
  };
  const usecase = new CreateCards(cardsRepositoryMock);

  test('should return all cards', async () => {
    // Given
    const expectedCards: Card[] = [
      { id: 1, name: 'Pikachu', img: 'pikachu.com' },
      { id: 2, name: 'Snorlax', img: 'snorlax.com' },
    ];
    cardsRepositoryMock.findAll.mockImplementation(() => expectedCards);

    // When
    const cards = await usecase.getAll();

    // Then
    expect(cardsRepositoryMock.findAll).toHaveBeenCalledOnce();
    expect(cards).toEqual(expectedCards);
  });
});