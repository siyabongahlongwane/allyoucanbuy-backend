const mongoose = require('mongoose');
const User = mongoose.model('User', {
    userDetails: {
        name: string,
        phone: string,
        email: string,
        password: string,
        isVerified: boolean
      },
      address: {
        street: string,
        town: string,
        province: string,
        code: string,
      },
      wishlist: {type: Array},
      cart: {type: Array},
      orders: {type: Array}
})

module.exports = { User };