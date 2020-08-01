const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName: { 
        type: String, 
        default: ''
    },
    lastName: { 
        type: String, 
        default: ''
    },
    email: { 
        type: String, 
        default: ''
    }
});


module.exports = mongoose.model('User', UserSchema);