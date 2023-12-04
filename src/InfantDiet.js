// src/components/InfantDiet.js
import React from 'react';
import './InfantDiet.css';
import { useNavigate } from 'react-router-dom';

const InfantDiet = () => {
  const n=useNavigate();
  const Hp = () =>{
    n('/Homepage')
}
  return (
    <div className="infant-diet">
      <div className="infant-diet-content">
      <button onClick={Hp} className='ba'>Back</button>
        <h1>Infant Required Diet and Nutrients</h1>
        <div className="essential-nutrients">
          <h2>Essential Nutrients</h2>
          <ul>
            <li>Protein: Important for growth and tissue repair</li>
            <li>Fats: Necessary for brain development</li>
            <li>Carbohydrates: Provide energy for daily activities</li>
            <li>Vitamins (e.g., A, D, E, K, B vitamins, etc.): Support various bodily functions</li>
            <li>Minerals (e.g., Iron, Calcium, Zinc, etc.): Essential for bone and organ development</li>
          </ul>
        </div>
        <div className="diet">
          <h2>Sample Diet for Infants</h2>
          <p>
            An infant's diet typically includes breast milk or formula during the first few months.
            As they grow older (around 4-6 months), introducing solid foods like pureed fruits,
            vegetables, and cereals can begin. It's important to consult with a pediatrician for
            personalized feeding guidance.
          </p>
          <p>
            Common first foods include mashed bananas, pureed sweet potatoes, rice cereal, etc. Gradually
            introduce new foods while ensuring they are easy to digest and allergen-safe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfantDiet;