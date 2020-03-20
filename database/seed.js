const mongoose = require('mongoose');
const {profileImages, sampleImages, createImageUrl} = require('./dbHelper.js');
const productList = require('./sample_products.js');

mongoose.connect('mongodb://localhost/Images', {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;
const s3FolderUrl = 'https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/Fec+pictures/';
const s3SampleUrl = 'https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/';
const s3sampleImageQuantity = 8;
const s3ImageQuantity = 31;

db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', () => {
  db.dropDatabase(function(err, result) {
    console.log('collection dropped');
  });
});


const productListWithImages = productList.map((product, k) => {
  const imageUrls = [];
  const sampleUrls = [];
  const finalProduct = {};

  for (let i = 0; i < s3ImageQuantity; i++) {
    const url = createImageUrl(s3FolderUrl, 'image', i, '.jpg');
    imageUrls.push(url);

    if (i < s3sampleImageQuantity) {
      const sampleUrl = createImageUrl(s3SampleUrl, 'pokenatomy', i, '.jpg');
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

db.once('open', function() {
  console.log('we\'re connected!');

  var imageSchema = new mongoose.Schema({
    productNumber: String,
    imageUrls: {
      type: Array,
      default: undefined
    }
  });

  var Image = mongoose.model('Image', imageSchema);

  Image.insertMany(productListWithImages, (err, response) => {
    if (err) {
      console.log('error', error);
    } else {
      console.log('db insertion complete', response);
      db.close();
    }
  });
});