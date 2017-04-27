const mongoose = require("mongoose");

mongoose.Promise = global.Promise; //tells mongoose to use promises
mongoose.connect("mongodb://localhost:27017/TodoApp");

let Todo = mongoose.model("Todo", {
    text: {
        type: String
    },
    completed:{
        type: Boolean
    },
    completedAt:{
        type: Number
    }
});

let newTodo = new Todo({
    text: "Cook lunch for me!",
    completed: false,
});

newTodo.save().then((doc) => {
    console.log("Saved todo", doc);
}, (e) => {
    console.log("Unable to save todo.");
});

let User = mongoose.model("User", {
    name:{
        type: String
    },
    age:{
        type: Number
    },
})
