// src/components/Modal.js
import React from 'react';
import './modal.css'; // Ensure you have a CSS file for styling
import popup from "../../assets/images/modal/leaftravels.jpeg"; // Image source

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={popup} alt="Popup" className="modal-image" />
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
