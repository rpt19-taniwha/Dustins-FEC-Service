const express = require('express');
const app = express();
const path = require('path');
const {db, sampleProductQuery} = require('../database/index.js')
const port = 8000;
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '..', 'public')));



app.get('/sampleProduct', (req, res) => {
  sampleProductQuery({"productNumber": "549504785"}, (err, sampleProduct) => {
    if (err) {
      throw err;
    } else {
      let productInfo = JSON.stringify(sampleProduct);
      console.log('sampleProduct', sampleProduct);
      res.send(productInfo);
      res.end();
    }

  });
});


app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});