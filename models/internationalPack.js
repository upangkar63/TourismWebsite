const mongoose = require("mongoose");
const review = require("./review");
// const { interpackSchema } = require("../schema");
const Schema = mongoose.Schema;


const packagesSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    description: String,
    image:{
        type: String,
        default: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
        set: (v) => v === "" ? "https://images.unsplash.com/photo-1504203328729-b937e8e102f2?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60" : v,
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

const intPackage = mongoose.model("internationalPack", packagesSchema);

module.exports = intPackage;