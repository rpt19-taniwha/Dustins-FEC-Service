import React, {Fragment} from 'react';



const MainImage = ({mainImage}) => {
  if (mainImage === '') {
    return (<Fragment>Please wait for the main image to load</Fragment>);
  } else {

    return (<Fragment>
      <img id='mainimage'src={mainImage}/>
      <div id='favorites'></div>
      <div className='nav-prev'></div>
      <div className='nav-next'></div>
    </Fragment>

    );
  }
};


export default MainImage;