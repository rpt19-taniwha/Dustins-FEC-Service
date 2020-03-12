const mongoose = require('mongoose');
const {profileImages} = require('./dbHelper.js');
console.log('profile images', typeof profileImages);
const productList = require('./sample_products.js');
mongoose.connect('mongodb://localhost/Images', {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', () => {
  db.dropDatabase(function(err, result) {
    console.log('collection dropped');
  });
});

const productListWithImages = productList.map((product) => {
  const productImages = profileImages(['/image1', '/image2', '/image3', '/image4', '/image5', '/image6', '/image7', '/image8', '/image9', '/image10', '/image1', 'image11', '/image12', '/image13', '/image14', '/image15'], 10);
  product['imageUrls'] = productImages;
  return product;
});

db.once('open', function() {
  console.log('we\'re connected!');

  var imageSchema = new mongoose.Schema({
    productId: String,
    productName: String,
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
   }
  );
});