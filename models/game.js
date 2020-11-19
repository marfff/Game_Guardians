const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    title:{type: String, required: true},
    short_desc:{type: String, required: true},
    pegi:{type:String, required: true},
    stars: {type:String, required: true},
    synopsis: {type:String, required: true},
    educational:{type: Number, required: false},
    adult_themes:{type: Number, required: false},
    violence:{type: Number, required: false},
    
});

module.exports = mongoose.model('Games', gameSchema);