const express = require('express');
//const crypto = require('crypto');
const app = express();

app.use(express.json());

let ValidToken = null;


app.post('/authenticate', (req, res) => {
  const { email, password } = req.body;

  console.log(`Tentative de connexion : ${email} / ${password}`);

  validToken = crypto.randomBytes(16).toString('hex');

  console.log('Nouveau token généré :', validToken);

  res.json({
    message: 'Authentification réussie',
    token: validToken,
  });
});


const publicRoutes = ['/hello']; 

function firewall(req, res, next) {
  const requestedUrl = req.path; 

  if (publicRoutes.includes(requestedUrl)) {
    return next();
  }

  const token = req.headers.token;
  if (token !== '42') {
    return res.status(403).json({ message: 'Forbidden' });
  }

  next(); 
}
app.use(firewall);


app.get('/hello', (req, res) => {
  res.send('<h1>hello</h1>');
});

// Routes protégées
app.get('/restricted1', (req, res) => {
  res.json({ message: 'topsecret' });
});

app.get('/restricted2', (req, res) => {
  res.send('<h1>Admin space</h1>');
});

app.listen(3000, () => console.log('Serveur démarré sur port 3000'));