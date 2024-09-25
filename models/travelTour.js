const mongoose = require("mongoose");
const review = require("./review");
const Schema = mongoose.Schema;


const packageSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    description: String,
    image:{
        type: String,
        default: "https://unsplash.com/photos/an-aerial-view-of-an-island-in-the-middle-of-the-ocean-YK0t6nYNGTI",
        set: (v) => v === "" ? "https://unsplash.com/photos/an-aerial-view-of-an-island-in-the-middle-of-the-ocean-YK0t6nYNGTI" : v,
    },
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        },
    ],
});

const package = mongoose.model("package", packageSchema);

module.exports = package;