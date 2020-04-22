const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const compression = require('compression');
const {db, productQuery} = require('../database/index.js');
// const port = process.env.Port || 8000;

// from localhost
const port = process.env.Port || 8001;

const rootPath = path.join(__dirname, '..', 'client/dist/')

app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static(rootPath));

app.get('/listing/:productNumber', (req, res) => {
  res.sendFile('index.html', {
    root: `${rootPath}`
  });
});

app.get('/product/:productNumber', (req, res) => {
  const id = req.params['productNumber'];
  productQuery({'productNumber': id.toString()}, (err, product) => {
    if (err) {
      throw err;
    } else {
      const productInfo = JSON.stringify(product);
      res.send(productInfo);
      res.end();
    }
  });
});

app.get('/mainImage/:productNumber', (req, res) => {
  const id = req.params['productNumber'];
  productQuery({'productNumber': id.toString}, (err, product) => {
    if (err) {
      throw err;
    } else {
      console.log('keys', product._doc.imageThumbnailUrls[0]);

      const mainImageThumbnail = product._doc.imageThumbnailUrls[0]

      res.end(mainImageThumbnail);
    }
  });
});


app.listen(port, () => {
  // console.log(`App is listening on port: ${port}`);
});