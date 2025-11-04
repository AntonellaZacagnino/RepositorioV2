import React, { useState } from 'react';
import './Contact.scss';

const Contact = () => {
  const contactInfo = [
    {
      icon: 'fa-solid fa-envelope',
      title: 'Email',
      value: 'antonellazacagnino@gmail.com',
      link: 'mailto:antonellazacagnino@gmail.com'
    },
    {
      icon: 'fa-brands fa-linkedin',
      title: 'LinkedIn',
      value: 'https://linkedin.com/in/Antonella-Zacagnino',
      link: 'https://linkedin.com/in/Antonella-Zacagnino'
    },
    {
      icon: 'fa-brands fa-github',
      title: 'GitHub',
      value: '@AntonellaZacagnino',
      link: 'https://github.com/AntonellaZacagnino'
    }
  ];

  return (
    <main className="contact">
      <div className="container">
        <section className="contact__hero fade-in-up">
          <h1 className="contact__title">Contacto</h1>
        </section>

        <section className="contact__content" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
          <div className="contact__grid">
            <div className="contact__card main-card">
              <div className="card-header">
                <div className="profile-section">
                  <div className="profile-image">
                    <img src="fotocv.jpg" alt="Perfil" />
                  </div>
                  <div className="profile-info">
                    <h2>Antonella Zacagnino</h2>
                    <p className="role">Frontend Developer</p>
                    <div className="location">
                      <i className="fa-solid fa-location-dot"></i>
                      <span>Buenos Aires, Argentina</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card-body">
                <p className="intro-text">
                  Estoy abierta a escuchar ofertas laborales y colaborar en proyectos desafiantes. 
                  Si buscas una desarrolladora frontend comprometida para tu equipo o tienes una 
                  idea que necesita cobrar vida, me encantaría conocer más detalles y explorar 
                  cómo podemos trabajar juntos.
                </p>
                
                <div className="contact__methods">
                  {contactInfo.map((item, index) => (
                    <a 
                      key={index}
                      href={item.link}
                      className="contact__method"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="contact__method-icon">
                        <i className={`${item.icon}`}></i>
                      </div>
                      <div className="contact__method-info">
                        <h3>{item.title}</h3>
                        <p>{item.value}</p>
                      </div>
                      <div className="method-arrow">
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                    </a>
                  ))}
                </div>
                
                <div className="cv-download">
                  <a 
                    href="/Antonella-Zacagnino-CV.pdf" 
                    className="btn btn-cv"
                    download="Antonella Zacagnino CV.pdf"
                  >
                    <i className="fa-solid fa-download"></i>
                    Descargar CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Contact;