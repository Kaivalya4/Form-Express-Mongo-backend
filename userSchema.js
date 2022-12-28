const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    mobile: {
        type: Number,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    business_name: {
        type: String,
        required: true,
    },
    gst_no: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    employees: {
        type: String,
        required: true,
    },
    loan_amt: {
        type: String,
        required: true,
    },
    interest_rate: {
        type: String,
        required: true,
    },
    laon_tenure: {
        type: Number,
        required: true,
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
