"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_child_process_1 = require("node:child_process");
const app_1 = require("../src/app");
const node_test_1 = require("node:test");
const supertest_1 = __importDefault(require("supertest"));
const vitest_1 = require("vitest");
(0, node_test_1.describe)('Products Routes', () => {
    (0, vitest_1.beforeAll)(() => __awaiter(void 0, void 0, void 0, function* () {
        yield app_1.app.ready();
    }));
    (0, vitest_1.afterAll)(() => __awaiter(void 0, void 0, void 0, function* () {
        yield app_1.app.close();
    }));
    (0, node_test_1.beforeEach)(() => __awaiter(void 0, void 0, void 0, function* () {
        (0, node_child_process_1.execSync)("npx prisma migrate reset --force");
        (0, node_child_process_1.execSync)("npx prisma migrate dev --create-only");
    }));
    (0, vitest_1.it)('deve criar um novo produto', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(app_1.app.server).post('/products/create').send({
            "name": "Redbull",
            "price": 12.99,
            "img_link": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Bananas_%28Alabama_Extension%29.jpg/280px-Bananas_%28Alabama_Extension%29.jpg",
        });
        (0, vitest_1.expect)(201);
    }));
    (0, vitest_1.it)('deve achar um produto específico em produtos', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(app_1.app.server).post('/products/create').send({
            name: "Banana",
            price: 12.99,
            img_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Bananas_%28Alabama_Extension%29.jpg/280px-Bananas_%28Alabama_Extension%29.jpg",
        });
        const ListProductsResponse = yield (0, supertest_1.default)(app_1.app.server)
            .get('/products/allProducts')
            .expect(201);
        const productId = ListProductsResponse.body.products[0].id;
        const getProductResponseById = yield (0, supertest_1.default)(app_1.app.server)
            .get(`/products/${productId}`);
        (0, vitest_1.expect)(getProductResponseById.body.product).toEqual(vitest_1.expect.objectContaining({
            id: productId,
            name: "Banana",
            price: 12.99,
            img_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Bananas_%28Alabama_Extension%29.jpg/280px-Bananas_%28Alabama_Extension%29.jpg",
        }));
    }));
    (0, vitest_1.it)('deve conseguir atualizar um produto pelo Id', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(app_1.app.server).put('/products/update/:id');
    }));
});
