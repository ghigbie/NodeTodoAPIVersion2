const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/TodoApp");

let Todo = mongoose.model("Todo", {
    text: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});
