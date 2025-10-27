import React, { useState } from 'react';
import Modal from '../components/Modal';
import { useLocalStorage } from '../utils/storage';

const Patients = () => {
  const [patients, setPatients] = useLocalStorage('patients', [
    { id: 1, nom: 'Jean Dupont', age: 35, genre: 'Homme' },
    { id: 2, nom: 'Marie Lenoir', age: 29, genre: 'Femme' },
    { id: 3, nom: 'Kalambayi Christian', age: 31, genre: 'Homme' }
  ]);
  const [show, setShow] = useState(false);

  const add = (p) => {
    const next = [...patients, { id: Date.now(), ...p }];
    setPatients(next);
    setShow(false);
  };

  return (
    <div>
      <h1>Patients</h1>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:12}}>
        <div></div>
        <div>
          <button className="btn" onClick={()=>setShow(true)}>+ Ajouter un patient</button>
        </div>
      </div>

      <table className="table">
        <thead><tr><th>ID</th><th>Nom</th><th>Âge</th><th>Genre</th></tr></thead>
        <tbody>
          {patients.map(p=>(
            <tr key={p.id}><td>{p.id}</td><td>{p.nom}</td><td>{p.age}</td><td>{p.genre}</td></tr>
          ))}
        </tbody>
      </table>

      {show && <Modal onClose={()=>setShow(false)} onSave={add} />}
    </div>
  );
};

export default Patients;
