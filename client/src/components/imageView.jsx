import React from 'react';
import MainImage from './mainImage.jsx';
import ImageList from './imageList.jsx';




const ImageView = ({images, mainImage}) => (
  <div>
    <ImageList images={images} />
    <MainImage mainImage={mainImage} />
  </div>
);


export default ImageView;