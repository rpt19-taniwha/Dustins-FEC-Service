const mocha = require('mocha');
const chai = require('chai');
const jest = require('jest');
const {db, productQuery} = require('../database/index.js');
const server = require('../server/index.js');



const sampleProductId = '549504785';

test(`makes database call to retrieve Pokenatomy pictures when ${sampleProductId} is queried`, () => {

  productQuery({productNumber: sampleProductId}, (err, contents) => {

    if (err) {
    } else {
      expect(contents).to.have.property('imageUrls');
      expect(contents.imageUrls.length).toBe(8);
      expect(contents.imageUrls[0]).toBe('https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy/0.jpg');
      expect(contents.imageUrls[8]).to.Be('https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy/7.jpg');
    }
  });
});