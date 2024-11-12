import React from 'react'

import rotom from "../../assets/images/rotom.png";
import tipo from "../../assets/images/12.png"


import "./cardStyle.css"

const Card = ({ pokeImagen, nombre, tipo1, tipo2, mostrar }) => {
  return (
    <div className='carta'>
        <div className='cartaSuperior'>
            <img className='fondo' src="" alt="" />
            <img className='pokemonSprite' src = { pokeImagen } alt="" />
            <p className='nombrePokemon'> {nombre} </p>
        </div>
        <div className='cartaInferior'>
            <p className='types'>Tipos</p>
            <div className='tipos'>
                <img id='img1' src= {tipo1} alt="" />
                <img id='img2' src= {tipo2} alt="" style={mostrar}/>
            </div>

            <button className='botonContenedor'>
                Más Información
            </button>
        </div>
        
    </div>
  )
}

export default Card;