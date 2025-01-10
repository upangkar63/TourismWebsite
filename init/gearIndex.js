const mongoose = require("mongoose");
const gearData = require("./geardata.js");
const gears = require("../models/gears.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/travelTour";

main().then(() => {
    console.log("Connected to Database");
}).catch((err) => {
    console.log(err);
});
async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await gears.deleteMany({});
    await gears.insertMany(gearData.data);
    console.log("data was initialized !");
}

initDB();