const express = require("express");
const app = express();
const path = require("path");

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


// this line is for ejs files

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.get("/",(req,res)=>{
    res.send("i am root");
})

// creating a listing

// app.get("/testListing",async(req,res)=>{
//     let sampleListing = new Listing({
//         title:"My new villa",
//         description:"By the beach",
//         price:1200,
//         location:"calungate,Goa",
//         country:"India"
//     });
//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("Sample listing created");
// })



// index route
app.get("/listings",async (req,res) =>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs",{allListings});
});

// New route

app.get("/listings/new",(req,res)=>{
    res.render("listings/new.ejs")
})

// Show route

app.get("/listings/:id",async(req,res)=>{
    let{id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
});


// Create Route

app.post("/listings",async(req,res)=>{
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
})



app.listen("8080",()=>{
    console.log("server is working");
})

