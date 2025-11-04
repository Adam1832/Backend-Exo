const express = require('express');
const app = express();

function loggerMiddleware(req, res, next) {
  console.log('Nouvelle requête', req.body);
  next();
}

app.use(express.json());
app.use(loggerMiddleware);

app.use(express.static('template'));

app.post('/test', (req, res) => {
  res.send('OK');
});

app.listen(3000, () => console.log('Serveur démarré sur port 3000'));
