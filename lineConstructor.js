//should return array of arrays [[name1, line], [name2, diff line], [name1, line] etc...]

const { data } = require('./app')
const chance = require('chance').Chance();
const number = Math.floor(Math.random() * 20);
name1 = chance.name();
name2 = chance.name();

data().then(splitLines => {
        const newLines = splitLines;
        const newArray = [...Array(number)].map (() => newLines[Math.floor(Math.random() * 2000)]);
        return newArray;
    }).then(randomArray => {
        let i = 0;
        console.log(randomArray)
        let arrayOfPairs = randomArray.reduce((acc, curr) => {
        if(i % 2 === 0){
            acc[i] = [name1, curr]
        }
        else if(i % 2 !== 0) {acc[i] = [name2, curr]}
        i++;
    }, [])
    return arrayOfPairs;
}).then(arrayOfPairs => console.log(arrayOfPairs));
