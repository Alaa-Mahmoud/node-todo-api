const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err)
        return console.log("Unable to connect to the server");

    console.log("connected to mongodb server");

    // db.collection('Todos').find({ complete: true }).toArray().then(doc => {
    //     console.log(JSON.stringify(doc, undefined, 5));
    // }, (err) => {
    //     console.log(err);
    // });


    // db.collection('Todos').find().count().then((count) => {
    //     console.log(count);
    // }, (e) => console.log(e));


    db.collection('Users').find({ location: "london" }).toArray().then((doc) => {
        console.log(JSON.stringify(doc, undefined, 5));
    }, (e) => console.log(e));





    db.close();
});