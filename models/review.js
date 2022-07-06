const mongoose = require("mongoose");
const Review = mongoose.model("Review", {
  name: string,
  comment: string,
  datePublished: string,
  owner: string,
});
module.exports = { Review };
