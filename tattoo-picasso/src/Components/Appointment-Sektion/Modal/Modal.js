import React from 'react';
import './Modal.css';

const Modal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>Vielen Dank für Ihre Nachricht. Wir werden uns schnellstmöglichst bei Ihnen melden.</p>
        <div className="close" onClick={onClose}>&times;</div>
      </div>
    </div>
  );
};

export default Modal;
