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

    todo.save().then((doc) =>{
        res.send(doc);
        console.log("The todo was saved!!! ", todo);
    }, (e) => {
        res.status(400).send(e);
        console.log("There was an error: ", e);
    });
});


let port = 3000
app.listen(port, () => {
    console.log(`Server is listening on ${port}.`);
});

module.exports = {app}; //use E6 export statement
