const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    title:{type: String, required: true},
    email:{type: String, required: true},
    review:{type:String, required: true},
    
});

module.exports = mongoose.model('Reviews', reviewSchema);