const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const MONGO_URL = "mongodb://127.0.0.1:27017/travelTour";

// main().then(() => {
//     console.log("Connected to Database");
// }).catch((err) => {
//     console.log(err);
// });
// async function main() {
//     await mongoose.connect(MONGO_URL);
// }

const imageSchema = new Schema({
        imagePath: [String]
});

const Image = mongoose.model("Image", imageSchema);

const images = new Image({
        imagePath: [
            "https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
            "https://images.pexels.com/photos/210012/pexels-photo-210012.jpeg"
            ,
            "https://images.unsplash.com/photo-1494564605686-2e931f77a8e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
            "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg"
        ]
    });

    // images.save().then(()=> console.log("saved"))
    // .catch(err => console.log("error", err));

module.exports = Image;
    