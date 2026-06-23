import React, { useState } from "react";
import "./RSVP.css";

function RSVP() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    guests: 0,
    attendance: "",
    travelNeeded: "",
    arrivalTime: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // convert Yes/No → Boolean
    const payload = {
      name: form.name,
      phone: form.phone,
      guests: Number(form.guests),
      attendance: form.attendance === "yes",
      travelNeeded: form.travelNeeded === "yes",
      arrivalTime: form.arrivalTime
    };

    await fetch("http://localhost:8080/api/rsvps", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    alert("RSVP Submitted 💌 | வருகை பதிவு செய்யப்பட்டது 💌");

    setForm({
      name: "",
      phone: "",
      guests: 0,
      attendance: "",
      travelNeeded: "",
      arrivalTime: ""
    });
  };

  return (
    <div className="rsvp-container">

      <h1>RSVP | வருகை உறுதி</h1>

      <form className="rsvp-form" onSubmit={handleSubmit}>

        {/* NAME */}
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name | பெயர்"
        />

        {/* PHONE */}
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone | தொலைபேசி"
        />

        {/* GUESTS */}
        <input
          type="number"
          name="guests"
          value={form.guests}
          onChange={handleChange}
          placeholder="Guests | விருந்தினர்கள்"
        />

        {/* ATTENDANCE */}
        <select
          name="attendance"
          value={form.attendance}
          onChange={handleChange}
        >
          <option value="">Attendance | வருகை</option>
          <option value="yes">Yes | ஆம்</option>
          <option value="no">No | இல்லை</option>
        </select>

        {/* TRAVEL */}
        <select
          name="travelNeeded"
          value={form.travelNeeded}
          onChange={handleChange}
        >
          <option value="">Travel Needed | பயணம் தேவை</option>
          <option value="yes">Yes | ஆம்</option>
          <option value="no">No | இல்லை</option>
        </select>

        {/* ARRIVAL TIME (PLACEHOLDER FIX) */}
        <div className="time-wrapper">
          <label className="time-label">
            Arrival Time | வருகை நேரம்
          </label>
          <input
            type="time"
            name="arrivalTime"
            value={form.arrivalTime}
            onChange={handleChange}
          />
        </div>

        {/* BUTTON */}
        <button type="submit">
          Submit 💌 | அனுப்பவும் 💌
        </button>

      </form>

    </div>
  );
}

export default RSVP;