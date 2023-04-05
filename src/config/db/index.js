const mongoose = require("mongoose");

async function connect() {
  try {
    mongoose.connect("mongodb://localhost:27017/hit_nodejs", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect MongoDb successfully!");
  } catch (error) {
    console.log("Fail to connect MongoDb!");
  }
}

module.exports = { connect };
