import { describe, test, expect, vi } from 'vitest';
import { GetAllTrainersUsecase } from '../src/domain/get-all-trainers.usecase';
import { Trainer } from '../src/domain/entities';

describe('GetAllTrainersUsecase', () => {
  const trainerRepositoryMock = {
    create: vi.fn(),
    findAll: vi.fn(),
  };
  const usecase = new GetAllTrainersUsecase(trainerRepositoryMock);

  test('should return all trainers', async () => {
    // Given
    const expectedTrainers: Trainer[] = [
      { id: 1, name: 'Alice', gender: 'f' },
      { id: 2, name: 'Bob', gender: 'm' },
    ];
    trainerRepositoryMock.findAll.mockImplementation(() => expectedTrainers);

    // When
    const trainers = await usecase.execute();

    // Then
    expect(trainerRepositoryMock.findAll).toHaveBeenCalledOnce();
    expect(trainers).toEqual(expectedTrainers);
  });
});