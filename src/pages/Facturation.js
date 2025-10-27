import React from 'react';
import { useLocalStorage } from '../utils/storage';

const Facturation = () => {
  const [invoices, setInvoices] = useLocalStorage('invoices', [
    { id: 'inv_1', patient: 'Jean Dupont', amount: 150, paid: true },
    { id: 'inv_2', patient: 'Merveille Nkulu', amount: 80, paid: false }
  ]);

  const toggle = (id) => {
    setInvoices(invoices.map(i=> i.id===id ? {...i, paid: !i.paid} : i));
  };

  return (
    <div>
      <h1>Facturation</h1>
      <table className="table">
        <thead><tr><th>ID</th><th>Patient</th><th>Montant</th><th>Statut</th><th></th></tr></thead>
        <tbody>
          {invoices.map(i=>(
            <tr key={i.id}><td>{i.id}</td><td>{i.patient}</td><td>{i.amount} USD</td><td>{i.paid? 'Payé':'En attente'}</td><td><button className="btn ghost" onClick={()=>toggle(i.id)}>{i.paid? 'Annuler':'Marquer payé'}</button></td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Facturation;
