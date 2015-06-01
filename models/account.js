var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  passportLocalMongoose = require('passport-local-mongoose'),
  bcrypt = require('bcrypt-nodejs'),
  SALT_WORK_FACTOR = 10;

var Account = new Schema({
  username: {
    type: String,
    trim: true,
    unique: true
  },
  name: {
    full: String,
    first: String,
    last: String
  },
  contact: {
    phone: String,
    email: String,
    address: String
  },
  age: Number,
  height:{
    feet: Number,
    inches: Number
  },
  password: String,
  type: {
    type: String,
    default: 'user'
  },
  created: {
    type: Date,
    default: Date.now
  },
  loggedIn: String,
  chats: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
    unique: true
  }],
  lng: String,
  lat: String,
  geo: {
    type: [Number],
    index: '2d'
  },
  favorites: {
    type: Array
  },
  pictures: {
    type: [String]
  },
  intrests: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
    unique: true
  }],
  reccomendations: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
    unique: true
  }],  
  modified: Date
});

Account.plugin(passportLocalMongoose);

Account.pre('save', function(next) {
  var account = this;
  if (!account.isModified('password')) return next();
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);

    // hash the password along with our new salt
    var progress = function(data) {

    }
    bcrypt.hash(account.password, salt, progress, function(err, hash) {
      if (err) return next(err);

      // override the cleartext password with the hashed one
      account.password = hash;
      next();
    });
  });
});

Account.methods.comparePassword = function(password, cb) {
  console.log('#### Starting to confirm password');
  console.log(password);
  bcrypt.compare(password, this.password, function(err, isMatch) {
    console.log('#### Comparing ...');
    if (err) {
      console.log(err);
      return cb(err);
    } else {
      cb(null, isMatch);
    }
  });
};
module.exports = mongoose.model('Account', Account);
