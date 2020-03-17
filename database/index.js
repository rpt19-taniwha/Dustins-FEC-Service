const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Images', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

const sampleProductQuery = db.images.findOne(object, (callback) => {
  if (err) {
    callback(err, null);
  } else {
    callback(null, sampleProduct);
  }
  db.close();
});


module.exports = {db, sampleProductQuery};
