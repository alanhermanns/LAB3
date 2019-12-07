const mongoose = require('mongoose');

function connect() {
    mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
}

mongoose.connection.on('connected', () => {
    console.log('connected');
});
mongoose.connection.on('error', () => {
    console.log('failed to connect');
});

module.exports = connect;