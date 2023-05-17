import {afterEach, describe, expect, test, vi} from 'vitest';
import {CreateUser} from "../src/domain/user/create-user";
import {User} from '../src/domain/user/users';


describe('Create User Usecase - test', () => {
    const userRepositoryMock = {
        create: vi.fn(),
        findAll: vi.fn(),
        deleteById: vi.fn(),
    }

    const createUser = new CreateUser(userRepositoryMock)

    afterEach(() => {
        vi.restoreAllMocks()
    })

    test('should create ', async () => {
        // GIVEN
        const expectedUser: User = {
            id: 1,
            name: 'Toto',
            password: 'password',
        }
        userRepositoryMock.create.mockImplementation(() => expectedUser)

        // WHEN
        const user = await createUser.execute({name: expectedUser.name, password: expectedUser.password})

        // THEN
        expect(userRepositoryMock.create).toHaveBeenCalledOnce()
        expect(userRepositoryMock.create).toBeCalledWith({
            name: expectedUser.name,
            password: expectedUser.password
        })
        expect(expectedUser).toStrictEqual(user);
    })
})