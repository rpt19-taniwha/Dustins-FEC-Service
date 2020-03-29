import React from 'react';
import Image from 'react-image-resizer';

const ImageThumbnail = ({image}) => {
  if (image === 'empty') {
    return ( <div>image</div>);
  } else {
    return (
      <div className='thumbnail'>
        <Image
          src={image}
          height={75}
          width={75}
        />
      </div>
    );
  }
};





export default ImageThumbnail;