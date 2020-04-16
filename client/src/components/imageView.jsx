import React from 'react';
import MainImage from './mainImage.jsx';
import ImageList from './imageList.jsx';




const ImageView = ({images, mainImage, isHovering, arrowClick, thumbnailClick, hoverMainImage}) => (
  <div id='imageviewcontainer'>
    <ul id='thumbnailcontainer'>
      <ImageList
        images={images}
        thumbnailClick={thumbnailClick}
      />
    </ul>
    <div id='mainimagecontainer'>
      <MainImage
        mainImage={mainImage}
        arrowClick={arrowClick}
      />
    </div>
  </div>
);


export default ImageView;