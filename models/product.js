const mongoose = require("mongoose");
const Product = mongoose.model("Product", {
  productDetails: {
    name: string,
    price: string,
    images: { type: Array },
    description: string,
    brand: string,
    stockCount: string,
    category: string,
    reviews: { type: Array },
    rating: string,
    size: string,
    color: string,
  },
  offer: {
    isOnSale: boolean,
    salePrice: string,
    saleStartDate: string,
    saleEndDate: string,
  },
  vendor: {
    name: string,
    vendorId: string,
    company: string,
  },
});

module.exports = { Product };
