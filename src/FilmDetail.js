import React from 'react';

const FilmDetail = ({ film, onClose }) => {
  return (
    <div className="film-detail">
      <h2>{film.title}</h2>
      <p>{film.description}</p>
      <video controls width="100%" height="auto">
        <source src={film.videoPath} type="video/mp4" />
      </video>
      <button onClick={onClose}>Fermer</button>
    </div>
  );
};

export default FilmDetail;
