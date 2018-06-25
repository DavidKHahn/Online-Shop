const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, 
email: {
    type: String, 
    required: true, 
    unique: true, 
    //email regex: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    //match is used to determine whether the pattern resembles an email address
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
},
password: {type: String, required: true}
});

module.exports = mongoose.model('User', userSchema);