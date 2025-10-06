const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql2');


const cors = require('cors');
const e = require('express');
app.use(cors());
app.use(express.json());


const db = mysql.createPool({
    host: process.env.DB_Host,
    user: process.env.DB_User,
    password: process.env.DB_Password,
    database: process.env.DB_Name,
    port: process.env.DB_Port
    
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