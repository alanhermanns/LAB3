const fs = require('fs').promises;

const data = () => { return fs.readFile('./text.txt', 'utf-8')
.then(contents => {
    (contents).split('\n').filter(line => line !== '' && line !== '  ');
})
}    
data();

