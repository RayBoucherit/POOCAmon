import {FastifyInstance} from "fastify";
import { createUser } from "./user.service";

export const registerUserRoutes = (server: FastifyInstance) => {
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
            const {name, password} = request.body
            const user = await createUser(name, password)

            reply.status(200).send(user);
        }
    });
}