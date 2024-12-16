import { FastifyInstance } from "fastify";
import { prisma } from "../app";
import { z } from "zod";


export async function productsRoutes(app: FastifyInstance) {
    
    app.post('/create', async (request, reply) => {

        const createProductBodySchema = z.object({
            name: z.string(),
            price: z.number(),
            img_link: z.string().url().nullable(),
            category: z.string()

        })

        const { name, price, img_link, category } = createProductBodySchema.parse(
            request.body
        )

        const productAlreadyExists = await prisma.products.findFirst({
            where: {
                name: {
                    contains: name,
                    mode: 'insensitive',
                }
            }
        })

        if(productAlreadyExists){
            return reply.status(409).send({ error: "Produto já existente no sistema", product: productAlreadyExists })
        }

        await prisma.products.create({data: {
            name,
            price,
            img_link: img_link || "",
            category
        }})

        return reply.status(201).send({message:"Produto criado com sucesso"})
    })

    app.get('/allProducts', async(request, reply) => {
        
        const products = await prisma.products.findMany({orderBy: {id: 'asc'}})

        return reply.status(201).send(products)
    })

    app.get('/:id', async (request, reply) => {

        const createQueryId = z.object({
            id: z.string()
        })

        const { id } = createQueryId.parse(request.params)

        const product = await prisma.products.findFirst({
            where: {
                id: Number(id)
            }
        })

        return reply.status(200).send({ product })
    })

    app.delete('/deleteProductId/:id', async (request, reply) => {

        const createQueryId = z.object({
            id: z.string()
        })

        const { id } = createQueryId.parse(request.params)

        try {

                await prisma.products.delete({
                
                where: {
                    id: Number(id)
                }
                
            })

        } catch (error) {
            return reply.status(401).send({error: error})
        }

        

        return reply.status(204).send()
    })

    app.post('/resetBD', async (request, reply) => {


        // Resetar o bando de dados, e criar um genérico
        await prisma.products.deleteMany({})


        try {
            interface Product {
                title: string;
                price: number;
                image: string;
            }

            const productsExamples = await fetch('https://fakestoreapi.com/products')
            const data = await productsExamples.json();

            data.forEach(async (element: Product) => {

                await prisma.products.create({
                    data: {
                        name: element.title,
                        price: element.price,
                        img_link: element.image,
                    }
                })
            
            });
            
            return reply.status(200).send()
        } catch (error) {
            console.error('Error na requisição.', error)
        }
        
    })

    app.put('/update/:id', async(request, reply) => {

        const updateProductBodySchema = z.object({
            name: z.string().nullable(),
            price: z.number().nullable(),
            img_link: z.string().url(),

        })

        const productIdParams = z.object({
            id: z.string()
        })

        const { name, price, img_link } = updateProductBodySchema.parse(request.body)

        const { id } = productIdParams.parse(request.params);
        
        try {

            const product = await prisma.products.findFirst({
                where: {
                    id: Number(id)
                }
            })

            if(!product) {
                return reply.status(404).send({message: "Produto não encontrado 😢."})
            }

            if(name !== null) product.name = name;
            if(price !== null) product.price = price;
            if(img_link !== null) product.img_link = img_link;

            await prisma.products.update({
                where: { id: Number(id) },
                data: {
                     name: product.name,
                     price: product.price,
                     img_link: product.img_link,
                }
            })
        } catch (error) {
            console.error(error);
            reply.status(500).send({messagem: 'Error ao atualizar o produto'})
        }

    })
}