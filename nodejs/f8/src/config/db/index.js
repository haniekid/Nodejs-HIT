const mongoose = require('mongoose');

async function connect() {
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/f8_education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect MongoDb successfully!');
    } catch (err) {
        console.log('Fail to connect MongoDb!');
    }
}

module.exports = { connect };
