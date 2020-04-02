

import React, {Fragment} from 'react';



const ImageThumbnail = ({image, thumbnailHover, index}) => {
  return (
    <Fragment>
      <img src={image} onMouseEnter={(e) => {thumbnailHover(e.target, index)}}/>
    </Fragment>
  );
};






export default ImageThumbnail;