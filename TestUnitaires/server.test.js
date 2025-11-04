const app = require('./server');

describe('Server Integration Tests', () => {

    test('server est bien importé de server.js', () => {
        expect(app).toBeDefined();
    });



});