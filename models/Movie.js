const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: true,
        trim: true
    },
    description: { 
        type: String,
        trim: true
    },
    director: { 
        type: String,
        trim: true
    },
    cast: { 
        type: [String],
        default: []
    },
    releaseDate: { 
        type: Date
    },
    duration: { 
        type: Number,
        min: 1
    },
    stars: { 
        type: Number,
        required: true,
        min: 0,
        max: 10
    },
    genre: { 
        type: [String],
        default: []
    },
    country: { 
        type: String,
        trim: true
    },
}, { timestamps: true });

const movieModel = mongoose.model("movies", movieSchema);

module.exports = movieModel;
