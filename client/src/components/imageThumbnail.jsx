import React from 'react';

const ImageThumbnail = ({image}) => {

  if (image === 'empty') {
    return ( <div>Please Wait while this image loads</div>);
  } else {
    return (
      <div>
        <img className="thumbnail" src={`${image}`} />
      </div>
    );
  }
};





export default ImageThumbnail;