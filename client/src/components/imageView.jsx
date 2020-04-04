import React from 'react';
import MainImage from './mainImage.jsx';
import ImageList from './imageList.jsx';




const ImageView = ({images, mainImage, arrowClick, thumbnailHover, mainImageHover}) => (
  <div id='imageviewcontainer'>
    <ul id='thumbnailcontainer'>
      <ImageList
        images={images}
        thumbnailHover={thumbnailHover}
      />
    </ul>
    <div id='mainimagecontainer'>
      <MainImage
        mainImage={mainImage}
        arrowClick={arrowClick}
        mainImageHover={mainImageHover}
      />
    </div>
  </div>
);


export default ImageView;