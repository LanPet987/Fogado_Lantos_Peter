const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql2');


const cors = require('cors');
app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fogado',
    port: 3306
});

app.get('/teszt', (req, res) => {
    sql = "SELECT 1 + 1 AS result";
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`A szerver fut a ${port} porton`);
});