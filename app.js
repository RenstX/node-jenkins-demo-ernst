// Import express
const express = require('express');

const app = express();
const port = 3000;

// Route GET pour /
// Renvoie "Hello World"
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Route GET pour /health
// Renvoie un objet JSON avec le statut "ok"
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});

module.exports = app;
