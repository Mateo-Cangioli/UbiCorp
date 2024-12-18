import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom
import '../styles/Home.css'; // Asegúrate de crear y personalizar este archivo CSS

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
       
        <h1 className="title">Traslados Médicos de Pacientes Crónicos</h1>
        <p className="welcome-text">Cuidamos de tus pacientes crónicos en cada traslado.</p>
      </header>

      <section className="services">
        <h2>Servicios que ofrecemos</h2>
        <div className="service-cards">
          <div className="service-card">
            <i className="fas fa-hospital"
            
            ></i>
            <h3>
              <Link to="/centros">Centros</Link>
            </h3>
            <p>Listado con los datos de los Centros.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-ambulance"></i>
            <h3>
              <Link to="/map">Mapa</Link>
            </h3>
            <p>Mapa con ubicaciones de los Centros y Escuelas.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-hospital"></i>
            <h3>
              <Link to="/escuelas">Escuelas</Link>
            </h3>
            <p>Listado con los datos de las Escuelas.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>¿Necesitas un traslado?</h2>
        <p>Contáctanos para coordinar el traslado de tus pacientes.</p>
      </section>
    </div>
  );
};

export default Home;
