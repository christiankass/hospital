import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Patients from './pages/Patients';
import RendezVous from './pages/RendezVous';
import Labo from './pages/Labo';
import Facturation from './pages/Facturation';
import Parametres from './pages/Parametres';
import './App.css';

function App(){
  const [page, setPage] = useState('dashboard');

  const renderPage = () => {
    switch(page){
      case 'dashboard': return <Dashboard />;
      case 'patients': return <Patients />;
      case 'rendezvous': return <RendezVous />;
      case 'labo': return <Labo />;
      case 'facturation': return <Facturation />;
      case 'parametres': return <Parametres />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar setPage={setPage} page={page} />
      <div className="main-content">
        <Header />
        <div className="page-area">
          {renderPage()}
        </div>
      </div>
    </div>
  );
}

export default App;
