const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

// passport automatically has a username 

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);