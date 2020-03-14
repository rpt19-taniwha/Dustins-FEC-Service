const https = require('https');

// randomizer to be used to get a random index out of an array of picture urls
const createRandomQuantity = (max) => {
  return Math.floor(Math.random() * max);
};

// creates an array of a random number of random urls ready to be attached to a product object
const createRandomImageProfiles = (images, maxImgQty) => {
    //image urls
    let imgs = [...images];
    console.log('imgs', imgs);
    // stores the image urls
    const singleProfileImages = [];

    // the number of urls to store in singleProfileImages
    const numberOfImages = createRandomQuantity(maxImgQty) || 1;

    //populates singleProfileImages with images urls
    for (let j = 0; j < numberOfImages; j++) {
      const index = createRandomQuantity(imgs.length);
      singleProfileImages.push(imgs[index]);
      //removes the used image from the imgs array to ensure no dupes
      imgs.splice(index, 1);
    }
  return singleProfileImages;
};

// creates an array of ordered urls for our sample product pokenatomy
const createSampleImageProfile = (images, numberOfImages) => {
  // stores images urls for sample
  const singleProfileImages = [];
  // populates singleProfileImages with urls
  for (let j = 0; j < numberOfImages; j++) {
    singleProfileImages.push(images[j]);
  }
  // console.log('singleProfileImages', singleProfileImages);
return singleProfileImages;s
};

// constructs the full file path for each url from pieces to avoid hardcoding
const createImageUrl = (folderUrl, name, i, fileType) => {
  return `${folderUrl}${name}/${i}${fileType}`;
};




module.exports = { profileImages: createRandomImageProfiles, sampleImages: createSampleImageProfile, createImageUrl: createImageUrl };