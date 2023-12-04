import React from 'react';
import Abimg from '../src/images/Abimg.jpg'
import styled from 'styled-components';
import About from './About.css';
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
background-image: url(${Abimg});
height: 100vh;
margin-top: -70px;
font-size: 20px;
background-size: cover;
background-repeat: no-repeat;
color: #00000; /* Set text color to white for better readability on a dark background */
padding: 20px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const Title = styled.h1`


  font-size: 3em;
margin-bottom: 20px;
`;

const Content = styled.div`
  max-width: 800px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;


function DietAndNutrition() {
  const n=useNavigate();
  const Bk = () =>{
    n('/Homepage')
  }
  return (
    <Container>
      <button className='butt' onClick={Bk}>Back</button>
      <Title>Diet and Nutrition</Title>
      <Content>
        <p>
          Diet and nutrition play a crucial role in maintaining overall health and well-being. A balanced diet containing
          essential nutrients like proteins, carbohydrates, fats, vitamins, and minerals is important for the body to function properly.
        </p>
        <li> Eat a variety of foods to ensure you get all the necessary nutrients</li>
            <li>Include fruits, vegetables, whole grains, lean proteins, and healthy fats in your diet.</li>
            <li>Stay hydrated by drinking an adequate amount of water every day.</li>
        <li>Avoid excessive consumption of processed foods, sugary drinks, and high-fat foods.</li>
      </Content>
    </Container>
  );
}

export default DietAndNutrition;