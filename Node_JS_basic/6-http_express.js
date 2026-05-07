const express = require('express');

const app = express();

// Only handle the root endpoint - any other route returns Express's default 404
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;
