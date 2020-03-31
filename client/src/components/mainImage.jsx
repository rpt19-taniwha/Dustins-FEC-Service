import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const MainImage = ({mainImage}) => {
  if (mainImage === '') {
    return (<Fragment>Please wait for the main image to load</Fragment>);
  } else {

    return (<Fragment>
      <img id='mainimage'src={mainImage}/>
      <div id='favorites'>
        <FontAwesomeIcon icon='heart' />
      </div>
      <div className='nav-prev'>
        <FontAwesomeIcon icon='chevron-left' />
      </div>
      <div className='nav-next'>
      <FontAwesomeIcon icon='chevron-right' />
      </div>
    </Fragment>

    );
  }
};


export default MainImage;