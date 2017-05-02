const mongoose = require("mongoose");
const Schema   =  mongoose.Schema;

let todoSchema = new Schema({
    text: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt:{
        type: Number,
        default: null
    }
});

let Todo = mongoose.model("Todo", todoSchema);

// let Todo = mongoose.model("Todo", {
//     text: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 1
//     },
//     completed:{
//         type: Boolean,
//         default: false
//     },
//     completedAt:{
//         type: Number
//     }
// });

module.exports = {Todo};
