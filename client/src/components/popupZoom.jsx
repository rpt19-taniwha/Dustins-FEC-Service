import React, { Fragment } from 'react';
import Popup from 'reactjs-popup';

const Zoom = ({ mainImage, mainImageHover }) => (
    <Popup trigger={<img id='mainimage'src={mainImage} />} >
      <div className='overlay' >
      <img id='zoomimage'src={mainImage} />
      </div>
    </Popup>
);


export default Zoom;