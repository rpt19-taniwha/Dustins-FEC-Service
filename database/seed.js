const mongoose = require('mongoose');
const {profileImages, sampleImages, createImageUrl} = require('./dbHelper.js');
const productList = require('./sample_products.js');

const s3FolderUrl = 'https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/Fec+pictures/';
const s3SampleUrl = 'https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/';
const s3sampleImageQuantity = 8;
const s3ImageQuantity = 31;

const productListWithImages = productList.map((product, k) => {
  const imageUrls = [];
  const sampleUrls = [];
  const finalProduct = {};

  for (let i = 0; i < s3ImageQuantity; i++) {
    const url = createImageUrl(s3FolderUrl, 'image', i, '.jpg');
    imageUrls.push(url);

    if (i < s3sampleImageQuantity) {
      const sampleUrl = createImageUrl(s3SampleUrl, 'pokenatomy', i + 1, '.jpg');
      sampleUrls.push(sampleUrl);
    }
  }
  finalProduct['productNumber'] = product['productNumber'];
  if (k === 0) {
    const sampleImgs = sampleImages(sampleUrls, 8);
    finalProduct['imageUrls'] = sampleImgs;
  } else {
    const productImages = profileImages(imageUrls, 10);
    finalProduct['imageUrls'] = productImages;
  }
  return finalProduct;
});

const url = 'mongodb+srv://root:rE9EvYIQe91rR9mt@cluster0-o5gfo.mongodb.net/Images?retryWrites=true&w=majority';

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;

db.dropDatabase(function(err, result) {
  console.log('collection dropped');
});


db.on('error', console.error.bind(console, 'connection error:'));



var db = mongoose.connection;
db.once('open', function() {
  console.log('opening');

  var imageSchema = new mongoose.Schema({
    productNumber: String,
    imageUrls: {
      type: Array,
      default: undefined
    }
  });

  var Image = mongoose.model('images', imageSchema);
  Image.insertMany(productListWithImages, (err, response) => {
    if (err) {
      console.log('error', err);
    } else {
      db.close();
    }
  });
});





module.exports.insertSeed;
