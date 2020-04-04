import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Popup from 'reactjs-popup';
import Zoom from './popupZoom.jsx'



const MainImage = ({ mainImage, arrowClick, mainImageHover }) => {
  return (
  <Fragment>
    <Zoom
      mainImage={mainImage}
      mainImageHover={mainImageHover}
    />
    <div id='favorites'>
      <FontAwesomeIcon icon='heart' />
    </div>
    <div className='nav-prev' onClick={(e) => {arrowClick(e.currentTarget)}} >
      <FontAwesomeIcon icon='chevron-left' />
    </div>
    <div className='nav-next' onClick={(e) => {arrowClick(e.currentTarget)}} >
      <FontAwesomeIcon icon='chevron-right' />
    </div>
  </Fragment>
  );
};


export default MainImage;