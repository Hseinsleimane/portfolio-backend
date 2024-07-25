const request = require('supertest');
const app = require('../server'); // Adjust according to your structure

describe('User API', () => {
    it('should register a new user', async () => {
        const res = await request(app)
            .post('/api/users/register')
            .send({ email: 'test@example.com', password: 'password123' });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('token');
    });
});
