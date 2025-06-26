import React, { useEffect, useState } from "react";
import "./ImagePreloader.css";

export default function ImagePreloader({ images = [], children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (images.length === 0) {
      setLoading(false);
      return;
    }

    Promise.all(
      images.map((img) => {
        return new Promise((resolve, reject) => {
          const image = new Image();
          image.src = img;
          image.onload = resolve;
          image.onerror = reject;
        });
      })
    )
      .then(() => setLoading(false))
      .catch((err) => {
        console.error("Some images failed to preload", err);
        setLoading(false); // Continue even if some fail
      });
  }, [images]);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
      </div>
    );
  }

  return <>{children}</>;
}
