const mongoose = require("mongoose");
const Product = mongoose.model("Product", {
    userDetails: {
        name: string,
        phone: string,
        email: string,
        password: string,
        vendorId: string,
        company: string,
        logo: string,
      },
      address: {
        street: string,
        town: string,
        province: string,
        code: string,
      },
})
module.exports = { Product };