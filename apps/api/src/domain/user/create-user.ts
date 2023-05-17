import { User} from "./users";
import { IUserRepository } from "../interfaces";

export class CreateUser {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    async execute(command: { name: string, password: string }): Promise<User> {
        // create a new user in db
        const newUser = await this.userRepository.create({
            name: command.name,
            password: command.password,
        });
        return newUser;
    }
}
