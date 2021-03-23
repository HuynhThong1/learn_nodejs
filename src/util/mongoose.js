const { Mongoose } = require("mongoose")

// handlebars fix security problems.
module.exports = {
    multipleMongooseToObject: function (mongooses) {
        return mongooses.map(mongooses => mongooses.toObject())
    },
    mongooseToObject: function(mongoose) {
        return mongoose ? mongoose.toObject() : mongoose
    }
}