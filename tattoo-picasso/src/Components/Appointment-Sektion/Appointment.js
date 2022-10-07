import React from 'react';
import './Appointment.css';

function Appointment() {
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
                <div id="inner-appointmentinput-box">
                    <div id="name-section">
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Appointment;
