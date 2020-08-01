const express = require("express");
const router = express.Router();
const User = require('./user');


router.post("/createUser", User.createUser);
router.get("/user/:userId", User.viewSingleUser);
router.get("/users", User.viewAllUsers);
router.put("/users/:userId", User.updateUserDetails);
router.delete("/users/:userId", User.delteUserDetails);