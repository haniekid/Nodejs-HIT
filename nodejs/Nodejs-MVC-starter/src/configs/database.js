const mongoose = require('mongoose');

async function connect() {
  try {
    mongoose.connect('mongodb://127.0.0.1:27017/demo-f8', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connect to MongoDB Local successfully!');
  } catch (err) {
    console.error('Error connecting to MongoDB!');
  }
}

module.exports = connect;
