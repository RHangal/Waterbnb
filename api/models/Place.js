const mongoose = require("mongoose");
const { Schema } = mongoose;

const placeSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: "User" },
  title: String,
  address: String,
  photos: [String],
  description: String,
  perks: [String],
  extraInfo: String,
  checkIn: String,
  checkOut: String,
  maxGuests: Number,
  price: Number,
});

const PlaceModel = mongoose.model("Place", placeSchema);

module.exports = PlaceModel;
