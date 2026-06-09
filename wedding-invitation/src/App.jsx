import React, { useState } from "react";
import "./index.css";

import Story from "./components/story/Story";
import Events from "./components/Events/Events";
import Gallery from "./components/Gallery/Gallery";
import RSVP from "./components/RSVP/RSVP";
import Location from "./components/Location/Location";

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    if (page === "home") {
      return (
        <div className="invite-center animate">
          <p className="reception">
            ✨ Reception Ceremony | வரவேற்பு விழா ✨
          </p>

          <h1 className="name">Ragavi & Gokul</h1>

          <h2 className="tamil-name">ராகவி ❤️ கோகுல்</h2>

          <p className="date">
            📅 05 July 2026 | ஜூலை 05, 2026 <br />
            🕙 10:00 AM – 2:00 PM | காலை 10:00 – மதியம் 2:00
          </p>

          <p className="note">
            With love from our families | எங்கள் குடும்பத்தின் அன்புடன்
          </p>
        </div>
      );
    }

    if (page === "story") {
      return <Story />;
    }

    if (page === "events") {
      return <Events />;
    }

    if (page === "gallery") {
      return <Gallery />
        
    }

    if (page === "rsvp") {
      return <RSVP />
    }

    if (page === "location") {
      return <Location />
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <button onClick={() => setPage("home")}>Home | முகப்பு</button>
        <button onClick={() => setPage("story")}>Our Story | எங்கள் கதை</button>
        <button onClick={() => setPage("events")}>Events | நிகழ்வுகள்</button>
        <button onClick={() => setPage("gallery")}>Gallery | புகைப்படங்கள்</button>
        <button onClick={() => setPage("rsvp")}>RSVP | வருகை உறுதி</button>
        <button onClick={() => setPage("location")}>Location | இடம்</button>
      </nav>

      {/* PAGE */}
      {renderPage()}

      {/* FOOTER */}
      <footer className="footer">
        <p>💍 Reception Invitation | வரவேற்பு அழைப்பிதழ்</p>
        <p className="tamil-footer">
          ராகவி ❤️ கோகுல் திருமண வரவேற்பு விழா
        </p>
      </footer>
    </>
  );
}

export default App;