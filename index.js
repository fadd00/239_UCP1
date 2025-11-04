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

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hollywood',
    port: 3306
});

db.connect((err) => {
    if (err) {
        console.error('Error', err);
        return;
    }
    console.log('Connected');
});

app.get('/films', (req, res) => {
    const sql = 'SELECT * FROM film';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

module.exports = db;