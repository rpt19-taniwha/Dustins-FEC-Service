const express = require('express');
const app = express();
const path = require('path');
const {productQuery} = require('../database/index.js');
const port = 8000;
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '..', 'client/dist')));



app.get('/product/:productNumber', (req, res) => {
  const id = req.params['productNumber'];

  productQuery({'productNumber': id.toString}, (err, product) => {
    if (err) {
      throw err;
    } else {
      let productInfo = JSON.stringify(product);
      console.log('productInfo', productInfo);
      res.send(productInfo);
      res.end();
    }

  });
});


app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});