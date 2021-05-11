const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const detailsSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    country: {
        type: String,
        required: [true, "Country is required"]
    }
});

const User = mongoose.model('user', detailsSchema);

module.exports = User;