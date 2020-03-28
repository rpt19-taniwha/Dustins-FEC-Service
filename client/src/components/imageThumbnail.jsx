import React from 'react';

const ImageThumbnail = ({image, id}) => {
  if (image === 'empty') {
    return ( <div>image</div>);
  } else {
    return (
      <div>
        <img className="thumbnail" src={`${image}`} />
      </div>
    );
  }
};





export default ImageThumbnail;