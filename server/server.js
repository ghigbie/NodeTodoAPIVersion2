const express    = require("express"),
      bodyParser = require("body-parser"),
      app        = express();

//local imports
const {mongoose} = require("./db/mongoose"),
      {Todo}     = require("./models/todo"),
      {User}     = require("./models/user");

app.use(bodyParser.json());//this middleware allows JSON to be sent to express application

app.post("/todos", (req, res) => {
    let todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
        console.log("The todo was saved: ", doc);
    }, (e) => {
        res.status(400).send(e);
        console.log("There was an error: ", e);
    });
    console.log(req.body);
});

app.get("*", (req, res) => {
    res.send("<h1>This page cannot be found</h1>");
});

let port = 3000
app.listen(port, () => {
    console.log(`Server is listening on ${port}.`);
});

module.exports = {app}; //use E6 export statement

// let Todo = mongoose.model("Todo", {
//     text: {
//         type: String,
//         required: true,
//         minlength: 1,
//         trim: true
//     },
//     completed:{
//         type: Boolean,
//         default: false
//     },
//     completedAt:{
//         type: Number
//     }
// });
//
// let newTodo = new Todo({
//     text: "Cook dinner for me!",
//     completed: false,
// });
//
// let newTodo1 = new Todo({
//     text: "Walk the doggie!!!",
//     completed: false,
//     completedAt: 12
// });
//
// newTodo.save().then((doc) => {
//     console.log("Saved todo", doc);
// }, (e) => {
//     console.log("Unable to save todo.");
// });
//
// newTodo1.save().then((doc) => {
//     console.log("Saved todo", doc);
// }, (e) => {
//     console.log("Unable to save todo");
//     console.log(e);
// });
//
// let User = mongoose.model("User", {
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 1
//     }
// });
//
// let newUser = new User({
//     email: "bob@bob.com"
// });
//
// newUser.save().then((doc) => {
//     console.log("Saved user", doc);
// }, (e) => {
//     console.log("Unable to save user");
//     console.log(e);
// });
