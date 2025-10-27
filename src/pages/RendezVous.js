import React, { useState } from 'react';
import { useLocalStorage } from '../utils/storage';

const RendezVous = () => {
  const [appointments, setAppointments] = useLocalStorage('appointments', [
    { id: 1, patient: 'Jean Dupont', date: '2025-10-29', time: '10:00', doctor: 'Dr. Mabiala' },
    { id: 2, patient: 'Merveille Nkulu', date: '2025-10-30', time: '11:00', doctor: 'Dr. Kabila' }
  ]);

  const [form, setForm] = useState({ patient: '', date: '', time: '', doctor: '' });

  const add = () => {
    const next = [...appointments, { id: Date.now(), ...form }];
    setAppointments(next);
    setForm({ patient: '', date: '', time: '', doctor: '' });
  };

  return (
    <div>
      <h1>Rendez-vous</h1>
      <div style={{display:'flex',gap:8,marginBottom:12,alignItems:'center'}}>
        <input placeholder="Patient" value={form.patient} onChange={e=>setForm({...form, patient:e.target.value})} />
        <input type="date" value={form.date} onChange={e=>setForm({...form, date:e.target.value})} />
        <input type="time" value={form.time} onChange={e=>setForm({...form, time:e.target.value})} />
        <input placeholder="Médecin" value={form.doctor} onChange={e=>setForm({...form, doctor:e.target.value})} />
        <button className="btn" onClick={add}>Ajouter</button>
      </div>

      <table className="table">
        <thead><tr><th>Patient</th><th>Date</th><th>Heure</th><th>Médecin</th></tr></thead>
        <tbody>
          {appointments.map(a=>(
            <tr key={a.id}><td>{a.patient}</td><td>{a.date}</td><td>{a.time}</td><td>{a.doctor}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RendezVous;
