import React, { useState } from 'react';

const Modal = ({ onClose, onSave }) => {
  const [nom, setNom] = useState('');
  const [age, setAge] = useState('');
  const [genre, setGenre] = useState('Homme');

  const handle = (e) => {
    e.preventDefault();
    onSave({ nom, age, genre });
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Ajouter un patient</h3>
        <form onSubmit={handle}>
          <label>Nom complet</label>
          <input value={nom} onChange={e=>setNom(e.target.value)} required />
          <label>Âge</label>
          <input type="number" value={age} onChange={e=>setAge(e.target.value)} required />
          <label>Genre</label>
          <select value={genre} onChange={e=>setGenre(e.target.value)}>
            <option>Homme</option>
            <option>Femme</option>
          </select>
          <div style={{display:'flex',justifyContent:'flex-end',gap:8,marginTop:12}}>
            <button type="button" className="btn ghost" onClick={onClose}>Annuler</button>
            <button type="submit" className="btn">Enregistrer</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
