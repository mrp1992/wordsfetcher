const request = require('supertest');
const app = require('../index.js');

describe('Test index', () => {
   
    test('should return bad request response', () => {
        return request(app).get("/words.json").then(response => {
            expect(response.status).toBe(400);
            expect(response.body.Message).toEqual('Missing value of stringVar');
        })
    });

    test('should return words as per request', () => {
        return request(app).get("/words.json?stringVar=saloni").then(response => {
            expect(response.status).toBe(200);
            expect(response.body.words[0]).toEqual('Saloni');
        })
    });

    test('should return no words when no words match the given string', () => {
        return request(app).get("/words.json?stringVar=abc").then(response => {
            expect(response.status).toBe(200);
            expect(response.body.words).toEqual([]);
        })
    });
});