// app.js

const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { title: 'My EJS App', message: 'Welcome to my EJS app!' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
