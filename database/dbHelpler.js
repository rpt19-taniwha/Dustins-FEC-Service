const https = require('https');

const createRandomQuantity = (max) => {
  return Math.floor(Math.random() * max);
};

const maxImagesPerProfile = 10;

const dataRequest = (url) => new Promise((resolve, reject) => {
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

const createRandomImageProfiles = (images, profileQuantity,  maxImgQuantity) => {
  const imageProfiles = []

  for (let i = 0; i < profilequantity; i++) {
    const singleProfileImages = [];
    const numberOfImages = createRandomQuantity(maxImgQuantity);
    for (let j = 0; j < numberOfImages; j++) {
      const index = createRandomQuantity(profileQuantity);
      singleProfileImages.push(images[index]);
    }
    const imageProfile = {imageUrls: singleProfileImages};
    imageProfiles.push(imageProfile);
  }
  return imageProfiles;

};










module.exports = { profileImages: createRandomImageProfiles};