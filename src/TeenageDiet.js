// src/components/TeenageDiet.js
import React from 'react';
import './TeenageDiet.css';
import { useNavigate } from 'react-router-dom';

const TeenageDiet = () => {
  const n=useNavigate();
    const Hp = () =>{
      n('/Homepage')
  }
  return (
    <div className="teenage-diet">
      <div className="teenage-diet-content">
      <button onClick={Hp} className='ba'>Back</button>
        <h1>Teenage Required Diet and Nutrients</h1>
        <div className="nutrients">
          <h2>Essential Nutrients</h2>
          <ul>
            <li>Protein: Essential for growth and muscle development</li>
            <li>Fats: Important for hormone production and brain function</li>
            <li>Carbohydrates: Provide energy for daily activities</li>
            <li>Vitamins (e.g., A, D, E, K, B vitamins, etc.): Support various bodily functions</li>
            <li>Minerals (e.g., Iron, Calcium, Zinc, etc.): Crucial for bone health and immunity</li>
          </ul>
        </div>
        <div className="diet">
          <h2>Sample Diet for Teenagers</h2>
          <p>
            Teenagers should aim for a balanced diet that includes a variety of fruits, vegetables, whole grains,
            lean proteins, and dairy products. Encourage them to limit processed foods, sugary drinks, and snacks
            high in unhealthy fats and sugars.
          </p>
          <p>
            Provide regular meals and snacks that are rich in nutrients, and encourage healthy eating habits
            to support their growth and overall well-being.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeenageDiet;