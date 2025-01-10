const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gearSchema = new Schema ( {
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type:[String],
    },
    price: Number,


});
const gear = mongoose.model("gear", gearSchema);

module.exports = gear;