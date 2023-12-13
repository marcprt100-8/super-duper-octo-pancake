// FilmForm.js

import React, { useState } from 'react';
import './App.css';

const FilmForm = ({ onAddFilm }) => {
  const [newFilm, setNewFilm] = useState({
    title: '',
    description: '',
    posterURL: '',
    note: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFilm({ ...newFilm, [name]: value });
  };

  const handleAddFilm = () => {
    // Appeler la fonction onAddFilm pour ajouter le nouveau film
    onAddFilm(newFilm);
    // Réinitialiser les champs du formulaire après l'ajout
    setNewFilm({
      title: '',
      description: '',
      posterURL: '',
      note: 0,
    });
  };

  return (
    <div className="film-form">
      <h2>Ajouter un nouveau film</h2>
      <label>
       
     <input type="text" name="title" value={newFilm.title} onChange={handleInputChange} />
      </label>
     
      {/* Ajoutez d'autres champs pour la description, l'URL de l'affiche, la note, etc. */}
      <button onClick={handleAddFilm}>Ajouter</button>
    </div>
  );
};

export default FilmForm;
