import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const MainImage = ({mainImage, arrowClick}) => {
  return (<Fragment>
    <img id='mainimage'src={mainImage}/>
    <div id='favorites'>
      <FontAwesomeIcon icon='heart' />
    </div>
    <div className='nav-prev' onClick={(e) => {arrowClick(e.currentTarget)}} >
      <FontAwesomeIcon icon='chevron-left' className='right' onClick={(e) => {arrowClick(e.currentTarget)}} />
    </div>
    <div className='nav-next' onClick={(e) => {arrowClick(e.currentTarget)}} >
      <FontAwesomeIcon icon='chevron-right' className='right' onClick={(e) => {arrowClick(e.currentTarget)}} />
    </div>
  </Fragment>
  );

};


export default MainImage;