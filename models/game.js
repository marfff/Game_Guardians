const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    title:{type: String, required: true},
    pegi:{type: String, required: true}
})

module.exports = mongoose.model('Games', gameSchema);