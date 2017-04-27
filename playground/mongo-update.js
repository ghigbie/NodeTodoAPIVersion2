const {MongoClient, ObjectID} = require("Mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if(err){
        return Console.log("Unable to connect to DB");
    }
    console.log("Connected to MongoDB server!!!");
});
