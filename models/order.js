const mongoose = require("mongoose");
const Order = mongoose.model("Order", {
  name: string,
  orderNumber: string,
  orderDate: string,
  shipDate: string,
  vendorIds: { type: Array },
  products: { type: Array },
  total: string,
});
module.exports = { Order };
