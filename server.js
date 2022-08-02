/* Importing the express module. */
const express = require('express');

/* This is a way to set the port number. The first part is for when the app is deployed to Heroku. The
second part is for when the app is run locally. */
const PORT = process.env.PORT || 3001;

/* Creating an instance of the express module. */
const app = express();

const path = require('path');

const fs = require('fs');

const data = require('./db/db.json');

app.use(express.json())

/* This is telling the app to use the public folder as a static directory. */
app.use(express.static('public'));

app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/api/db', (req, res) => res.json(data))

app.listen(PORT, () => 
    console.log(`Example app listening at http://localhost:${PORT}`))