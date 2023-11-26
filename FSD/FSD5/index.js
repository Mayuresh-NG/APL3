// app.js

const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  const tasks = [
    { id: 1, title: 'Complete project proposal', description: 'Prepare and submit the project proposal by Friday.' },
    { id: 2, title: 'Meeting with team', description: 'Schedule a team meeting to discuss project details.' },
    // Add more tasks as needed
  ];

  res.render('index', { title: 'My EJS App', message: 'Welcome to my EJS app!', tasks });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
