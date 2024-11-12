import React from "react"
import "./homeStyles.css"

import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpeg";
import img3 from "../../assets/images/3.jpeg";
import img4 from "../../assets/images/4.jpg";

export default function Home() {
  return (
    <div>
      <div className="firstDivision">
        <section className="hero-section">
          <div className="container">
            <img className="imgNew" src={img1} alt="" />
            <h1>Explora el Mundo Pokémon con la Pokédex EPN</h1>
            <p>Descubre datos y curiosidades de tus Pokémon favoritos.</p>
            <a href="#news" className="btn btn-primary">Ver Noticias</a>
            <a href="#about" className="btn btn-outline-light">Más información</a>
          </div>
        </section>

        <section id="about" className="py-5">
          <div className="container text-center">
            <h2 className="mb-4">Acerca de la Pokédex EPN</h2>
            <p>La Pokédex EPN es una plataforma dedicada a los fanáticos de Pokémon, donde puedes conocer información detallada de cada Pokémon, sus habilidades, evoluciones y mucho más.</p>
          </div>
        </section>
      </div>
      <section id="news" className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="mb-4">Últimas Noticias</h2>
          <div className="row">
            <div className="col-md-4">
              <h4>Nuevas Evoluciones</h4>
              <p>Explora las últimas evoluciones reveladas en la región de Galar.</p>
            </div>
            <div className="col-md-4">
              <h4>Eventos Pokémon</h4>
              <p>Participa en eventos donde puedes capturar Pokémon raros.</p>
            </div>
            <div className="col-md-4">
              <h4>Actualizaciones de la Pokédex</h4>
              <p>Consulta las nuevas características añadidas a la Pokédex EPN.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-5">
        <div className="container text-center">
          <h2 className="mb-4">Galería</h2>
          <div className="row">
            <div className="col-md-4">
              <img src={img2} alt="Pokémon 1" className="img-fluid rounded mb-3" />
            </div>
            <div className="col-md-4">
              <img src={img3} alt="Pokémon 2" className="img-fluid rounded mb-3" />
            </div>
            <div className="col-md-4">
              <img src={img4} alt="Pokémon 3" className="img-fluid rounded mb-3" />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="mb-4">Contáctanos</h2>
          <p>Celular: +593 987 654 321</p>
          <p>Correo: pokedexepn@epn.edu.ec</p>
          <a href="mailto:pokedexepn@epn.edu.ec" className="btn btn-primary">Envíanos un mensaje</a>
        </div>
      </section>
    </div>
  )
}