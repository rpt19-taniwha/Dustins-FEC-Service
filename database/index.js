const mongoose = require('mongoose');

const url = 'mongodb+srv://root:rE9EvYIQe91rR9mt@cluster0-o5gfo.mongodb.net/Images?retryWrites=true&w=majority';

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

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
