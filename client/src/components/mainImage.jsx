import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PopupZoom from './popupZoom.jsx';

const MainImage = ({ mainImage, arrowClick }) => {
  return (
    <Fragment>
      <div id='mainimagecontainer'>
        <img id='mainimage' onClick={} src={mainImage} />
      </div>
      <div></div>
      <div id='favorites'>
        <FontAwesomeIcon icon='heart' />
      </div>
      <div className='nav-prev' onClick={(e) => { arrowClick(e.currentTarget) }} >
        <FontAwesomeIcon icon='chevron-left' />
      </div>
      <div className='nav-next' onClick={(e) => { arrowClick(e.currentTarget) }} >
        <FontAwesomeIcon icon='chevron-right' />
      </div>
    </Fragment>
  );
};


export default MainImage;