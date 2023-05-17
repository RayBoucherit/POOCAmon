import fastify, {FastifyInstance} from "fastify";
import {registerTrainerRoutes} from "./api/trainer.api";
import {initTrainerContainer} from "./domain/trainer.container";
import {registerCardsRoutes} from "./api/cards.api";

import {registerDecksRoutes} from "./api/deck.api";
import {initDeckContainer} from "./domain/deck.container";
import {initCardsContainer} from "./domain/card/cards.container";
import {registerUserRoutes} from "./api/user.api";
import { initUserContainer } from "./domain/user/users.container";
import cors from "@fastify/cors";

const server: FastifyInstance = fastify({
    logger: {
        transport: {
            target: 'pino-pretty',
            options: {
                translateTime: 'HH:MM:ss Z',
            },
        },
    }
});

// Run the server!
const start = async () => {
    try {
        server.register(cors, {});
        const trainerContainer = initTrainerContainer()
        registerTrainerRoutes(server, trainerContainer);
        const cardsContainer = initCardsContainer()
        registerCardsRoutes(server, cardsContainer);
        const userContainer = initUserContainer()
        registerUserRoutes(server, userContainer);
        const DeckContainer = initDeckContainer();
        registerDecksRoutes(server, DeckContainer);
        await server.listen({
            host: process.env.HOST,
            port:  3001
        })
    } catch (err) {
        server.log.error(err)
        process.exit(1)
    }
}

start();