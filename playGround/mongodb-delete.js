const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if (err)
        return console.log("Unable.connet to the server");

    console.log("Connected to MongoDB server");

    db.collection('Todos').deleteMany({ text: " create new todo" }).then((res) => {
        console.log(res);
    });

    db.close();

});