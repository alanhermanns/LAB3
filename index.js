require('dotenv').config();
require('./connect')();
const chance = require('chance').Chance()
const Model = require('./models/Model');
const linePairConstructor = require('./lineConstructor');

Model.create({
    numberOfLines : 10,
    name1 : chance.name(),
    name2 : chance.name(),
    lineArray : 
})


