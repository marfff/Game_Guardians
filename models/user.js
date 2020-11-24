const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email:{type: String, required: true, unique: true},
    password:{type: String, required: true, minlength: 8}
});

userSchema.statics.checkExists = async function(email) {
    return await this.exists({email});
}
    
userSchema.statics.checkPassword = async function(email, password) {
    const user = await this.findOne({email});
    
    if (!user) {
        return false;
    }
    //if (await bcrypt.compare(password, user.password)) {
    if(user.password == password) {
        return true;
    }
    return false;
}

module.exports = mongoose.model('Users', userSchema);