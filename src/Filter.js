// Filter.js

import React from 'react';

const Filter = ({ onTitleChange, onNoteChange, filteredTitle, filteredNote }) => {
  return (
    <div className="filter">
      <label>
        Filter by Title:
        <input type="text" value={filteredTitle} onChange={onTitleChange} />
      </label>
     
    </div>
  );
};

export default Filter;
