import React, { Fragment } from 'react';
import ImageList from './imageList.jsx';
import Modal from './modal.jsx';

const MainImage = ({ images, mainImage, isZoomed, isExpanded, arrowClick, thumbnailClick, toggleExpand, toggleZoom}) => {
    const popUp = (condition) => (
      condition
        ? <Fragment>
            <Modal
              open={isExpanded}
              onClose={toggleExpand}
              isZoomed={isZoomed}
            >
              <div id='pop-up'>
                <div id='popup-main-overlay'>
                  <img
                    src={mainImage}
                    onClick={ (e) => { toggleZoom(e.target) }}
                  />
                </div>
                <div className='nav-prev' onClick={(e) => { arrowClick(e.currentTarget) }} >
                  <div class='nav-prev-icon'></div>
                </div>
                <div className='nav-next' onClick={(e) => { arrowClick(e.currentTarget) }} >
                <div class='nav-next-icon'></div>
                </div>
              </div >
              <div id='pop-up-image-list-container'>
                <ul id='pop-up-image-list'>
                  < ImageList
                    images={images}
                    thumbnailClick={thumbnailClick}
                  />
                </ul>

              </div>
            </Modal>
          </Fragment>
        : null
    );

  return (
    <Fragment>
      <div id='mainimagebackground'>
        <div id='cursor-styling'>
        <img id='mainimage' onClick={(e) => {toggleExpand()}} src={mainImage} />
        <span className='cursor-icon'></span>

        </div>

        <div id='favorites'>
          <div className='favorites-icon'></div>
        </div>
        <div className='nav-prev' onClick={(e) => { arrowClick(e.currentTarget) }} >
          <div class='nav-prev-icon'></div>
        </div>
        <div className='nav-next' onClick={(e) => { arrowClick(e.currentTarget) }} >
          <div class='nav-next-icon'></div>
        </div>
      </div>
        {popUp(isExpanded)}
    </Fragment>
  );
};


export default MainImage;