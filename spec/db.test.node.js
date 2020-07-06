const {db, productQuery} = require('../database/index.js');
const productList = require('../database/sample_products');
const {profileImages, sampleImages, createImageUrl, createRandomQuantity} = require('../database/dbHelper.js');

/*db helper function tests **************************************************************/

test('the function createRandomQuantity takes in a maximum number and does not return the same number when called multiple times', () => {
  const max = 10;
  const randomNumber1 = createRandomQuantity(max);
  const randomNumber2 = createRandomQuantity(max);
  const randomNumber3 = createRandomQuantity(max);
  const randomNumber4 = createRandomQuantity(max);
  const randomNumbers = [randomNumber2, randomNumber2, randomNumber3, randomNumber4];

  expect(randomNumbers.every((val) => val === randomNumber1)).toBe(false);
});

test('creates a picture url out of a s3 folder url, name, id, filetype', () => {

  const s3FolderUrl = 'https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/Fec+pictures/';
  const s3SampleUrl = 'https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/';
  const samplePictureName = 'pokenatomy';
  const pictureNumber = 1;
  const genericPictureName = 'image';
  const pictureType = '.jpg';
  const sampleUrl = createImageUrl(s3SampleUrl, samplePictureName, pictureNumber, pictureType);
  const defaultUrl = createImageUrl(s3FolderUrl, genericPictureName, pictureNumber, pictureType);

  expect(sampleUrl).toBe('https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy1.jpg');
  expect(defaultUrl).toBe('https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/Fec+pictures/image1.jpg');
});

test('creates an array of all of the sample product images from the sampleUrls', () => {
  const dummyUrls = ['/a', '/b', '/c', '/d', '/e', '/f', '/g', '/h', 'i/', '/j', '/k', '/l', '/m', '/n', 'o'];
  const sampleImageProfile = sampleImages(dummyUrls, dummyUrls.length);

  expect(sampleImageProfile.length).toBe(dummyUrls.length);
  expect(sampleImageProfile[7]).toBe(dummyUrls[7]);
});

test('creates an array of product images between 1 and 10 images long from sampleUrls', () => {
  const dummyUrls = ['/a', '/b', '/c', '/d', '/e', '/f', '/g', '/h', 'i/', '/j', '/k', '/l', '/m', '/n', 'o'];
  const imageArray1 = profileImages(dummyUrls, 10);
  const imageArray2 = profileImages(dummyUrls, 10);
  const imageArray3 = profileImages(dummyUrls, 10);
  const imageArray4 = profileImages(dummyUrls, 10);
  const imageQtys = [imageArray1.length, imageArray2.length, imageArray3.length];
  expect(imageQtys.every((qty) => qty <= 10)).toBe(true);
  expect(imageQtys.every((qty) => qty === imageArray4.length)).toBe(false);

});

const sampleProduct = productList[0];
const sampleProductId = sampleProduct.productNumber;


/*db retrieval testing ***********************************************/


test(`makes database call to retrieve Pokenatomy pictures when ${sampleProductId} is queried`, (done) => {
  productQuery({productNumber: sampleProductId}, (err, contents) => {
    if (err) {
      done(err);
    } else {
      expect(contents.imageUrls.length).toBe(8);
      expect(contents.imageUrls[0]).toBe('https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy1.jpg');
      expect(contents.imageUrls[7]).toBe('https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy8.jpg');
      done();
    }
  });
});

//db seed insertion testing