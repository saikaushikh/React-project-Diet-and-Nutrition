// src/components/KidsDiet.js
import React from 'react';
import './KidsDiet.css';
import { useNavigate } from 'react-router-dom';
const KidsDiet = () => {

  const n=useNavigate();
    const Lo = () =>{
      n('/Homepage')
  }
  
  return (
    <div className="kids-diet">
      <div className="kids-diet-content">
      
      <button onClick={Lo} className='ba'>Back</button>
        <h1>Kids' Required Diet and Nutrients</h1>
        <div className="nutrients">
          <h2>Essential Nutrients</h2>
          <ul>
            <li>Protein: Essential for growth and development</li>
            <li>Fats: Necessary for brain development</li>
            <li>Carbohydrates: Provide energy for play and activities</li>
            <li>Vitamins (e.g., A, D, E, K, B vitamins, etc.): Support overall health and growth</li>
            <li>Minerals (e.g., Calcium, Iron, Zinc, etc.): Important for bone health and immunity</li>
          </ul>
        </div>
        <div className="diet">
          <h2>Sample Diet for Kids</h2>
          <p>
            A child's diet should include a variety of foods from different food groups such as fruits,
            vegetables, whole grains, lean proteins, and dairy products.
          </p>
          <p>
            Encourage balanced meals and snacks. Limit sugary and processed foods while promoting
            hydration with water and avoiding excessive junk food intake.
          </p>
          <p>
            It's important to provide a nutritious diet to support their growth, development, and
            overall health during these formative years.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KidsDiet;