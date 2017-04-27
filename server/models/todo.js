
let Todo = mongoose.model("Todo", {
    text: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    completed:{
        type: Boolean,
        default: false
    },
    completedAt:{
        type: Number
    }
});
