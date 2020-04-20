import React, { Fragment } from 'react';

const ImageThumbnail = ({ image, thumbnailClick, index }) => {
  return (
    <Fragment>
      <img
        src={image}
        onClick={(e) => { thumbnailClick(e.target, index) }}
      />
    </Fragment>
  );
};


export default ImageThumbnail;