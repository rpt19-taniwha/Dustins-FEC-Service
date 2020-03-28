import React from 'react';
import ImageThumbnail from './imageThumbnail.jsx';

const ImageList = ({images}) => {
  return images.map((image, i) => (
    <div>
      <ImageThumbnail
        image={image}
        key={i.toString()}
        id={i.toString()}
      />
    </div>
  ));
};

export default ImageList;

