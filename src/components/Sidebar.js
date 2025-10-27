import React from 'react';

const Sidebar = ({ setPage, page }) => {
  const menus = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'patients', label: 'Patients' },
    { id: 'rendezvous', label: 'Rendez-vous' },
    { id: 'labo', label: 'Labo' },
    { id: 'facturation', label: 'Facturation' },
    { id: 'parametres', label: 'Paramètres' },
  ];
  return (
    <div className="sidebar">
      <h2>Clinique Numérique</h2>
      <ul>
        {menus.map(m=>(
          <li key={m.id} className={page===m.id ? 'active':''} onClick={()=>setPage(m.id)}>{m.label}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
