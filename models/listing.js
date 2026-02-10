const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:String,
    image:{
        type:String,
        default:"https://www.istockphoto.com/photo/tropical-sea-beach-natural-background-with-blue-sky-palm-trees-and-white-clouds-in-gm2214640572-631437612?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_bottom&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Ftree-with-sea-view&utm_term=tree+with+sea+view%3A%3Awallpapers-no-affiliates%3Acontrol%3A2bc7386f-a710-46f9-b721-daa5f0042a16",
        set:(v)=>v=== ""?"https://www.istockphoto.com/photo/tropical-sea-beach-natural-background-with-blue-sky-palm-trees-and-white-clouds-in-gm2214640572-631437612?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_bottom&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Ftree-with-sea-view&utm_term=tree+with+sea+view%3A%3Awallpapers-no-affiliates%3Acontrol%3A2bc7386f-a710-46f9-b721-daa5f0042a16":v,
    },
    price:Number,
    location:String,
    country:String,
})
const Listing = mongoose.model("Listing",listingSchema);

module.exports = Listing;