import React from 'react';
const Card = ({ title, number }) => (
  <div className="card">
    <h3>{title}</h3>
    <div className="value">{number}</div>
  </div>
);
export default Card;
