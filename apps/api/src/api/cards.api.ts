import {CardContainer} from "../domain/card/cards.container";
import {FastifyInstance} from "fastify";

export const registerCardsRoutes = (server : FastifyInstance, container:CardContainer ) => {
    server.route({
        method: 'GET',
        url:'/cards',
        handler: async(_request,reply)=>{
            const cards = await container.createCards.getAll();
            reply.status(200).send(cards);
           
        }
    });
    server.route({
        method:'GET',
        url:'/AddAllCards',
        handler:async (_request,reply) => {
            const rep = await container.createCards.fromJSon();
                reply.status(200).send(rep);
                console.log("fin");
            
        }

    })

    
}