const express = require('express');
const app = express();
const path = require('path');
const {db, productQuery} = require('../database/index.js');
const port = process.env.Port || 8000;
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '..', 'client/dist')));



app.get('/product/:productNumber', (req, res) => {
  const id = req.params['productNumber'];

  productQuery({'productNumber': id.toString}, (err, product) => {
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
  console.log('id', id);
  productQuery({'productNumber': id.toString}, (err, product) => {
    if (err) {
      console.error('error', err);
    } else {
      const mainImage = product.imageUrls[0];
      res.send(mainImage);

      res.end();
    }
    db.close();
  });
});


app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});