import React from 'react';
import MainImage from './mainImage.jsx';
import ImageList from './imageList.jsx';


const ImageView = ({images, mainImage, isZoomed, isExpanded, arrowClick, thumbnailClick, toggleExpand, toggleZoom}) => (
  <div id='imageviewcontainer'>
    <div id='thumbnailcontainer'>
      <ul>
        <ImageList
          images={images}
          thumbnailClick={thumbnailClick}
        />
      </ul>
    </div>
    <div id='mainimagecontainer'>
      <MainImage
        images={images}
        mainImage={mainImage}
        isZoomed={isZoomed}
        isExpanded={isExpanded}
        arrowClick={arrowClick}
        thumbnailClick={thumbnailClick}
        toggleExpand={toggleExpand}
        toggleZoom={toggleZoom}
      />
    </div>
  </div>
);


export default ImageView;