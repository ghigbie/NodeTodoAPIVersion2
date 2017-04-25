const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if(err){
        console.log("Unable to conect to MongoDB server");
        return console.log(err);
    }
    console.log("Connected to MongoDB server");

    db.collection("Todos").insertOne({
        text: "Something that is important to do",
        completed: false
    }, (err, result) => {
        if(err){
            console.log("Unable to insert todo");
            return console.log(err);
        }
        console.log("TODO inserted!!!");
    })

    db.close();
});
