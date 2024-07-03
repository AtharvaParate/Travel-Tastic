const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the image schema
const imageSchema = new Schema({
  filename: {
    type: String,
    default: "",
  },
  url: {
    type: String,
  },
  _id: false,
});

// Define the listing schema
const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: imageSchema,
  price: Number,
  location: String,
  country: String,
});

// Create the Listing model
const Listing = mongoose.model("Listing", listingSchema);

// Export the model
module.exports = Listing;
