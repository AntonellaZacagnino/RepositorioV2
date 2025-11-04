import React from 'react';
import './About.scss';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();
const About = () => {
  return (
    <main className="about">
      <div className="container">
        <section className="about__hero">
          <h1 className="about__title">Un poco sobre mí</h1>
        </section>

        <section className="about__content" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
          <div className="about__story">
            <div className="about__text">
              <h2>Mi Historia</h2>
              <p>
                Soy desarrolladora frontend con más de 3 años de experiencia creando interfaces web modernas, funcionales y centradas en la experiencia del usuario. A lo largo de mi carrera trabajé tanto en software factories como en el área de IT de una empresa de seguros, participando en el desarrollo y el mantenimiento de proyectos, realizando migraciones de tecnologías.
              </p>
              <p>
                Disfruto combinar lo técnico con lo visual: me interesa que cada desarrollo no solo funcione bien, sino que también se sienta intuitivo y agradable de usar. Me motiva aprender nuevas herramientas, mantenerme actualizada y colaborar con equipos donde se valoren las buenas prácticas y la creatividad.
              </p>
              <p>
                En mi tiempo libre disfruto de los videojuegos, ver series, dibujar y practicar patinaje artístico. Creo que esas pasiones también se reflejan en mi forma de desarrollar: curiosa, detallista y con una mirada estética siempre presente.
              </p>
            </div>
            <div className="about__image">
              <div className="about__image-placeholder">
                <img src="fotocv.jpg" alt="Foto de perfil" />
              </div>
            </div>
          </div>

          <div className="divider"></div>

          <div className="about__skills" data-aos="fade-down" data-aos-easing="fade-up" data-aos-duration="1000">
            <h2>Habilidades Técnicas</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Frontend</h3>
                <ul>
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>Angular</li>
                  <li>Vue.js</li>
                  <li>JavaScript </li>
                  <li>TypeScript </li>
                  <li>HTML5 & CSS</li>
                  <li>SASS</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Backend</h3>
                <ul>
                  <li>PHP (Symfony)</li>
                  <li>APIs Rest</li>
                  <li>SQL</li>
                </ul>
                <h3>Mobile</h3>
                <ul>
                  <li>Ionic</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>herramientas</h3>
                <ul>
                  <li>Git</li>
                  <li>Manejo de microservicios</li>
                  <li>Postman</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="divider"></div>

          <div className="about__values" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
            <h2>Habilidades Blandas</h2>
            <div className="values-grid">
              <div className="value-card">
                <i class="fa-solid fa-handshake value-card__icon"></i>
                <h3>Trabajo en equipo</h3>
                <p>Colaboración efectiva y comunicación fluida con equipos multidisciplinarios</p>
              </div>
              <div className="value-card">
                <i class="fa-solid fa-rotate value-card__icon"></i>
                <h3>Capacidad de adaptación</h3>
                <p>Flexibilidad para ajustarme a nuevos entornos y tecnologías</p>
              </div>
              <div className="value-card">
                <i class="fa-solid fa-comments value-card__icon"></i>
                <h3>Comunicación efectiva</h3>
                <p>Habilidad para transmitir ideas técnicas de manera clara y comprensible</p>
              </div>
              <div className="value-card">
                <i class="fa-solid fa-puzzle-piece value-card__icon"></i>
                <h3>Resolución de problemas</h3>
                <p>Análisis crítico y búsqueda de soluciones creativas e innovadoras</p>
              </div>
              <div className="value-card">
                <i class="fa-solid fa-magnifying-glass value-card__icon"></i>
                <h3>Atención al detalle</h3>
                <p>Precisión y cuidado en cada aspecto del desarrollo y diseño</p>
              </div>
              <div className="value-card">
                <i class="fa-solid fa-book value-card__icon"></i>
                <h3>Autodidacta</h3>
                <p>Constante aprendizaje y actualización de conocimientos de forma autónoma</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;