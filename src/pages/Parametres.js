import React from 'react';

const Parametres = () => {
  return (
    <div>
      <h1>Paramètres</h1>
      <p>Configurer les informations de l’hôpital, les utilisateurs et les préférences.</p>
      <div className="form-section">
        <label>Nom de l’hôpital</label>
        <input type="text" placeholder="Clinique Numérique" />
        <label>Adresse</label>
        <input type="text" placeholder="Kinshasa, RDC" />
        <div style={{marginTop:12}}>
          <button className="btn">Enregistrer</button>
        </div>
      </div>
    </div>
  );
};

export default Parametres;
