const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    family: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        min: 0
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: /.+\@.+\..+/
    },
    mbtiType: {
        type: String,
        enum: ["INTJ","INTP","ENTJ","ENTP","INFJ","INFP","ENFJ",
        "ENFP","ISTJ","ISFJ","ESTJ","ESFJ","ISTP","ISFP","ESTP","ESFP"],
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    favoriteGenres: {
        type: [String],
        default: []
    },
    watchlist: {
        type: [String],
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
