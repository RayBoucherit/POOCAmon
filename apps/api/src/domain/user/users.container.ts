import { CreateUser } from "./create-user"
import { UserRepository } from "../../infrastructure/user.repository"

export type UserContainer = {
    createUser: CreateUser;
}

export const initUserContainer = () : UserContainer => {
    const userRepository = new UserRepository();
    const createUser = new CreateUser(userRepository);
    return {
        createUser
    }
}
