import React from "react";
import "./Story.css";

function Story() {
  return (
    <div className="story-container">

      <h1 className="section-title">Our Story</h1>
      <h2 className="tamil-title">எங்கள் கதை</h2>

      <p className="story-text">
        Every love story is beautiful, but ours is our favorite ❤️
      </p>

      <p className="story-text tamil">
        ஒவ்வொரு காதல் கதையும் அழகானது, ஆனால் எங்களுடையது எங்களுக்கு மிகவும் பிடித்தது ❤️
      </p>

      {/* TIMELINE */}
      <div className="timeline">

        <div className="timeline-box">
          <h3>💫 First Meet</h3>
          <p>05.04.2026</p>
          <p className="tamil">முதல் சந்திப்பு</p>
        </div>

        <div className="timeline-box">
          <h3>💍 Engagement</h3>
          <p>12.04.2026</p>
          <p className="tamil">நிச்சயதார்த்தம்</p>
        </div>

        <div className="timeline-box">
          <h3>💒 Marriage</h3>
          <p>01.07.2026</p>
          <p className="tamil">திருமணம்</p>
        </div>

        <div className="timeline-box">
          <h3>🎉 Reception</h3>
          <p>05.07.2026</p>
          <p className="tamil">வரவேற்பு விழா</p>
        </div>

      </div>

      <p className="story-extra">
        From strangers to friends, from friends to soulmates —
        our journey continues with love forever 💕
      </p>

      <p className="story-extra tamil">
        அந்நியர்களில் இருந்து நண்பர்கள், நண்பர்களில் இருந்து காதலர்கள் —
        எங்கள் பயணம் அன்புடன் என்றும் தொடர்கிறது 💕
      </p>

    </div>
  );
}

export default Story;