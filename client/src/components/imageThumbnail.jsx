
import React from 'react';
import Image from 'react-image-resizer';

import React, {Fragment} from 'react';


const ImageThumbnail = ({image}) => {
  if (image === 'empty') {
    return (<Fragment>image</Fragment>);
  } else {
    return (

      <div className='thumbnail'>
        <Image
          src={image}
          height={75}
          width={75}
        />
      </div>

      <Fragment>
        <img src={image}/>
      </Fragment>

    );
  }
};





export default ImageThumbnail;