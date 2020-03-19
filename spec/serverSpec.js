const mocha = require('mocha');
const chai = require('chai');
const {db, productQuery} = require('../database/index.js');
const server = require('../server/index.js');


describe('database', function() {

  const sampleProductId = '549504785';

  it(`should return the sample Pokenatomy Object when product number ${sampleProductId} is queried`, function() {
    productQuery({productId: sampleProductId}, (err, contents) => {
      if (err) {
        done(err);
      } else {
        expect(contents).to.have.property('imageUrls');
        expect(contents.imageUrls.length).to.equal(8);
        expect(contents.imageUrls[0]).to.equal('https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy/0.jpg');
        expect(contents.imageUrls[8]).to.equal('https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy/7.jpg')
        done();
      }
    });

  });

});