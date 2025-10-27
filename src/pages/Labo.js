import React from 'react';

const Labo = () => {
  return (
    <div>
      <h1>Laboratoire</h1>
      <p>Suivi des analyses médicales en cours et terminées.</p>
      <ul className="activity-list">
        <li>Analyse sanguine — Marie Lenoir — En attente</li>
        <li>Test COVID — Jean Dupont — Terminé</li>
      </ul>
    </div>
  );
};

export default Labo;
