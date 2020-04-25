import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({children, open, onClose}) => (
  open
    ? ReactDOM.createPortal(
        <div id='expanded-overlay' className = 'overlay'>
          <div className='modal'>
            <div id='close-container'>
              <div className='modal-close' onClick={() => {onClose()}}>&times;</div>
            </div>
              <div id='modal-content'>
                {children}
              </div>
          </div>
        </div>,
      document.body
    ): null
);


export default Modal;