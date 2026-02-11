const mongoose = require("mongoose");
const initdata = require("./data.js");
const listing = require("../models/listing.js");

// connecting to database
const Mongo_Url = "mongodb://127.0.0.1:27017/HomeHaven";
main().then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.error("Failed to connect to MongoDB:", err);
});
async function main (){
    await mongoose.connect(Mongo_Url);
}
 const initDB = async() => {
    await listing.deleteMany({});
    await listing.insertMany(initdata);
    console.log("Database initialized with sample data");
    console.log(initdata);
}

initDB();

