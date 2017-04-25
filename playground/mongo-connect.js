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
            return console.log("Unable to insert todo", err);
        }
        console.log(JSON.stringify(result.opps, undefined, 2));
    });

    db.close();
});
