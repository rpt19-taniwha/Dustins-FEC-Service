const mongoose = require('mongoose');
// const profileImages = require('./dbHelpler.js/index.js');
mongoose.connect('mongodb://localhost/Images', {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', () => {
  db.dropDatabase(function(err, result) {
    console.log('collection dropped');
  });
});

db.once('open', function() {
  console.log('we\'re connected!');

  var imageSchema = new mongoose.Schema({
    productId: String,
    imageUrl: String
  });

  var Image = mongoose.model('Image', imageSchema);

  var product1 = new Image({'productId': '0001222', 'imageUrl':'/new/imageUrl'});

  product1.save(function (err, product) {
    if (err) {
      return console.error(err);
    }
    console.log('product', product);
    db.close();

  });

});