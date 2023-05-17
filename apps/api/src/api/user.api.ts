import {FastifyInstance} from "fastify";
import { UserContainer } from "../domain/user/users.container";

export const registerUserRoutes = (server: FastifyInstance, container:UserContainer) => {
    server.route<{
        Body: { name: string, password: string },
    }>({
        method: 'POST',
        url: '/register',
        schema: {
            body: {
                type: 'object',
                properties: {
                    name: { type: 'string' },
                    password: { type: 'string' },
                },
                required: ['name', 'password']
            }
        },
        handler: async (request, reply) => {
            const user = await container.createUser.execute(request.body)
            reply.status(200).send(user);
        }
    });
}