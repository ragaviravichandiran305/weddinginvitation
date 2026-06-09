
import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./Location.css";

function Location() {

  const mapLink =
    "https://maps.google.com/?q=K.S.V+Mahal+Mecheri+Salem";

  return (
    <div className="location-container animate">

      <h1>📍 Location | இடம்</h1>

      {/* 🏛️ VENUE NAME */}
      <h2>K.S.V Mahal</h2>
      <p className="tamil">கே.எஸ்.வி மஹால், மேச்சேரி</p>

      {/* 📍 ADDRESS */}
      <p className="address">
        K.S.V Mahal, Mecheri, Salem District, Tamil Nadu
      </p>

      {/* 🌐 GOOGLE MAP LINK */}
      <a href={mapLink} target="_blank" rel="noreferrer" className="map-link">
        Open in Google Maps 🌐
      </a>

      {/* 📱 QR CODE */}
      <div className="qr-box">
        <QRCodeCanvas value={mapLink} size={200} />
      </div>

      <p className="scan-text">
        📱 Scan QR Code to open location | இடத்தை திறக்க ஸ்கேன் செய்யவும்
      </p>

      {/* 🚗 DIRECTIONS */}
      <div className="info-box">
        <h3>🚗 Directions | வழிகாட்டுதல்</h3>
        <p>Near Mecheri Bus Stand</p>
        <p className="tamil">மேச்சேரி பஸ் நிலையம் அருகில்</p>
        <p>Parking Available</p>
        <p className="tamil">பார்க்கிங் வசதி உள்ளது</p>
      </div>

      {/* 🕒 TIME */}
      <div className="info-box">
        <h3>🕒 Event Time | நிகழ்வு நேரம்</h3>
        <p>05 July 2026 | 10:00 AM – 2:00 PM</p>
        <p className="tamil">05 ஜூலை 2026 | காலை 10 மணி – மதியம் 2 மணி</p>
      </div>

      {/* 💖 INVITATION */}
      <div className="invite-box">
        <p>
          We warmly welcome you to our special celebration 💕
        </p>
        <p className="tamil">
          எங்கள் சிறப்பு விழாவிற்கு உங்களை அன்புடன் வரவேற்கிறோம் 💕
        </p>
      </div>

    </div>
  );
}

export default Location;