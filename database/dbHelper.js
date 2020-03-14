const https = require('https');

const createRandomQuantity = (max) => {
  return Math.floor(Math.random() * max);
};


const maxImagesPerProfile = 10;

const getProfileUrls = (url) => new Promise((resolve, reject) => {
  return https.get((url, response) => {
    const body = [];
    response.on('data', (chunk) => body.concat(chunk));
    response.on('end', () => resolve(JSON.stringify(body)));
  }).on('error', reject);
}).then((data) => {
  console.log('data', data);
}).catch((error) => {
  console.log('error fetching data', error);
});

const createRandomImageProfiles = (images, maxImgQuantity) => {
    const singleProfileImages = [];
    const numberOfImages = createRandomQuantity(maxImgQuantity);
    for (let j = 0; j < numberOfImages; j++) {
      const index = createRandomQuantity(images.length);
      console.log('index', index);
      singleProfileImages.push(images[index]);
    }
    console.log('singleProfileImages', singleProfileImages);
  return singleProfileImages;

};









module.exports = { profileImages: createRandomImageProfiles, getUrls: getProfileUrls};