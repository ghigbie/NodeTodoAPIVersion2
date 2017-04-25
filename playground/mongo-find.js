const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if(err){
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    // db.collection("Todos").find({completed: false}).count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    //     console.log(JSON.stringify(count, undefined, 2));
    // }, (err) => {
    //     console.log("Unable to fetch todos", err);
    // });

    db.collection("Users").find({name: "Mike"}).count().then((count) => {
        console.log(`Users count: ${count}`);
    }, (err) => {
        console.log("Unable to fetch users", err);
    });

    db.collection("Users").find({name: "Paul").toArray().then((docs) => {
        console.log(`Users with the name you are looking for:`);
        console.log(JOSN.stringify(docs, undefined, 2));
    }, (err) => {
        console.log("Unable to fetch users", err);
    });

    //db.close();
});
