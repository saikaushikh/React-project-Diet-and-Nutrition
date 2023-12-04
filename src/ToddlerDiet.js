// src/components/ToddlerDiet.js
import React from 'react';
import './ToddlerDiet.css';
import { useNavigate } from 'react-router-dom';

const ToddlerDiet = () => {
  const n=useNavigate();
  const Hp = () =>{
    n('/Homepage')
}
  return (
    <div className="toddler-diet">
    <button onClick={Hp} className='ac'>Back</button>
      <h1>Toddler Required Diet and Nutrients</h1>
      <div className="nutrients">
        <h2>Essential Nutrients</h2>
        <ul>
          <li>Protein: Essential for growth and development</li>
          <li>Fats: Necessary for brain development</li>
          <li>Carbohydrates: Provide energy for daily activities</li>
          <li>Vitamins (e.g., A, D, E, K, B vitamins, etc.): Support various bodily functions</li>
          <li>Minerals (e.g., Iron, Calcium, Zinc, etc.): Important for bone and muscle development</li>
        </ul>
      </div>
      <div className="diet">
        <h2>Sample Diet for Toddlers</h2>
        <p>
          A toddler's diet should include a variety of foods from different food groups, including fruits,
          vegetables, whole grains, lean proteins, and dairy products.
        </p>
        <p>
          Offer small, frequent meals and snacks that are rich in nutrients. Encourage self-feeding and
          provide a balanced diet to ensure they get the necessary nutrients for growth and development.
        </p>
      </div>
    </div>
  );
};

export default ToddlerDiet;