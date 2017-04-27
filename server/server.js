cosnt {mongoose} = require("./db/mongoose");


let Todo = mongoose.model("Todo", {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed:{
        type: Boolean,
        default: false
    },
    completedAt:{
        type: Number
    }
});

let newTodo = new Todo({
    text: "Cook dinner for me!",
    completed: false,
});

let newTodo1 = new Todo({
    text: "Walk the doggie!!!",
    completed: false,
    completedAt: 12
});

newTodo.save().then((doc) => {
    console.log("Saved todo", doc);
}, (e) => {
    console.log("Unable to save todo.");
});

newTodo1.save().then((doc) => {
    console.log("Saved todo", doc);
}, (e) => {
    console.log("Unable to save todo");
    console.log(e);
});

let User = mongoose.model("User", {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

let newUser = new User({
    email: "bob@bob.com"
});

newUser.save().then((doc) => {
    console.log("Saved user", doc);
}, (e) => {
    console.log("Unable to save user");
    console.log(e);
});
