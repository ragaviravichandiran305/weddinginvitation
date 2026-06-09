
import React from "react";
import "./RSVP.css";

function RSVP() {
  return (
    <div className="rsvp-container">

      <h1>RSVP | வருகை உறுதி</h1>

      <form className="rsvp-form">

        {/* NAME */}
        <input type="text" placeholder="Name | பெயர்" />

        {/* PHONE */}
        <input type="tel" placeholder="Phone | தொலைபேசி" />

        {/* GUESTS */}
        <input type="number" placeholder="Number of Guests | விருந்தினர்கள்" />

        {/* ATTENDANCE */}
        <select>
          <option>Attendance | வருகை</option>
          <option>Yes | ஆம்</option>
          <option>No | இல்லை</option>
        </select>

 

        {/* TRAVEL */}
        <select>
          <option>Travel Needed | பயணம் தேவை</option>
          <option>Yes | ஆம்</option>
          <option>No | இல்லை</option>
        </select>

        {/* ARRIVAL TIME */}
        <input type="time" placeholder="Arrival Time | வருகை நேரம்" />

        {/* GIFT MESSAGE */}
   

        {/* BUTTON (optional but good UI) */}
        <button type="button">Submit 💌</button>

      </form>

    </div>
  );
}

export default RSVP;