module.exports = {
    multipleMongooseToObject: (mongooseArray) => {
        return mongooseArray.map(mongooseElement =>
            mongooseElement.toObject(),
        );
    },
    mongooseToObject: (mongoose) => mongoose.toObject(),
};
