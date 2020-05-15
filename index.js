require('dotenv').config();
require('./connect')();
const chance = require('chance').Chance()
const Model = require('./models/Model');
const linePairConstructor = require('./lineConstructor');
//need to create a class line constructor
linePairConstructor().then(
Model.create({
    numberOfLines : number,

})
)




