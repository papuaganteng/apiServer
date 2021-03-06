const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({

    email: {
        type: String
    },
    password: {
        type: String
    },
    error: {
        type: Boolean
    },
    token: {
        type: String
    }
});

module.exports = mongoose.model('User', User);
