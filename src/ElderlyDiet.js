// src/components/ElderlyDiet.js
import React from 'react';
import './ElderlyDiet.css';
import { useNavigate } from 'react-router-dom';

const ElderlyDiet = () => {
  const n=useNavigate();
  const Hp = () =>{
    n('/Homepage')
}
  return (
    <div className="elderly-diet">
    <button className='ac' onClick={Hp}>Back</button>
      <h1>Elderly Required Diet and Nutrients</h1>
      <div className="nutrients">
        <h2>Essential Nutrients</h2>
        <ul>
          <li>Protein: Essential for muscle strength and repair</li>
          <li>Fats: Important for nutrient absorption and energy</li>
          <li>Carbohydrates: Provide energy for daily activities</li>
          <li>Vitamins (e.g., A, D, E, K, B vitamins, etc.): Support immune function and overall health</li>
          <li>Minerals (e.g., Calcium, Vitamin D, Magnesium, etc.): Crucial for bone health and preventing deficiencies</li>
        </ul>
      </div>
      <div className="diet">
        <h2>Sample Diet for Elderly</h2>
        <p>
          An elderly person's diet should focus on nutrient-dense foods like fruits, vegetables, whole grains,
          lean proteins, and healthy fats to meet their nutritional needs.
        </p>
        <p>
          Encourage regular meals and snacks. Consider dietary modifications to account for changing
          nutritional requirements and avoid foods that may exacerbate any existing health conditions.
        </p>
        <p>
          Hydration is crucial; ensure an adequate intake of fluids to support overall health and well-being.
        </p>
      </div>
    </div>
  );
};

export default ElderlyDiet;