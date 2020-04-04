import React from 'react';
import ImageThumbnail from './imageThumbnail.jsx';

const ImageList = ({images, thumbnailHover}) => {
  return images.map((image, i) => (
    <li className='imagelist'  key={image.toString()}>
      <ImageThumbnail
        image={image}
        thumbnailHover={thumbnailHover}
        index = {i}

      />
    </li>
  ));
};

export default ImageList;

