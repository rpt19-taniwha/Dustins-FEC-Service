import React, { Fragment } from 'react';
// import Popup from 'reactjs-popup';

const PopupZoom = ({ mainImage }) => (
  <Fragment>
    <img id='mainimage'src={mainImage} />
      <div className='overlay' >
      <img id='zoomimage'src={mainImage} />
      </div>
  </Fragment>
);


export default PopupZoom;