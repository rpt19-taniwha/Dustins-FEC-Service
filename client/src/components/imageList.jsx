import React from 'react';
import ImageThumbnail from './imageThumbnail.jsx';

const ImageList = ({images, thumbnailClick}) => {
  if (!images) {
    images = [];
  }
  return images.length === 0 ? <li>No Images to Render</li> : images.map((image, i) => (
    <li className='imagelist'  key={image.toString()}>
      <ImageThumbnail
        image={image}
        thumbnailClick={thumbnailClick}
        index={i}
      />
    </li>
  ));
};

export default ImageList;

