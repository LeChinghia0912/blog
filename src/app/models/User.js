const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const User = new Schema({
    name: { type: String, required: true,},
    phone: { type: Number, required: true},
    email: { type: String, required: true},
    address: { type: String, required: true},
  }, {
    timestamps: true,
  });

module.exports = mongoose.model('User', User);
