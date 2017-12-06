const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (e, db) => {
    if (e)
        return console.log("Unable to connect to the server");

    console.log("connected to MongoDB server....");

    db.collection('Todos').findOneAndUpdate({ text: "walk the dog" }, {
        $set: {
            complete: false,
        }
    }, {
        returnOriginal: false
    }).then(res => console.log(res));


    db.close();
});