import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                  <FontAwesomeIcon icon='chevron-left' />
                </div>
                <div className='nav-next' onClick={(e) => { arrowClick(e.currentTarget) }} >
                  <FontAwesomeIcon icon='chevron-right' />
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
        <img id='mainimage' onClick={(e) => {toggleExpand()}} src={mainImage} />
        <div id='favorites'>
          <FontAwesomeIcon icon='heart' />
        </div>
        <div className='nav-prev' onClick={(e) => { arrowClick(e.currentTarget) }} >
          <FontAwesomeIcon icon='chevron-left' />
        </div>
        <div className='nav-next' onClick={(e) => { arrowClick(e.currentTarget) }} >
          <FontAwesomeIcon icon='chevron-right' />
        </div>
      </div>
        {popUp(isExpanded)}
    </Fragment>
  );
};


export default MainImage;