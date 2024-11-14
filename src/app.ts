import { PrismaClient } from '@prisma/client'
import fastify from 'fastify'
import { productsRoutes } from './routes/products';

export const app = fastify()

export const prisma = new PrismaClient()

app.addHook("preHandler", async (request) => {
    console.log(`[${request.method} ${request.url}]`);
});

app.register(productsRoutes, {
    prefix: "products",
});

