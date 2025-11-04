"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const testSetup_1 = require("./testSetup");
const user_routes_1 = __importDefault(require("../routes/user.routes"));
const user_model_1 = __importDefault(require("../models/user.model"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const dotenv_1 = __importDefault(require("dotenv"));
const node_test_1 = require("node:test");
dotenv_1.default.config();
const JWT_SECRET = process.env.JWT_SECRET || '';
const server = new testSetup_1.TestServer();
server.app.use('/users', user_routes_1.default);
(0, node_test_1.describe)('User API Tests', () => {
    let token;
    beforeAll(async () => {
        await server.start();
        const hash = await bcrypt_1.default.hash('admin1234', 10);
        const user = await user_model_1.default.create({
            username: "admin",
            password: hash,
            firstname: "testUser",
            lastname: "testUser",
            email: "testUser@aueb.gr",
        });
        const payload = {
            username: user.username,
            email: user.email,
            roles: user.roles
        };
        token = jsonwebtoken_1.default.sign(payload, JWT_SECRET, { expiresIn: '1h' });
    });
    afterAll(async () => { await server.stop(); });
    test('GET /users -> returns list of users', async () => {
        const res = await server.request.get('/users').set('Authorization', `Bearer ${token}`);
        expect(res.status).toBe(201);
        expect(Array.isArray(res.body)).toBe(true);
    });
    test('POST /users -> creates new user', async () => {
        const res = await server.request.post('/users')
            .set('Authorization', `Bearer ${token}`)
            .send({ username: "newuser", password: "123456" });
        expect(res.status).toBe(201);
        expect(res.body.username).toBe('newuser');
    });
    test('POST /users -> creates new user', async () => {
        const res = await server.request.post('/users')
            .set('Authorization', `Bearer ${token}`)
            .send({ username: "newuser", password: "12" });
        expect(res.status).toBe(400);
    });
});
//# sourceMappingURL=user.integration.test.js.map