import { IUserRepository } from "../domain/interfaces";
import {User} from "../domain/user/users";
import {prisma} from "../../db";

export class UserRepository implements IUserRepository {
  async create(User: {name: string,password: string}): Promise<User> {
      const user = await prisma.user.create({
          data: {
              name: User.name,
              password: User.password,
          },
      });

      return user;
  }

  async findAll(): Promise<User[]> {
    const users: User[] = await prisma.user.findMany();

    return users;
  }

  async deleteById(id: number): Promise<void> {
    await prisma.user.delete({
        where: { id },
    });
  }
}