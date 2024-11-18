import { execSync } from 'node:child_process'
import { app } from '../src/app'
import { beforeEach, describe } from 'node:test'
import request from 'supertest'
import { afterAll, beforeAll, expect, it } from 'vitest'


describe('Products Routes', () => {
    beforeAll(async () => {
        await app.ready();
    })

    afterAll(async () => {
        await app.close();
    })

    beforeEach(async () => {
        execSync("npx prisma migrate reset --force")
        execSync("npx prisma migrate dev --create-only")
    })

    it('deve criar um novo produto', async() => {
        await request(app.server).post('/products/create').send({
            "name": "Redbull",
            "price": 12.99,
            "img_link": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Bananas_%28Alabama_Extension%29.jpg/280px-Bananas_%28Alabama_Extension%29.jpg",
            
        });
        expect(201);
    })

    it('deve achar um produto específico em produtos', async () => {
        await request(app.server).post('/products/create').send({
            name: "Banana",
            price: 12.99,
            img_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Bananas_%28Alabama_Extension%29.jpg/280px-Bananas_%28Alabama_Extension%29.jpg",

        });
        
        const ListProductsResponse = await request(app.server)
            .get('/products/allProducts')
            .expect(201)

        const productId = ListProductsResponse.body.products[0].id
        
        const getProductResponseById = await request(app.server)
            .get(`/products/${productId}`)

        expect(getProductResponseById.body.product).toEqual(
            expect.objectContaining({
                id: productId,
                name: "Banana",
                price: 12.99,
                img_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Bananas_%28Alabama_Extension%29.jpg/280px-Bananas_%28Alabama_Extension%29.jpg",

            })
        )
        
    })

    it('deve conseguir atualizar um produto pelo Id', async() => {
        await request(app.server).put('/products/update/:id')
    })


})



