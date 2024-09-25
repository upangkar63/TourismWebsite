const mongoose = require("mongoose");
const initData = require("./data.js");
const packages = require("../models/travelTour.js");

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
    await packages.deleteMany({});
    await packages.insertMany(initData.data);
    console.log("data was initialized");
}

initDB();