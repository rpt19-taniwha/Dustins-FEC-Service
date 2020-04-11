const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const {db, productQuery} = require('../database/index.js');
const port = process.env.Port || 8000;

const rootPath = path.join(__dirname, '..', 'client/dist/')

app.use(cors());
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
      const data = {
        mainImage: product.imageUrls[0]
      };
      res.send(data);

      res.end();
    }
    db.close();
  });
});


app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});