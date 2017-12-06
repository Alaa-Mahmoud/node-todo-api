//const MongoClient = require('mongodb').MongoClient;

const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID();

console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('connected to db server');

    // db.collection('Todos').insertOne({
    //     text: " create new todo",
    //     complete: false,
    // }, (error, result) => {
    //     if (error)
    //         return console.log('Unable to insert into Todos ' + error.message);

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });


    // db.collection('Users').insertOne({
    //     name: "omnia",
    //     age: 21,
    //     location: "london"
    // }, (e, res) => {
    //     if (e)
    //         return console.log('Someting went wrong' + e.message);

    //     //console.log(JSON.stringify(res.ops, undefined, 5));
    //     console.log(res.ops[0]._id.getTimestamp());
    // });





    db.close();
});