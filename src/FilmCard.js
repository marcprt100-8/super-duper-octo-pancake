import React, { useRef, useState } from 'react';
import './FilmCard.css';

const FilmCard = ({ title, description, posterURL, note, videoPath }) => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  let hoverTimer;

  const handleMouseEnter = () => {
    hoverTimer = setTimeout(() => {
      setIsHovered(true);
      if (videoRef.current) {
        videoRef.current.play().then(() => setIsVideoPlaying(true)).catch((error) => {
          console.error('Error playing video:', error);
        });
      }
    }, 2000);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimer);
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsVideoPlaying(false);
    }
  };

  return (
    <div className={`film-card ${isHovered ? 'video-hovered' : ''} ${isVideoPlaying ? 'video-playing' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {isHovered ? (
        <div className="video-overlay">
          <video ref={videoRef} width="100%" height="auto" loop muted onEnded={() => setIsVideoPlaying(false)}>
            <source src={videoPath} type="video/mp4" />
          </video>
        </div>
      ) : null}
      <div className="film-content">
        <img src={posterURL} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Note: {note}</p>
      </div>
    </div>
  );
};

export default FilmCard;
