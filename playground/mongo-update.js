const {MongoClient, ObjectID} = require("Mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if(err){
        return Console.log("Unable to connect to DB");
    }
    console.log("Connected to MongoDB server!!!");

    db.collection("Todos").findOneAndUpdate({
            _id: new ObjectID("58ffe36bd56fdd1622110c51")
        },
        {
            $set:{
            completed: true
            }
        },
        {
            returnOriginal: false
        }).then((result)=>{
            console.log(result);
        });

    db.collection("Users").findOneAndUpdate({
        name: "Sammy"
    },
    {
        $set: {
            name: "Kristi"
        },
        $inc: {
            age: 1
        }
    },
    {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    //db.close();
});
