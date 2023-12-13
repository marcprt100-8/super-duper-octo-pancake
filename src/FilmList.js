import React from 'react';
import FilmCard from './FilmCard';

const FilmList = ({ films, onSelectFilm }) => {
  return (
    <div className="film-list">
      {films.map((film) => (
        <div key={film.id} onClick={() => onSelectFilm(film)}>
          <FilmCard
            title={film.title}
            description={film.description}
            posterURL={film.posterURL}
            note={film.note}
            videoPath={film.videoPath}
          />
        </div>
      ))}
    </div>
  );
};

export default FilmList;
