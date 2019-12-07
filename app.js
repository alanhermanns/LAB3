const fs = require('fs').promises;

const express = require('express');
const app = express();

const data = async() => {
    const contents = await fs.readFile('./text.txt', 'utf-8');
        
        return contents.split('\n').filter(line => line !== '' && line !== '  ')
}

app.get('/', (req, res) => {
    data().then(splitLines => {
            res.send(splitLines);
    })
});
app.post('/'),(req, res) => {
    const numberOfLinesToDisplay = req.body()
    data().then(splitLines => {
        
    });
}


module.exports = { app, data }; 
