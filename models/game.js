const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    title:{type: String, required: true},
    description:{type: String, required: true},
    pegi:{type:String, required: true},
    platform: {type: String, enum:["PC", "Playstation 4", "Xbox One", "Nintendo Switch"], required: true},
    ageRating:{type: Number, required: false},
    educationalValue:{type: Number, required: false},
    easeOfPlay:{type: Number, required: false},
    violence:{type: Number, required: false},
    sex:{type: Number, required: false},
    language:{type: Number, required: false},
    consumerism:{type: Number, required: false},
    substanceUse:{type: Number, required: false}
})

module.exports = mongoose.model('Games', gameSchema);