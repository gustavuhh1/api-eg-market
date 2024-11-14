import { FastifyInstance } from "fastify";
import { app, prisma } from "@/app";


export async function productsRoutes(app: FastifyInstance) {
    
    app.get('/', async (request) => {

        const products = await prisma.products.findMany()

        
    })
}