const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator')
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete')
const AutoIncrement = require('mongoose-sequence')(mongoose)
const Course = new Schema({
    _id: { type: Number },
    name: { type: String, maxLength: 255, required: true },
    description: { type: String, maxLength: 600, required: true },
    image: { type: String, maxLength: 255 },
    videoId: { type: String, maxLength: 255 },
    level: { type: String, maxLength: 255, required: true },
    slug: { type: String, slug: 'name', unique: true }
}, {
    _id: false,
    timestamps: true,
});

// Add plugins
mongoose.plugin(slug)
Course.plugin(AutoIncrement)
Course.plugin(mongooseDelete, { 
    overrideMethods: 'all',
    deletedAt: true,
})

module.exports = mongoose.model('Course', Course);
