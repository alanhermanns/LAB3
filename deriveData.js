const fs = require('fs').promises;

const data = async() => {
    const contents = await fs.readFile('./text.txt', 'utf-8');
        
        const finalFormat = contents.split('\n').filter(line => line !== '' && line !== '  ')
        return finalFormat;
}

module.exports = {data};