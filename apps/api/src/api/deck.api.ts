import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { DeckContainer } from "../domain/deck.container";

export const registerDecksRoutes = (server: FastifyInstance, container: DeckContainer) => {
    server.route({
        method: 'GET',
        url: '/NewDeck',
        handler: async (_request, reply) => {
            const rep = await container.createDeck.random()
            reply.status(200).send(rep);
            console.log("uiuiuiu==>")
            console.log(rep)
        }

    })
    server.route({
        method: 'GET',
        url: '/NewDeck/:id',
        handler: async (request: FastifyRequest, reply: FastifyReply) => {
            const idDeck = Number((request.params as { id: string }).id)
            const rep = await container.createDeck.getDeck(idDeck)
            reply.status(200).send(rep);
            console.log("uiuui->>", rep.cards)
        }
    })

    server.route({
        method: 'GET',
        url: '/allDeck/:id',
        handler: async (request: FastifyRequest, reply: FastifyReply) => {
            const idUser = Number((request.params as { id: string }).id)
            const rep = await container.createDeck.getAllDeck(idUser)
            reply.status(200).send(rep);
            console.log("uiuui->>", rep)
        }
    })

    server.route<{
    }>({
        method: 'POST',
        url: '/addCardsOnDeck/:id/:idCard',
        handler: async (request, reply) => {
            const id = Number((request.params as { id: string }).id)
            const idCard = Number((request.params as { idCard: string }).idCard)
            console.log("On rentre bien ici mgl !!!!",id)
            const user = await container.createDeck.addCard2({id,idCard})
            console.log(user)
            reply.status(200).send("c'est bon");
        }
    });

    server.route<{
        Body: { id: number, index: number },
    }>({
        method: 'POST',
        url: '/DeleteCardsOnDeck',
        schema: {
            body: {
                type: 'object',
                properties: {
                    id: { type: 'number' },
                    index: { type: 'number' },
                },
                required: ['id', 'index']
            }
        },
        handler: async (request, reply) => {
            const user = await container.createDeck.deleteCard(request.body)
            reply.status(200).send(user);
        }
    });

    server.route<{
      
    }>({
        method: 'POST',
        url: '/newDeck/:name/:idCard',
        handler: async (request, reply) => {
            const id = Number((request.params as { idCard: string }).idCard)
            const name = String((request.params as { name: string }).name)
            const user = await container.createDeck.newDeck({name,id})
            reply.status(200).send(user);
        }
    });
}