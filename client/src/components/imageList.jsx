import React from 'react';
import ImageThumbnail from './imageThumbnail.jsx';

const ImageList = ({images}) => {
  console.log('images in imageList', images);
  return images.map((image, i) => (
    <div>
      <ImageThumbnail
        image = {image}
        key = {i.toString()}
      />
    </div>
  ));
};

export default ImageList;

