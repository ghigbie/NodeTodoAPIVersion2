const express = require("express");
const bodyParser = require("body-parser");

const {mongoose} = require("./db/mongoose");
const {Todo} = require("./models/todo");
const {User} = require("./models/user");

const app = express();

app.use(bodyParser.json());//this middleware allows JSON to be sent to express application

app.post("/todos", (req, res) => {
    let todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) =>{
        res.send(doc);
        console.log("The todo was saved!!! ", todo);
    }, (e) => {
        res.status(400).send(e);
        console.log("There was an error: ", e);
    });
});

app.get("/todos", (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos}); //sending an objec instead of an array allows for more flexibility
    }, (e) => {
        res.status(400).send(e);
        console.log("There was an error: ", e); 
    });
});

app.get("*", (req, res) => {
    res.send("This page is not found");
});

let port = 3000
app.listen(port, process.env.IP, () => {
    console.log(`Server is up and listening on ${port}.`);
});

module.exports = {app}; //use E6 export statement
