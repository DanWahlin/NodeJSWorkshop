const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Local MongoDB Connection String
const mongoUri = `mongodb://localhost:27017/heroes-db`;

function connect() {
  mongoose.set('debug', true);
  return mongoose.connect(mongoUri);
}

module.exports = {
  connect,
  mongoose
};
