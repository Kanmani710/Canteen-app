const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  items: [
    {
      item: { type: mongoose.Schema.Types.ObjectId, ref: "MenuItem" },
      quantity: Number,
    },
  ],
  status: { type: String, enum: ["pending", "ready"], default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);
