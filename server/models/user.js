import { model } from "mongoose";

var { mongoose } = require("./db/mongoose");

var User = mongoose.model('User', {
    email: {
        type: String,
        require: true,
        trim: true,
        minlength: 5
    }
});


module.exports = {
    User,
};