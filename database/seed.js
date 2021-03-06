const mongoose = require('mongoose');
const {profileImages, sampleImages, createImageUrl} = require('./dbHelper.js');
const productList = require('./sample_products.js');

const s3FolderUrl = 'https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/Fec+pictures/';
const s3SampleUrl = 'https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/';
const s3ThumbnailUrl = 'https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/ImagePhotosThumbnail/';
const s3SampleThumbnailUrl = 'https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SamplePhotosThumbnail/';
const s3sampleImageQuantity = 8;
const s3ImageQuantity = 31;

const productListWithImages = productList.map((product, k) => {
  const imageUrls = [];
  const imageThumbnailUrls = [];
  const sampleUrls = [];
  const sampleThumbnailUrls = [];
  const finalProduct = {};

  for (let i = 0; i < s3ImageQuantity; i++) {
    const url = createImageUrl(s3FolderUrl, 'image', i + 1, '.jpg');
    imageUrls.push(url);
    const thumbnailUrl = createImageUrl(s3ThumbnailUrl, 'image', i + 1, '.jpg');
    imageThumbnailUrls.push(thumbnailUrl);

    if (i < s3sampleImageQuantity) {
      const sampleUrl = createImageUrl(s3SampleUrl, 'pokenatomy', i + 1, '.jpg');
      sampleUrls.push(sampleUrl);
      const sampleThumbnailUrl = createImageUrl(s3SampleThumbnailUrl, 'pokenatomy', i + 1, '.jpg');
      sampleThumbnailUrls.push(sampleThumbnailUrl);
    }
  }
  finalProduct['productNumber'] = product['productNumber'];
  if (k === 0) {
    const sampleImgs = sampleImages(sampleUrls, sampleThumbnailUrls, 8);
    finalProduct['imageUrls'] = sampleImgs[0];
    finalProduct['imageThumbnailUrls'] = sampleImgs[1];
  } else {
    const productImages = profileImages(imageUrls, imageThumbnailUrls, 10);
    finalProduct['imageUrls'] = productImages[0];
    finalProduct['imageThumbnailUrls'] = productImages[1];
  }
  return finalProduct;
});
// For use with cloud database: comment out if running locally
const url = 'mongodb+srv://root:rE9EvYIQe91rR9mt@cluster0-o5gfo.mongodb.net/Images?retryWrites=true&w=majority';
// uncomment if running from local database
// const url = 'mongodb://localhost/Images';
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;

db.dropDatabase(function(err) {
  db.on('error', console.error.bind(console, 'connection error:'));


  var imageSchema = new mongoose.Schema({
    productNumber: String,
    imageUrls: {
      type: Array,
      default: undefined
    },
    imageThumbnailUrls: {
      type: Array,
      default: undefined,
    }
  });

  var Image = mongoose.model('images', imageSchema);
  Image.insertMany(productListWithImages, (err, response) => {
    if (err) {
      console.error(err);
    } else {
      db.close();
    }
  });

});


module.exports.insertSeed;
