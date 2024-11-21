import { PrismaClient } from '@prisma/client'
import fastify from 'fastify'
import { productsRoutes } from './routes/products';
import fastifyStatic from '@fastify/static';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export const app = fastify()

export const prisma = new PrismaClient()

app.addHook("preHandler", async (request) => {
    console.log(`[${request.method} ${request.url}]`);
});

app.register(productsRoutes, {
    prefix: "products",
});

app.register(fastifyStatic, {
    root: path.join(__dirname, "public"),
    prefix: '/',
})

app.get('/', (req, reply) => {
    reply.sendFile('index.html')
})