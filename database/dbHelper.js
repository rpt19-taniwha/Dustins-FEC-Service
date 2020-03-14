const https = require('https');

const createRandomQuantity = (max) => {
  return Math.floor(Math.random() * max);
};

const createRandomImageProfiles = (images, maxImgQuantity) => {
    const singleProfileImages = [];
    const numberOfImages = createRandomQuantity(maxImgQuantity);
    for (let j = 0; j < numberOfImages; j++) {
      const index = createRandomQuantity(images.length);
      singleProfileImages.push(images[index]);
    }
    console.log('singleProfileImages', singleProfileImages);
  return singleProfileImages;
};

const createSampleImageProfile = (images, numberOfImages) => {
  const singleProfileImages = [];
  for (let j = 0; j < numberOfImages; j++) {
    singleProfileImages.push(images[j]);
  }
  console.log('singleProfileImages', singleProfileImages);
return singleProfileImages;
};


const createImageUrl = (folderUrl, name, i, fileType) => {
  return `${folderUrl}${name}/${i}/${fileType}`;

};



// https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/Fec+pictures/image1.jpg










module.exports = { profileImages: createRandomImageProfiles, sampleImages: createSampleImageProfile, createImageUrl: createImageUrl };