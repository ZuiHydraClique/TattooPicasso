import React, { useState } from 'react';
import './Appointment.css';
import Modal from './Modal/Modal.js';

import emailjs from 'emailjs-com';

function Appointment() {
  const [formData, setFormData] = useState({
    user_firstname: '',
    user_lastname: '',
    user_phonenumber: '',
    user_email: '',
    user_message: '',
  });

  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Prüfen, ob die Pflichtfelder ausgefüllt sind
    if (!formData.user_firstname.trim()) {
      newErrors.user_firstname = 'Bitte geben Sie Ihren Vornamen ein.';
    }
    if (!formData.user_lastname.trim()) {
      newErrors.user_lastname = 'Bitte geben Sie Ihren Nachnamen ein.';
    }
    if (!formData.user_email.trim()) {
      newErrors.user_email = 'Bitte geben Sie Ihre E-Mail-Adresse ein.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .sendForm("service_qssvxf8", "template_0e94kbe", e.target, "HMTkyNZjAXRKX8-8-")
        .then((res) => {
          console.log(res);
          setShowModal(true);
        })
        .catch((err) => console.log(err));
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div id="appointment-headline">Kontakt</div>

      <div id="whole-appointmentinput-box">
        <form id="inner-appointmentinput-box" onSubmit={sendEmail}>
          <div className="single-input">
            <div className="input-text">Name *</div>
            <div id="name-inputs">
                <div className="full-input">
                    <input
                        className="half-input"
                        name="user_firstname"
                        type="text"
                        value={formData.user_firstname}
                        onChange={(e) => setFormData({ ...formData, user_firstname: e.target.value })}
                    ></input>
                    {errors.user_firstname && (
                        <div className="error-message">{errors.user_firstname}</div>
                    )}
                </div>
                <div className="full-input">
                    <input
                        className="half-input"
                        name="user_lastname"
                        type="text"
                        value={formData.user_lastname}
                        onChange={(e) => setFormData({ ...formData, user_lastname: e.target.value })}
                    ></input>
                    {errors.user_lastname && (
                        <div className="error-message">{errors.user_lastname}</div>
                    )}
                </div>
              
            </div>
          </div>

          <div className="single-input">
            <div className="input-text">Telefonnummer für Rücksprachen</div>
            <div>
              <input
                className="reg-input"
                name="user_phonenumber"
                type="tel"
                value={formData.user_phonenumber}
                onChange={(e) => setFormData({ ...formData, user_phonenumber: e.target.value })}
              ></input>
            </div>
          </div>

          <div className="single-input">
            <div className="input-text">E-Mail *</div>
            <div className="input-field">
              <input
                className="reg-input"
                name="user_email"
                type="text"
                value={formData.user_email}
                onChange={(e) => setFormData({ ...formData, user_email: e.target.value })}
              ></input>
              {errors.user_email && <div className="error-message">{errors.user_email}</div>}
            </div>
          </div>

          <div className="single-input">
            <div className="input-text">
              Schreiben Sie uns mehr Informationen über das gewünschte Tattoo!
            </div>
            <div>
              <input
                className="reg-input"
                name="user_message"
                type="text"
                value={formData.user_message}
                onChange={(e) => setFormData({ ...formData, user_message: e.target.value })}
              ></input>
            </div>
          </div>

          <div id="pflichtfeld">* Pflichtfelder</div>

          <div id="button-line">
            <button type="submit" value="Send" id="submit-button">
              Absenden
            </button>
          </div>
        </form>
      </div>
      {showModal && (
        <Modal onClose={closeModal} />
      )}
    </div>
  );
}

export default Appointment;
