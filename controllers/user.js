var express = require("express");
var router = express.Router();
var { User } = require("../models/user.js");

// Get Specific User As Super Admin
router.get("/getUsers", (req, res) => {
    User.find((err, users) => {
        if (!err) {
            res.send(users);
        } else {
            res.status(400).send({ msg: "Error fetching users!" });
        }
    });
});

// Register User
router.post("/register", (req, res) => {
    const email = { email: req.body.userDetails };
    User.find(email, (err, foundUser) => {
        if (!err) {
            if (foundUser?.length) {
                res.status(400).send({ msg: "User exists, please login" });
            } else {
                req.body.userDetails.role = {
                    id: "cu",
                    description: "Customer"
                }
                let newUser = new User({
                    userDetails: req.body.userDetails,
                    address: {},
                    wishlist: req.body.wishlist ? req.body.wishlist : [],
                    cart: req.body.cart ? req.body.cart : [],
                    orders: [],
                });
                newUser.save((err, user) => {
                    if (!err) {
                        res.send({ msg: "Registered successfully, please login", user });
                    } else {
                        res.status(400).send({ msg: "Error saving details, try again later" });
                    }
                });
            }
        } else {
            res.status(500).send({ msg: "Server error, try again later" });
        }
    });
});

// Login User
router.get("/login", (req, res) => {
    if (req.query?.email) {
        const email = { email: req.query.email };
        User.find(email, (err, foundUser) => {
            let user = {};
            if (!err) {
                if (!foundUser?.length) {
                    res
                        .status(400)
                        .send({ msg: "User does not exist, please register!" });
                } else {
                    if (req.query.password === foundUser[0].userDetails.password) {
                        user = foundUser[0];
                        res.send({ msg: "Logged in!", user });
                    } else {
                        res.status(400).send({ msg: "Incorrect password" });
                    }
                }
            } else {
                return { msg: "Error logging you in!" };
            }
        });
    } else {
        res.status(400).send({ msg: "Invalid parameters sent!" });
    }
});
module.exports = router;
