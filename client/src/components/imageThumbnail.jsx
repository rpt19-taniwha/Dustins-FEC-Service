

import React, {Fragment} from 'react';



const ImageThumbnail = ({image}) => {
  if (image === 'empty') {
    return (<Fragment>image</Fragment>);
  } else {
    return (
      <Fragment>
        <img src={image}/>
      </Fragment>

    );
  }
};





export default ImageThumbnail;