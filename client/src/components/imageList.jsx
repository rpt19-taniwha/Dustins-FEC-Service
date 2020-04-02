import React from 'react';
import ImageThumbnail from './imageThumbnail.jsx';

const ImageList = ({images, thumbnailHover}) => {
  return images.map((image, i) => (
    <li className='imagelist'>
      <ImageThumbnail
        image={image}
        thumbnailHover={thumbnailHover}
        index = {i}
        key={image.toString()}
      />
    </li>
  ));
};

export default ImageList;

