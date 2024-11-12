import React, { useEffect, useState } from 'react'

import Card from '../../components/card/card';

import "./pokedexStyle.css"


import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export default function Pokedex() {
  
  const [poke, setPoke] = useState([]);
  const [loading, setLoading] = useState([true]);

  const [pokemonSearch, setPokemonSearch] = useState([]);
  const [buscar, setBuscar] = useState(true);

  
  

  useEffect(()=>{
    const fetchData = async () => {
      try
      {
        let pokedex = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0");
        let data = await pokedex.json();
        
        let x = await Promise.all(
          data.results.map(async (pokemon)=>{
            
            //Datos globales
            let x = await fetch(pokemon.url);
            let data = await x.json();
            
            //Tipos
            let tipos = [];
            

            let url1 = data.types[0].type.url;
            let numero = url1 ? url1.match(/(\d+)\/?$/) : null;
            numero = numero ? numero[1] : null;
            let tipoUrl = numero ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/${numero}.png` : "";
            tipos.push(tipoUrl);

            let url2 = data.types[1] ? data.types[1].type.url : null;
            numero = url2 ? url2.match(/(\d+)\/?$/) : null;
            numero = numero ? numero[1] : null;
            tipoUrl = numero ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/${numero}.png` : "";
            tipos.push(tipoUrl);

            data.types = tipos;
            return data;
          })
        )
        setPoke(x);
        setLoading(false);
      }
      catch(error)
      {
        console.log(error);
      }      
    }
    fetchData();
  }, [])
  
  let busquedaParticular = async (nombre) => {
    try
    {
      let pokedex = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);

      if (!pokedex.ok) {
        throw new Error(`Error: Pokémon no encontrado o la API devolvió un error (${pokedex.status})`);
      }


      let data = await pokedex.json();

      //Tipos
      let tipos = [];
            
      let url1 = data.types[0].type.url;
      let numero = url1 ? url1.match(/(\d+)\/?$/) : null;
      numero = numero ? numero[1] : null;
      let tipoUrl = numero ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/${numero}.png` : "";
      tipos.push(tipoUrl);

      let url2 = data.types[1] ? data.types[1].type.url : null;
      numero = url2 ? url2.match(/(\d+)\/?$/) : null;
      numero = numero ? numero[1] : null;
      tipoUrl = numero ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/${numero}.png` : "";
      tipos.push(tipoUrl);

      data.types = tipos;

      setPokemonSearch(data);
      setBuscar(false);
    }
    catch (error)
    {
      console.log(error);
    }
  }


  return (
    <div className='containerTotal'>
      <div className='container'>
        {/* Título y buscador */}
        <div className='buscadorContainer'>
          <Navbar className="justify-content-center bg-none">
            <Form className="form-inline" onSubmit={(e) => e.preventDefault()}>
              <Row>
                <Col xs="auto" id='caja'>
                  <Form.Control
                    type="text"
                    placeholder="Pokémon"
                    className=" mr-sm-2"
                    id='inputPokeBuscado'
                  />
                </Col>
                <Col xs="auto">
                  <Button type="button" className='botonBuscar' onClick={() => busquedaParticular(document.getElementById("inputPokeBuscado").value.toLowerCase().trim())}>Buscar</Button>
                </Col>
              </Row>
            </Form>
          </Navbar>
        </div>

        <div className='pokemonBuscado'>
        {
          buscar ? ""
          :
          <Card  pokeImagen={pokemonSearch.sprites?.other?.["official-artwork"]?.front_default} nombre={pokemonSearch.name.charAt(0).toUpperCase() + pokemonSearch.name.slice(1)} tipo1={pokemonSearch.types[0]} tipo2={pokemonSearch.types[1]} /> 
        }
          
        </div>
    
        {/* Pokedex */}
        {
          loading ? "Cargando..."
          :
          <div className='contenedorPokedex' id='pokedex'>
          {poke.map((pokemon, index) => (
            <Card
              key={index}
              pokeImagen={ pokemon.sprites.other?.["official-artwork"].front_default //Los corchetes son para acceder a la clave official-artwork,
                                                                                      //pues al ser el guión medio un carácter especial, éste lanza error sin este tratamiento.
              }
              nombre={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
              tipo1={pokemon.types[0]}
              
              mostrar={pokemon.types[1] ? { display: 'block' } : { display: 'none' }}
              tipo2={pokemon.types[1]}
            />
          ))}
        </div>
        }
      </div>
    </div>
  );  
}
