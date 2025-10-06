const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql2');


const cors = require('cors');
app.use(cors());
app.use(express.json());

