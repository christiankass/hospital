import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <div style={{display:'flex',gap:12,alignItems:'center'}}>
        <div style={{fontWeight:700,fontSize:18}}>Bienvenue — Clinique Numérique</div>
      </div>
      <div style={{display:'flex',alignItems:'center',gap:12}}>
        <div className="search">
          <input placeholder="Rechercher..." style={{border:0,outline:'none'}}/>
        </div>
        <div style={{textAlign:'right'}}>
          <div style={{fontWeight:700}}>Dr. Mbala</div>
          <div style={{fontSize:12,color:'#6B7280'}}>Administrateur</div>
        </div>
        <div className="avatar">DM</div>
      </div>
    </div>
  );
};

export default Header;
