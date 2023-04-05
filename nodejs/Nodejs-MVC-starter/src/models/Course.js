const mongoose = require('mongoose')

const courseSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
