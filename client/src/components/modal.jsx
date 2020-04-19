import React, { Fragment} from 'react';
import ReactDOM from 'react-dom';

const Modal = ({children, open, onClose}) => (
  open
    ? ReactDOM.createPortal(
        <div className = 'overlay'>
          <div className='modal'>
            <div className='modal-close' onClick={() => {onClose()}}>&times;</div>
              {children}
          </div>
        </div>,
      document.body
    ): null
);
1






// ({ images, mainImage, isZoomed, arrowClick, thumbnailClick, mainImageClick }) => (

// );


export default Modal;