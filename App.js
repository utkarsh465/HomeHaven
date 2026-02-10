const express = require("express");
const app = express();

const Listing = require("./models/listing");

const mongoose = require("mongoose");



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

app.get("/",(req,res)=>{
    res.send("i am root");
})

// creating a listing
app.get("/testListing",async(req,res)=>{
    let sampleListing = new Listing({
        title:"My new villa",
        description:"By the beach",
        price:1200,
        location:"calungate,Goa",
        country:"India"
    });
    await sampleListing.save();
    console.log("sample was saved");
    res.send("Sample listing created");
})



app.listen("8080",()=>{
    console.log("server is working");
})