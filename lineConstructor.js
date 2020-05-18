//should return array of arrays [[name1, line], [name2, diff line], [name1, line] etc...]

const { data } = require('./deriveData.js');
const chance = require('chance').Chance();

lineConstructor = async function(){
        const number = Math.floor(Math.random() * 20);
        name1 = chance.name();
        name2 = chance.name();
        let splitLines = await data();
        let newArray = [...Array(number)].map (() => splitLines[Math.floor(Math.random() * 2000)]);
        
        
        let arrayOfPairs = [];
            let i = 0;
                while(i < number){
                if(i % 2 === 0){
                    arrayOfPairs[i] = [name1, newArray[i]]
                }
                if(i % 2 !== 0){
                    arrayOfPairs[i] = [name2, newArray[i]]
                }
                i++;
            }
            const valuesToReturn = { arrayOfPairs, number, name1, name2 }
            return valuesToReturn;
        }

module.exports = lineConstructor;