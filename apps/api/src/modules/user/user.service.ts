import {prisma} from "../../../db";

export async function createUser(n: string, p: string) {
    const user = await prisma.user.create({
        data:{
            name: n,
            password:p,
        }
    });
    return user;
}