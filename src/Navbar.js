// Navbar.js
import React from 'react';
import './Navbar.css'; // Assurez-vous d'importer le fichier de style pour le Navbar

const Navbar = ({
  onTitleChange,
  onNoteChange,
  filteredNote,
  onFilterSubmit,
}) => {
  return (
    
    <nav className="navbar">
        <img src="/img/logo.png" alt="Logo" className="logo" />
      <ul>
        <li><a href="/">Nouveauté</a></li> 
        
        <li><a href="/a-propos">À propos</a></li>
        <li><a href="/informations">Informations</a></li>
        <li>
          
          <input type="text" id="title" onChange={onTitleChange} />
        </li>
        <li>
          <button onClick={onFilterSubmit}>search</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
