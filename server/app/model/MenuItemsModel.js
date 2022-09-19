// import mongoose schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectID = Schema.Types.ObjectId;

// create schema
const MenuItemsSchema = new Schema({
  name: { type: String },
  description: { type: String },
  ingridients: { type: Array },
  restaurantId: { type: ObjectID },
  image: { type: String },
  qty: { type: Number },
  price: { type: Number },
});

// create model (collection)
const MenuItemsModel = mongoose.model("menuItem", MenuItemsSchema);

// export model
module.exports = MenuItemsModel;
