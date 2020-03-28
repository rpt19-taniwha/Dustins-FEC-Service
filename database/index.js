const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Images', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

var imageSchema = new mongoose.Schema({
  productId: String,
  imageUrls: {
    type: Array,
    default: undefined
  }
});

var Image = mongoose.model('Image', imageSchema);

db.on('error', console.error.bind(console, 'connection error:'));

const productQuery = (object, callback) => {
  Image.findOne(object, (err, product) => {
    if (err) {
      callback(err, null);

    } else {
      callback(null, product);
    }
  });
};



module.exports = {db, productQuery};
