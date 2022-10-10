import React from 'react';
import './Appointment.css';

import emailjs from 'emailjs-com';

function Appointment() {
    
    const setCookie = () => {
        document.cookie = 'dark_mode=true; max-age=604800';
        console.log("Cookie set!");
    };

    const getCookie = () => {
        console.log(document.cookie);
    };
    
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm("service_l7fn0d8", "template_eu4xloo", e.target, "zaUB4b5MvVHESSr_u")
        .then(res => {
            console.log(res); 
        }).catch(err => console.log(err));
    }

    return (
        <div style={{ 
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <div id="appointment-headline">
                Termin
            </div>

            <div id="whole-appointmentinput-box">
                <form id="inner-appointmentinput-box" onSubmit={sendEmail}>

                    <div className="single-input">
                        <div className="input-text">Name *</div>
                        <div id="name-inputs">
                            <input className="half-input" name="user_firstname" type="text"></input>
                            <input className="half-input" name="user_lastname" type="text"></input>
                        </div>
                    </div>

                    <div className="single-input">
                        <div className="input-text">
                            Telefonnummer für Rücksprachen
                        </div>
                        <div>
                            <input className="reg-input" name="user_phonenumber" type="text"></input>
                        </div>
                    </div>

                    <div className="single-input">
                        <div className="input-text">
                            E-Mail *
                        </div>
                        <div>
                            <input className="reg-input" name="user_email" type="text"></input>
                        </div>
                    </div>

                    <div className="single-input">
                        <div className="input-text">Schreiben Sie uns mehr Informationen über das gewünschte Tattoo!</div>
                        <div>
                            <input className="reg-input" name="user_message" type="text"></input>
                        </div>
                    </div>

                    <div id="button-line">
                        <button type="submit" id="submit-button">
                                Absenden
                        </button>
                    </div>

                </form>
            </div>
        </div>
  );
}

export default Appointment;
