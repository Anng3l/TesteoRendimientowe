import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai'; // Importación de librería
import './Team.css'; // Asegúrate de crear este archivo CSS
import Dex from "../../assets/images/rotom.png";
import Dex2 from "../../assets/images/rotomgif.webp";

export const Team = () => {
  const [queryResults, setQueryResults] = useState(null);
  const [chatbotResponse, setChatbotResponse] = useState(null);
  const [inputText, setInputText] = useState(''); // Para almacenar el texto de entrada

  const API_KEY = 'AIzaSyAnBUSyOoagyXBaqkhiTGPg7CcQ0BYeG4k';
  const genAI = new GoogleGenerativeAI(API_KEY);

  useEffect(() => {}, []);

  const fetchChatbot = async () => {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });
      const result = await model.generateContent(inputText);
      const responseText = await result.response.text();
      setChatbotResponse(responseText);
    } catch (error) {
      if (error.message.includes("429")) {
        console.log("Se alcanzó el límite de solicitudes. Inténtalo más tarde.");
      } else {
        console.log("Error al generar el contenido", error);
      }
    }
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
  <div className='containerTotal'>
    <div className='center'>
      <h1>Pregúntale a Rotom Dex!</h1>
      
      {/* Cuadro para la respuesta del chatbot */}
      <div className="chatbot-response-container">
        <h2> </h2>  
        <h2>¡Conoce a tu equipo Pokémon!</h2>
        <div className="placeholder">
          {chatbotResponse ? (
            <p>{chatbotResponse}</p>
          ) : (
            <p>Cargando respuesta de Rotom...</p>
          )}
          
        </div>
        
        <img src={Dex2} alt="rotomdex2" className="rotomdex2" width={125} height={100}/>
        <input 
          type="text"
          placeholder='Escribe algo aquí'
          value={inputText}
          onChange={handleInputChange}
          className="input-text mt-3"
        />
        <button onClick={fetchChatbot} className='btn btn-danger mt-3'>Generar Respuesta</button> 
        
      </div>
      <img src={Dex} alt="rotomdex" className="rotomdex" width={575} height={425}/>

    </div>

  </div> 
  
  );
};

