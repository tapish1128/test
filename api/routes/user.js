const express = require("express");
const router = express.Router();
const User = require('../controllers/user');


module.exports.createUser = (req, res, next) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    User.addUser(firstName,lastName,email).then((result) => {
        res.json(result)

    }).catch((error) => next('Failed to find userId'))

};

module.exports.viewSingleUser = (req, res, next) => {
    const userId = req.params.userId;
    User.viewUser(userId).then((result) => {
        res.json(result)
    }).catch((error) => next(error + 'Failed to find userId'))

}

module.exports.viewAllUsers = (req, res, next) => {
    User.viewUsersList().then((result) => {
        res.json(result)
    }).catch((error) => next(error + 'Failed to find userId'))

}

module.exports.updateUserDetails = (req, res, next) => {
    const userId = req.params.userId;
    User.updateUser(userId, req.body).then((result) => {
        res.json(result)
    }).catch((error) => next(error + 'Failed to find userId'))

};

module.exports.delteUserDetails = (req, res, next) => {
    const userId = req.params.userId;
    User.deleteUser(userId).then((result) => {
        res.json(result)
    }).catch((error) => next(error + 'Failed to find userId'))

};


