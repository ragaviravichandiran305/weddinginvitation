import React, { useState } from "react";
import "./Gallery.css";

function Gallery() {
  const [images, setImages] = useState([]);

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);

    const newImages = files.map((file) => ({
      url: URL.createObjectURL(file),
    }));

    setImages((prev) => [...prev, ...newImages]); // ✅ NOT REMOVE OLD IMAGES
  };

  return (
    <div className="gallery-container animate">

      <h1>Gallery | புகைப்படங்கள்</h1>

      {/* 💖 NEW SENTENCES */}
      <p className="subtitle">
        Cherished memories of our special journey 💕
      </p>

      <p className="subtitle tamil">
        எங்கள் அழகான நினைவுகள் மற்றும் சிறப்பு தருணங்கள் 💕
      </p>

      <p className="note">
        “Every picture tells our love story” ✨
      </p>

      <p className="note tamil">
        “ஒவ்வொரு படம் எங்கள் காதல் கதையை சொல்கிறது” ✨
      </p>

      {/* UPLOAD */}
      <input type="file" multiple accept="image/*" onChange={handleUpload} />

      {/* IMAGES */}
      <div className="gallery-grid">
        {images.map((img, i) => (
          <img key={i} src={img.url} alt="memory" />
        ))}
      </div>

    </div>
  );
}

export default Gallery;