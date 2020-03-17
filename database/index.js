const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Images', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.images.findOne({'productId': "549504785"}, (callback) => {
  if (err) {
    callback(err, null);
  } else {
    callback(null, sampleProduct);
  }
  db.close();
});

