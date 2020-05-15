//should return array of arrays [[name1, line], [name2, diff line], [name1, line] etc...]

const { data } = require('./app')
const chance = require('chance').Chance();

const lineConstructor = () => {
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
        let arrayOfPairs = [];
        while(i < number){
            if(i % 2 === 0){
                arrayOfPairs[i] = [name1, randomArray[i]]
            }
            if(i % 2 !== 0){
                arrayOfPairs[i] = [name2, randomArray[i]]
            }
            i++;
        }
    return { arrayOfPairs, number, name1, name2 }
}).then(arrayOfPairs => console.log(arrayOfPairs));
};
lineConstructor()
module.exports = lineConstructor;