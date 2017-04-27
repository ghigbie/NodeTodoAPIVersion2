const mongoose = require("mongoose");

mongoose.Promise = global.Promise; //tells mongoose to use promises
mongoose.connect("mongodb://localhost:27017/TodoApp");

let Todo = mongoose.model("Todo", {
    text: {
        type: String
    },
    completed:{
        type: boolean
    },
    completedAt:{
        type: Number
    }
});
