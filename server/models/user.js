const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

// let userSchema = new Schema({
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 1
//     }
// });
//
// let User = mongoose.model("User", userSchema);

let User = mongoose.model("User", {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

module.exports = {User};
