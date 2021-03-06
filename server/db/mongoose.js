const mongoose = require("mongoose");

mongoose.Promise = global.Promise //tells mongoose to use promises
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/TodoApp");

module.exports = {mongoose};
