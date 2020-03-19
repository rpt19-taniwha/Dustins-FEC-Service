const express = require('express');
const app = express();
const path = require('path');
<<<<<<< HEAD
const {db, productQuery} = require('../database/index.js');
=======
const {productQuery} = require('../database/index.js');
>>>>>>> 8276d0a4610b5f711c46efcf89abb2344faf051f
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
      res.send(productInfo);
      res.end();
    }

  });
});


app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});