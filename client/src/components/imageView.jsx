import React from 'react';
import MainImage from './mainImage.jsx';
import ImageList from './imageList.jsx';




const ImageView = ({images, mainImage}) => (
  <div id='imageviewcontainer'>
    <ul id='thumbnailcontainer'>
      <ImageList images={images} />
    </ul>
    <div id='mainimagecontainer'>
      <MainImage mainImage={mainImage} />

    </div>

  </div>
);


export default ImageView;