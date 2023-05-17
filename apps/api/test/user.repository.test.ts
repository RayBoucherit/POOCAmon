import { User } from '@prisma/client';
import {afterAll, beforeAll, describe, expect, expectTypeOf, test} from 'vitest'
import {UserRepository} from "../src/infrastructure/user.repository";

describe('User Repository - test', () => {
    const userRepository = new UserRepository()
    const name = 'Tutu';
    const password = 'password';
    let createdUser: User;

    beforeAll(async () => {
        createdUser = await userRepository.create({name, password});
    });

    afterAll(async () => {
        if (createdUser) {
            await userRepository.deleteById(createdUser.id);
        }
    });

    test('#create', async () => {

        expectTypeOf(createdUser.id).toBeNumber();
        expect(createdUser.name).toEqual(name);
        expect(createdUser.password).toEqual(password);
    }, 10000)
})