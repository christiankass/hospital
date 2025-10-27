import React from 'react';
import Card from '../components/Card';

const Dashboard = () => {
  return (
    <div>
      <h1>Tableau de bord</h1>
      <div className="grid">
        <Card title="Hospitalisés" number="30" />
        <Card title="En attente" number="120" />
        <Card title="Sortis" number="25" />
        <Card title="Factures" number="8" />
      </div>

      <div style={{display:'flex',gap:16}}>
        <div style={{flex:1}} className="panel">
          <h3>Activité récente</h3>
          <ul>
            <li className="small">Ajout de rendez-vous — Nathalie Martin</li>
            <li className="small">Nouvel enregistrement — Elise Dupont</li>
            <li className="small">Ajout de sortie — Julien Dubois</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
