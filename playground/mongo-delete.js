const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if(err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    //deleteMany()
    // db.collection("Todos").deleteMany({text: "Eat Lunch"}).then((result) => {
    //     console.log(result);
    // });
    // db.collection("Users").deleteMany({name: "Paul"}).then((results) => {
    //     console.log(results);
    // });

    //deleteOne()
    // db.collection("Todos").deleteOne({text: "Pet cat"}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete()
    // db.collection("Todos").findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    //});
    db.collection("Users").findOneAndDelete({_id: new ObjectID("58ffcf54ca15aa1464d578c8")}).then((results) =>
        console.log(JSON.stringify(results, undefined, 2)));

    //db.close();


})
