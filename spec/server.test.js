const request = require('request');


test('makes api request to the /product/:productNumber endpoint', (done) => {
  request('http://localhost:8000/product/549504785', function (error, response, body) {
    if (error) {
      console.error('error', error);
      done();
    } else {
      const product = JSON.parse(body);
      expect(response.statusCode).toBe(200);
      expect(product.productNumber).toBe('549504785');
      expect(product.imageUrls.length).toBe(8);
      expect(product.imageUrls[5]).toBe('https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy5.jpg');
      done();
    }
  });
});