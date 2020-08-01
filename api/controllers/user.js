const mongoose = require("mongoose");
const User = require("../models/user");


module.exports.addUser = (firstName,lastName,email) => {
    return new Promise((resolve, reject) => {
        const user = new User({
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName
        }).save().
        then(UserInfo => {
            const responseData = {
                'success': true,
                'message': 'Successful created User.',
                'data': UserInfo
            }
            resolve(responseData)

        }).catch((error) => reject(error))

    });
};

module.exports.viewUser = (userId) => {
    return new Promise((resolve, reject) => {
        User.findOne({
            _id: userId
        }).then((result) => {
            if (result == null) {
                const responseData = {
                    'success': false,
                    'message': 'userId not found.',
                }
                resolve(responseData)
            } else {
                const responseData = {
                    'success': true,
                    'message': 'User List data fetch successfully.',
                    'data': result
                }
                resolve(responseData)
            }
        }).catch((error) => reject('commentId not found'))
    })
};


module.exports.viewUsersList = () => {
    return new Promise((resolve, reject) => {
        User.findAll({
        }).then((result) => {
            if (result == null) {
                const responseData = {
                    'success': false,
                    'message': 'userId not found.',
                }
                resolve(responseData)
            } else {
                const responseData = {
                    'success': true,
                    'message': 'User List data fetch successfully.',
                    'data': result
                }
                resolve(responseData)
            }
        }).catch((error) => reject('commentId not found'))
    })
};

module.exports.updateUser = (userId) => {
        return new Promise((resolve, reject) => {
            User.findOneAndUpdate({
                _id: userId
            }, {
                '$set': brifData
            }, {
                'new': true
            }).then((result) => {
                if (result == null) {
                    const responseData = {
                        'success': false,
                        'message': 'userId not found.',
                    }
                    resolve(responseData)
                } else {
                    const responseData = {
                        'success': true,
                        'message': 'User Update successfully.',
                        'data': result,
                    }
                    resolve(responseData)
                }
            }).catch((error) => reject(error + ' Fail to update profileId'))
        })
    };

    module.exports.deleteUser = (userId) => {
        return new Promise((resolve, reject) => {
            User.delete({
                _id: userId
            }).then((result) => {
                if (result == null) {
                    const responseData = {
                        'success': false,
                        'message': 'userId not found.',
                    }
                    resolve(responseData)
                } else {
                    const responseData = {
                        'success': true,
                        'message': 'User deleted successfully.',
                        'data': result,
                    }
                    resolve(responseData)
                }
            }).catch((error) => reject(error + ' Fail to delete user'))
        })
    };