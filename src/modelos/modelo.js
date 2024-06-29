const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  favorites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Item'
    }
  ]
});

module.exports = mongoose.model('User', UserSchema);
