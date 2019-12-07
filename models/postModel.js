const mongoose = reqire('mongoose');

const schema = new mongoose.Schema({
    numberOfLines : Number,
    reqired : true,
},
{
    name1 : String,
    required : true,
},
{
    name2 : String,
    required: true,
}
,{
    lineArray : [(name1, String, name2, String) * numberOfLines], //names and lines
    required : true,
});

module.exports = mongoose.model('Model', schema);
