import React, { useState } from 'react';
import './Projects.scss';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Nuarielle',
      description: 'Página web realizada para el curso de React.js de Coderhouse. Plataforma E-commerce para venta de productos de pasteleria.',
      image: 'nuarielle-desktop',
      technologies: ['React.js', 'Firebase'],
      category: 'frontend',
      demoUrl: 'https://nuarielle.vercel.app/',
      codeUrl: 'https://github.com/AntonellaZacagnino/Nuarielle/'
    },
    {
      id: 2,
      title: 'Aerolab Challenge',
      description: 'Frontend Challenge para la empresa Aerolab. Plataforma E-commerce de productos de tecnología.',
      image: 'aerolab-desktop',
      technologies: ['React.js', 'Next.js', 'SASS'],
      category: 'frontend',
      demoUrl: 'https://azacagnino-aerolab-challenge.netlify.app/',
      codeUrl: 'https://github.com/AntonellaZacagnino/aerolab-challenge'
    },
    {
      id: 3,
      title: 'Pokedex',
      description: 'Frontend Challenge para la empresa Zarego.',
      image: 'pokedex-desktop',
      technologies: ['React.js', 'Next.js', 'SASS'],
      category: 'frontend',
      demoUrl: 'https://pokedex-alpha-one.vercel.app/',
      codeUrl: 'https://github.com/AntonellaZacagnino/zarego-challenge/'
    },
    {
      id: 4,
      title: 'Liteflix',
      description: 'Frontend Challenge para la empresa Litebox.',
      image: 'liteflix-desktop',
      technologies: ['React.js', 'SASS'],
      category: 'frontend',
      demoUrl: 'https://litleflix-azacagnino.netlify.app/',
      codeUrl: 'https://github.com/AntonellaZacagnino/liteflix'
    },
    {
      id: 5,
      title: 'Fletes JM',
      description: 'Página web para empresa de fletes y cargas de materiales.',
      image: 'fletesjm-desktop',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      category: 'frontend',
      demoUrl: 'https://www.fletesjm.com.ar/',
      codeUrl: 'https://github.com/AntonellaZacagnino/FletesJM'
    },
    {
      id: 6,
      title: 'Challenge DOMO',
      description: 'Desafío técnico realizado para DOMO.',
      image: 'challenge-domo-desktop',
      technologies: ['React.js'],
      category: 'frontend',
      demoUrl: 'none',
      codeUrl: 'https://github.com/AntonellaZacagnino/Challenge-Domo'
    },
    {
      id: 7,
      title: 'VeriMovies',
      description: 'Desafío técnico realizado para la empresa Verifarma.',
      image: 'verimovies-desktop',
      technologies: ['Vue.js', 'Nuxt.js', 'SASS', 'Firebase'],
      category: 'frontend',
      demoUrl: 'none',
      codeUrl: 'https://github.com/AntonellaZacagnino/verifarma-app'
    },
    {
      id: 8,
      title: 'MVPP',
      description: 'Aplicación realizada para materia "Desarrollo mobile" de la carrera "Desarrollo de Software". Juego de trivias educativo.',
      image: 'mvpp-mobile',
      technologies: ['Ionic', 'Angular', 'Firebase', 'TypeScript', 'SASS'],
      category: 'mobile',
      demoUrl: 'none',
      codeUrl: 'https://github.com/GeraRevrol/MuyViernes'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const filterButtons = [
    { key: 'all', label: 'Todos' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'mobile', label: 'Mobile' }
  ];

  return (
    <main className="projects">
      <div className="container">
        <section className="projects__hero fade-in-up" >
          <h1 className="projects__title">Proyectos realizados</h1>
        </section>

        <section className="projects__filters">
          <div className="filter-buttons">
            {filterButtons.map(button => (
              <button
                key={button.key}
                className={`filter-btn ${filter === button.key ? 'active' : ''}`}
                onClick={() => setFilter(button.key)}
              >
                {button.label}
              </button>
            ))}
          </div>
        </section>

        <section className="projects__grid" >
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card " data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
              <div className="project-card__image">
                <img src={`${project.image}.png`} alt={project.title} />
              </div>
              <div className="project-card__content">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>
                <div className="project-card__technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-card__actions">
                  <a 
                    href={project.demoUrl} 
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ cursor: project.demoUrl === 'none' ? 'not-allowed' : 'pointer', opacity: project.demoUrl === 'none' ? 0.5 : 1 }}
                  >
                    {project.demoUrl === 'none' ? 'No disponible' : 'Ver Demo'}
                  </a>
                  <a 
                    href={project.codeUrl} 
                    className="btn btn-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Projects;
