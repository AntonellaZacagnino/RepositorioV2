import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Antonella Zacagnino';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="home">
      <div className="animated-bg">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
      <section className="hero">
        <div className="container">
          <div className="hero__content ">
            <h1 className="hero__title">
              <span className="typewriter">{displayText}</span>
              <span className="cursor">|</span>
            </h1>
            <h2 className="hero__subtitle">Desarrolladora Frontend</h2>
            <p className="hero__description">
              Creo experiencias web únicas y funcionales con tecnologías modernas. 
              Especializada en React, JavaScript y diseño responsive.
            </p>
            <div className="hero__actions">
              <Link to="/proyectos" className="btn btn-primary">
                Ver Proyectos
              </Link>
              <Link to="/contacto" className="btn btn-secondary">
                Contactar
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;