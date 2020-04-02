import React from 'react';
import ImageThumbnail from './imageThumbnail.jsx';

const ImageList = ({images, thumbnailHover}) => {
  return images.map((image) => (
    <li className='imagelist'>
      <ImageThumbnail
        image={image}
        thumbnailHover={thumbnailHover}
        key={image.toString()}
      />
    </li>
  ));
};

export default ImageList;

