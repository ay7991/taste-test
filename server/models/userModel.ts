const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;

const userSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    ingredients: [String],
    recipes: [String]
});

userSchema.pre('save', function(next: any) {
  bcrypt.hash(this.password, SALT_WORK_FACTOR, (err: Object, hashed: string) => {
    if (err) {
      return next(err);
    }
    this.password = hashed;
    return next();
  });
});

module.exports = mongoose.model('User', userSchema);