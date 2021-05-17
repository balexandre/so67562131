
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    role: [{
        type: String,
        required: true,
    }],
    guid: {
        type: String,
        required: true
    },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
