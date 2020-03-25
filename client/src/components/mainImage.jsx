import React from 'react';


const MainImage = ({mainImage}) => {
  console.log('mainImage', mainImage);
  if (mainImage === '') {
    return (<div>Please wait for the main image to load</div>);
  } else {
    return <div>
      <h1>mainImage</h1>
      <img className='standard'src={mainImage}></img>
    </div>;
  }

};


export default MainImage;