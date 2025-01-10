const mongoose = require("mongoose");
const Review = require("./review.js");
const { required } = require("joi");
const Schema = mongoose.Schema;


const packageSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    description: String,
    image:{
        type: [String],
        default: ["https://unsplash.com/photos/an-aerial-view-of-an-island-in-the-middle-of-the-ocean-YK0t6nYNGTI"],
        set: (v) => v.length === 0 ? ["https://unsplash.com/photos/an-aerial-view-of-an-island-in-the-middle-of-the-ocean-YK0t6nYNGTI"] : v,
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
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",

    },
    packSizes: [
        {
            size: {
                type: String,
                enum: ['1 person','2 person', '3 person', '5 person'],
                required: true,
            },
            additionalPrice: {
                type: Number,
                default: 0,
            },
            availability: {
                type: Boolean,
                default: true,
            },
        },
    ],
});

// Mongoose middleware
packageSchema.post("findOneAndDelete", async (package) => {
    if (package) {
        await Review.deleteMany({ _id: { $in: package.reviews } });
    }
});

const Package = mongoose.model("Package", packageSchema);

module.exports = Package;
