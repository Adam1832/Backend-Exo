// Créé un serveur express basique
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.post ('/average', (req, res) => {
    res.send ('Calcul de la moyenne');
});

app.post('/average', (req, res) => {
    const numbers = req.body.numbers;
    if (!Array.isArray(numbers)) {
        return res.status(400).send({ error: 'Le corps de la requête doit contenir un tableau de nombres sous la clé "numbers".' });
    }
    const sum = numbers.reduce((acc, val) => acc + val, 0);
    const average = sum / numbers.length;
    res.send({ average: valeur });
});

module.exports = app;