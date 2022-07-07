const mongoose = require('mongoose');
const User = mongoose.model('User', {
    userDetails: {type: Object},
      address: {type: Object},
      wishlist: {type: Array},
      cart: {type: Array},
      orders: {type: Array}
})


module.exports = { User };