const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql2');
require('dotenv').config();


const cors = require('cors');
app.use(cors());
app.use(express.json());


const db = mysql.createPool({
    host: process.env.DB_Host,
    user: process.env.DB_User,
    password: process.env.DB_Password,
    database: process.env.DB_Name,
    port: process.env.DB_Port
    
});

app.get('/', (req, res) => {
    res.send('Ez a főoldal');
});

app.get('/szobak', (req, res) => {
    const sql = 'Select * from szobak'
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

app.get('/foglalasok', (req, res) => {
    //Create View foglalas as SELECT foglalasok.szoba, SUM(foglalasok.fo) as vendégek, DATEDIFF(foglalasok.tav, foglalasok.erk) AS vendégéjszakák from foglalasok GROUP BY DATEDIFF(foglalasok.tav,foglalasok.erk) ASC
    const sql = "select * from foglalas";
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

app.get('/szobafoglaltsag', (req, res) => {
    //Create View foglaltsag as vendegek.vnev AS név, foglalasok.erk as érkezés, foglalasok.tav as távozás FROM foglalasok INNER JOIN vendegek ON foglalasok.vendeg = vendegek.vsorsz GROUP BY vendegek.vnev ASC
    const sql = "SELECT * from foglaltsag";
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

app.listen(port, () => {
    console.log(`A szerver fut a ${port} porton`);
});