import React from 'react';
import ImageThumbnail from './imageThumbnail.jsx';

const ImageList = ({images}) => {
  return images.map((image, i) => (
    <li className='imagelist'>
      <ImageThumbnail
        image={image}
        key={i.toString()}
        id={i.toString()}
      />
    </li>
  ));
};

export default ImageList;

