// src/components/AdultDiet.js
import React from 'react';
import './AdultDiet.css';
import { useNavigate } from 'react-router-dom';

const AdultDiet = () => {
  const n=useNavigate();
    const Hp = () =>{
      n('/Homepage')
  }
  return (
    <div className="adult-diet">
    <button onClick={Hp} className='Adb'>Back</button>
      <h1>Adult Required Diet and Nutrients</h1>
      <div className="nutrients">
        <h2>Essential Nutrients</h2>
        <ul>
          <li>Protein: Essential for muscle maintenance and repair</li>
          <li>Fats: Required for energy and nutrient absorption</li>
          <li>Carbohydrates: Provide energy for daily activities</li>
          <li>Vitamins (e.g., A, D, E, K, B vitamins, etc.): Support various bodily functions</li>
          <li>Minerals (e.g., Calcium, Iron, Magnesium, etc.): Important for bone health and metabolism</li>
        </ul>
      </div>
      <div className="diet">
        <h2>Sample Diet for Adults</h2>
        <p>
          An adult's diet should include a balance of nutrient-dense foods such as fruits, vegetables,
          whole grains, lean proteins, and healthy fats.
        </p>
        <p>
          Incorporate a variety of foods to meet nutritional needs. Maintain portion control and limit
          processed foods, sugar, and unhealthy fats for better health.
        </p>
        <p>
          Prioritize hydration with water and stay physically active to complement a healthy diet
          for optimal well-being.
        </p>
      </div>
    </div>
  );
};

export default AdultDiet;