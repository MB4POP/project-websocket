const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/client')));

const messages = [];

app.get('*', (req, res) => {
  res.render('./client/index.html');
});

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});