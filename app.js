const express = require('express');
const app = express();

const {data} = require('./deriveData');
const lineConstructor = require('./lineConstructor');

app.get('/', (req, res) => {
    data().
        then(splitLines => {
        res.send(splitLines);
    })
});

app.get('/123', async (req, res) => {
    const lines = await lineConstructor();
        res.send(lines)
    });


module.exports = { app, data }; 
