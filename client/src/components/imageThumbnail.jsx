

import React, {Fragment} from 'react';



const ImageThumbnail = ({image, thumbnailHover}) => {
  return (
    <Fragment>
      <img src={image} onMouseEnter={(e) => {console.log('this', this), thumbnailHover(e.target)}}/>
    </Fragment>
  );
};






export default ImageThumbnail;