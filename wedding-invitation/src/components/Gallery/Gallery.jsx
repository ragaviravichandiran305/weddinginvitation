import React, { useState, useEffect } from "react";
import "./Gallery.css";

const API = "http://localhost:8080/api/gallery";

function Gallery() {
  const [images, setImages] = useState([]);
  const [visible, setVisible] = useState(6);

  useEffect(() => {
    loadImages();
  }, []);

  // Load all images
  const loadImages = async () => {
    try {
      const res = await fetch(API);

      if (!res.ok) {
        throw new Error("Failed to fetch images");
      }

      const data = await res.json();
      setImages(data);
    } catch (err) {
      console.log("Load error:", err);
    }
  };

  // Upload images
  const handleUpload = async (e) => {
    const files = Array.from(e.target.files);

    for (let file of files) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch(`${API}/upload`, {
          method: "POST",
          body: formData,
        });

        if (!res.ok) {
          throw new Error("Upload failed");
        }

        const data = await res.json();

        // Add new image immediately to UI
        setImages((prev) => [...prev, data]);

      } catch (err) {
        console.log("Upload error:", err);
      }
    }

    e.target.value = "";
  };

  // Delete image
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${API}/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Delete failed");
      }

      setImages((prev) =>
        prev.filter((img) => img.id !== id)
      );
    } catch (err) {
      console.log("Delete error:", err);
    }
  };

  return (
    <div className="gallery-container">
      <h1>Gallery | புகைப்படங்கள்</h1>

      <p className="subtitle">
        Cherished memories of our special journey 💕
      </p>

      <p className="subtitle tamil">
        எங்கள் சிறப்பு தருணங்களின் இனிய நினைவுகள் 💕
      </p>

      <div className="upload-box">
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleUpload}
        />
      </div>

      <div className="gallery-grid">
        {images.slice(0, visible).map((img) => (
          <div className="image-card" key={img.id}>
            <img
              src={img.url}
              alt="Wedding Memory"
              loading="lazy"
            />

            <button
              className="delete-btn"
              onClick={() => handleDelete(img.id)}
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {visible < images.length && (
        <div className="see-more-container">
          <button
            className="see-more-btn"
            onClick={() => setVisible(images.length)}
          >
            See More Photos | மேலும் புகைப்படங்கள்
          </button>
        </div>
      )}
    </div>
  );
}

export default Gallery;