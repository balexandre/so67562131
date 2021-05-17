
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    role: [{ type: String }], // or role: mongoose.Schema.Types.Mixed
    guid: {
        type: String,
        required: true
    },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
