const express = require('express');
const app = express();
let mysql = require('mysql2');
const port = 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('pue');
});

app.listen(port, () => {
  console.log(`test di ${port}`);
});