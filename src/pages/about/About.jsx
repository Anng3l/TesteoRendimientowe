import React from 'react'
import styles from "./About.module.css"; // Importa los estilos de módulo CSS

export const About = () => {
  return (
  <div className={styles.containerTotal}>
    <div className={styles.container}>
      {/* Encabezado */}
      <header className={styles.header}>
        <h1>Acerca de Nuestra Comunidad Pokémon</h1>
        <p>Tu fuente definitica de información sobre el mundo Pokémon</p>
      </header>
      {/* Cards de informacion */}
      <div className={styles.cardsContainer}>
        {/* Card 1 */}
        <div className={styles.card}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>🌍</div>
            <h2>Nuestra Mision</h2>
            <p>Crear la mejor pagina de entrenadores Pokémon,  proporcionando información actualizada y recursos de calidad.</p>
          </div>
          {/* Card 2 */}
          <div className={styles.card}>
            <div className={styles.cardIcon}>👥</div>
            <h2>Comunidad</h2>
            <p>Unete a miles entrenadores que comparten tu pasión por el mundo Pokémon</p>
          </div>
          {/* Card 3 */}
          <div className={styles.card}>
            <div className={styles.cardIcon}>⭐</div>
            <h2>Recursos</h2>
            <p>Accede a Rotom Dex! para informacion de Pokémon y estrategias de batalla.</p>
          </div>
        </div>
        {/* Linea de tiempo */}
        <div className={styles.timeline}>
          <h2>Nuestra Historia</h2>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDate}>2024</div>
            <h3>Lanzamiento</h3>
            <p>Iniciamos nuestra plataforma con el objetivo de crear el mejor recurso para entrenadores Pokémon</p>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDate}>Presente</div>
            <h3>Crecimiento Continuo</h3>
            <p>Seguimos expandiendo nuestras funcionalidades y construyendo una comunidad vibrante.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
export default About;