import React from "react";
import "./Events.css";

function Events() {
  return (
    <div className="event-container animate">

      <h1 className="title">Events | நிகழ்வுகள்</h1>

      <div className="event-card">

        {/* MAIN TITLE */}
        <h2>💍 Reception Ceremony | வரவேற்பு விழா</h2>

        {/* DATE */}
        <p>
          📅 Date | தேதி: <b>05.07.2026</b>
        </p>

        {/* TIME */}
        <p>
          🕙 Time | நேரம்: <b>10:00 AM – 2:00 PM</b>
        </p>

        {/* PLACE */}
        <p>
          📍 Place | இடம்: <b>K.S.V Mahal, Mecheri, Salem</b><br />
          <span className="tamil">கே.எஸ்.வி மஹால், மேச்சேரி, சேலம்</span>
        </p>

        <hr />

        {/* INVITE MESSAGE */}
        <p className="invite">
          With love and happiness, we warmly invite you to join our special day 💕
        </p>

        <p className="invite tamil">
          அன்பும் மகிழ்ச்சியுடன், எங்கள் சிறப்பு நாளில் கலந்து கொள்ள அன்புடன் அழைக்கிறோம் 💕
        </p>

        <p className="invite">
          Your presence will make our celebration more joyful ✨
        </p>

        <p className="invite tamil">
          உங்கள் வருகை எங்கள் விழாவை மேலும் மகிழ்ச்சியாக மாற்றும் ✨
        </p>

        {/* EXTRA SMALL NOTE */}
        <p className="invite">
          Come and bless the couple 💖
        </p>

        <p className="invite tamil">
          வந்து மணமக்களை ஆசீர்வதிக்கவும் 💖
        </p>

      </div>

    </div>
  );
}

export default Events;