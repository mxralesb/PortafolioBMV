import React from 'react'

const sections = [
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'servicios', label: 'Lo que hago' },
  { id: 'skills', label: 'Skills' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'contacto', label: 'Contacto' },
]

function App() {
  const handleNavClick = (id) => (e) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div className="page page-fancy">
      {/* NAVBAR */}
      <header className="nav">
        <div className="nav-left">
          <div className="logo-avatar">
            <span className="logo-circle">B</span>
          </div>
          <div className="nav-title">
            <span className="logo-text">Brenda Villatoro</span>
            <span className="nav-subtitle">
              Data &amp;   People Data · Dashboards · Web Apps
            </span>
          </div>
        </div>
        <nav className="nav-links">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} onClick={handleNavClick(s.id)}>
              {s.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="inicio">
          <div className="hero-left">
            <div className="pill">Disponible para proyectos 💼</div>
            <span className="role-pill">
  Data &amp; Talent Analytics · BI · Desarrollo web
</span>

            <h1>
              Transformo datos
              <br />
              <span className="gradient-text">en decisiones y productos digitales</span>
            </h1>
            <p className="hero-subtitle">
              Conecto analítica de talento, dashboards y desarrollo web para crear
              soluciones reales en reclutamiento, logística, educación y salud. Me gusta
              trabajar donde se cruzan los datos, las personas y la tecnología.
            </p>
            <div className="hero-actions">
              <a
                href="#proyectos"
                className="btn primary"
                onClick={handleNavClick('proyectos')}
              >
                Ver proyectos
              </a>
            <a
                href="#contacto"
                className="btn ghost"
                onClick={handleNavClick('contacto')}
              >
                Contacto
              </a>
            </div>
            <div className="hero-tags">
              <span>HR Analytics</span>
              <span>Power BI</span>
              <span>Excel Avanzado</span>
              <span>React &amp; Node.js</span>
              <span>APIs · Recruitee · Ally+</span>
              <span>ES · EN · PT</span>
            </div>
          </div>

          <div className="hero-right">
            <div className="card hero-card">
              <h3>Perfil rápido</h3>
              <ul>
                <li>📍 Guatemala · Latinoamérica</li>
                <li>🎧 Experiencia en BPO &amp; Call Center</li>
                <li>📊 Dashboards de rotación, referidos y metas</li>
                <li>💻 Apps web para asistencia, logística y salud</li>
              </ul>
            </div>
            <div className="card hero-card small">
              <p className="card-label">Stack actual</p>
              <p className="card-content">React · Node.js · PostgreSQL · Power BI</p>
            </div>
          </div>
        </section>

        {/* STATS / MÉTRICAS */}
        <section className="stats-strip">
          <div className="stats-item">
            <span className="stats-number">+20</span>
            <span className="stats-label">Dashboards &amp; reportes</span>
          </div>
          <div className="stats-item">
            <span className="stats-number">+8</span>
            <span className="stats-label">Proyectos web &amp; académicos</span>
          </div>
          <div className="stats-item">
            <span className="stats-number">3</span>
            <span className="stats-label">Áreas: RRHH · Logística · Educación</span>
          </div>
          <div className="stats-item">
            <span className="stats-number">+3</span>
            <span className="stats-label">Años conectando datos y personas</span>
          </div>
        </section>

        {/* SOBRE MI */}
        <section className="section" id="sobre-mi">
          <h2 className="section-title">Sobre mí</h2>
          <div className="grid about-grid">
            <div>
              <p className="section-text">
                Soy una profesional que vive entre los datos, las personas y el código.
                Me he especializado en{' '}
                <strong>analítica de talento y HR Analytics</strong>, construcción de
                <strong> dashboards en Power BI y Excel avanzado</strong> e
                implementación de <strong>aplicaciones web full stack</strong> para
                resolver problemas reales en reclutamiento, logística, educación y salud.
              </p>
              <p className="section-text">
                Disfruto entender un proceso desde cero, aterrizarlo en datos y luego
                construir soluciones visuales o sistemas que cualquier persona del
                negocio pueda usar sin miedo a “romper nada”. Me gusta acompañar a los
                equipos para que entiendan qué ven en las métricas y cómo usarlas.
              </p>
            </div>
            <div className="about-right">
              <div className="card about-card">
                <h3>En pocas palabras</h3>
                <ul>
                  <li>Me muevo bien entre negocio, datos y tecnología.</li>
                  <li>
                    Me gusta documentar, ordenar ideas y dejar procesos claros para el
                    siguiente equipo.
                  </li>
                  <li>
                    Disfruto construir dashboards y sistemas que realmente se usen, no
                    solo que se vean bonitos.
                  </li>
                </ul>
              </div>
              <div className="card languages-card">
                <h3>Idiomas</h3>
                <ul className="languages-list">
                  <li>
                    <span className="flag">🇬🇹</span>
                    <div>
                      <p className="lang-name">Español</p>
                      <p className="lang-level">Nativo</p>
                    </div>
                  </li>
                  <li>
                    <span className="flag">🇺🇸</span>
                    <div>
                      <p className="lang-name">Inglés</p>
                      <p className="lang-level">Avanzado · comunicación profesional</p>
                    </div>
                  </li>
                  <li>
                    <span className="flag">🇧🇷</span>
                    <div>
                      <p className="lang-name">Portugués</p>
                      <p className="lang-level">Avanzado · interacción con equipos LATAM</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICIOS / LO QUE HAGO */}
        <section className="section" id="servicios">
          <h2 className="section-title">Lo que hago</h2>
          <div className="grid services-grid">
            <div className="card">
              <h3>HR &amp; Talent Analytics</h3>
              <p className="section-text small-text">
                Acompaño áreas de RRHH y reclutamiento a entender su realidad con datos.
              </p>
              <ul className="services-list">
                <li>Funnel de reclutamiento y seguimiento de referidos.</li>
                <li>
                  Análisis de rotación, tenure, motivos de baja y cumplimiento de metas.
                </li>
                <li>Dashboards ejecutivos para decisiones rápidas.</li>
              </ul>
            </div>
            <div className="card">
              <h3>Dashboards &amp; reportería</h3>
              <p className="section-text small-text">
                Convierto consultas y bases “difíciles” en reportes claros y accionables.
              </p>
              <ul className="services-list">
                <li>Modelado de datos en Power BI y Excel.</li>
                <li>Medidas DAX, segmentadores y KPIs por país, cuenta o equipo.</li>
                <li>Automatización de reportes recurrentes.</li>
              </ul>
            </div>
            <div className="card">
              <h3>Aplicaciones web</h3>
              <p className="section-text small-text">
                Desarrollo aplicaciones web centradas en casos reales de negocio.
              </p>
              <ul className="services-list">
                <li>Sistemas de control de asistencia con QR.</li>
                <li>Plataformas para transporte, logística y aduanas.</li>
                <li>Integraciones con APIs (Recruitee, servicios internos, etc.).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section" id="skills">
          <h2 className="section-title">Skills &amp; stack</h2>
          <div className="grid skills-grid">
            <div className="card">
              <h3>Data &amp; BI</h3>
              <ul>
                <li>Power BI (medidas DAX, segmentadores, KPIs)</li>
                <li>Excel avanzado (Power Query, LET, XLOOKUP, macros)</li>
                <li>Modelado de datos de RRHH, reclutamiento y operaciones</li>
                <li>Diseño de dashboards ejecutivos e informes</li>
              </ul>
            </div>
            <div className="card">
              <h3>Desarrollo web</h3>
              <ul>
                <li>Frontend: React.js, Vite, HTML, CSS, JavaScript</li>
                <li>Backend: Node.js, Express</li>
                <li>Bases de datos: PostgreSQL</li>
                <li>Consumo de APIs REST (Recruitee, servicios internos)</li>
              </ul>
            </div>
            <div className="card">
              <h3>Soft skills &amp; procesos</h3>
              <ul>
                <li>Comunicación con equipos de RRHH, BI y clientes (ES / EN / PT).</li>
                <li>Documentación técnica y académica (tesis, informes).</li>
                <li>Análisis de requerimientos y traducción al lenguaje técnico.</li>
                <li>Orientación a resultados y mejora continua.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PROYECTOS */}
        <section className="section" id="proyectos">
          <h2 className="section-title">Proyectos destacados</h2>
          <p className="section-text">
            Algunos de los proyectos donde he podido combinar datos, procesos y
            desarrollo para resolver problemas concretos.
          </p>
          <div className="grid projects-grid">
            <article className="card project-card">
              <div className="project-chip">Full Stack · QR</div>
              <h3>Sistema de control de asistencia con códigos QR</h3>
              <p>
                Sistema web para nivel básico vespertino que permite registrar la
                asistencia de estudiantes mediante códigos QR, con módulos separados
                para Dirección y Docentes.
              </p>
              <ul>
                <li>Login para Dirección y Docentes con dashboards dedicados.</li>
                <li>Gestión de alumnos, salones y generación automática de QR.</li>
                <li>Registro de asistencia por escaneo y reportes exportables.</li>
              </ul>
              <p className="project-tech">
                <strong>Stack:</strong> React.js · Node.js · Express · PostgreSQL
              </p>
            </article>

            <article className="card project-card">
              <div className="project-chip">Logística &amp; Aduanas</div>
              <h3>
                Plataforma digital para transporte de carga y validación aduanera
              </h3>
              <p>
                Aplicación web para apoyar a transportistas en la planificación de rutas
                y validación visual de carga, reduciendo sanciones y tiempos muertos en
                frontera para empresas como Multiservicios Barán.
              </p>
              <ul>
                <li>Planificador de rutas inteligentes con contexto de aduanas.</li>
                <li>Módulo de validación visual de dimensiones de carga con IA.</li>
                <li>Enfoque en baja conectividad y compatibilidad con Android.</li>
              </ul>
              <p className="project-tech">
                <strong>Stack:</strong> React.js · Node.js · PostgreSQL
              </p>
            </article>

            <article className="card project-card">
              <div className="project-chip">HR Analytics</div>
              <h3>
                Dashboards de rotación, permanencia y referidos en Allied Global
              </h3>
              <p>
                Desarrollo de reportería avanzada para entender la rotación, tenure,
                motivos de baja y desempeño de reclutadores, con foco en metas de
                contratación y gestión de referidos internos.
              </p>
              <ul>
                <li>Dashboards de rotación y permanencia por país, cuenta y causa.</li>
                <li>
                  Análisis de referidos de Ally+ y Recruitee con cruces de identificadores.
                </li>
                <li>
                  Visuales de cumplimiento diario, objetivo del mes y comentarios de
                  seguimiento.
                </li>
              </ul>
              <p className="project-tech">
                <strong>Herramientas:</strong> Power BI · Excel · Power Query · SQL
              </p>
            </article>

            <article className="card project-card">
              <div className="project-chip">APIs &amp; Integraciones</div>
              <h3>Integración Recruitee &amp; Ally+ para referidos</h3>
              <p>
                Creación de flujos para consumir la API de Recruitee, cruzar datos con
                Ally+ y construir funnels personalizados de candidatos referidos.
              </p>
              <ul>
                <li>Consultas a endpoints de actividades y movimientos de candidatos.</li>
                <li>Power Query para transformar, limpiar y combinar la información.</li>
                <li>
                  Reportería que permite ver estado actual, tiempos y resultados de
                  referidos.
                </li>
              </ul>
              <p className="project-tech">
                <strong>Stack:</strong> APIs REST · Power Query · Power BI · Excel
              </p>
            </article>
          </div>
        </section>

        {/* EXPERIENCIA */}
        <section className="section" id="experiencia">
          <h2 className="section-title">Experiencia &amp; educación</h2>
          <div className="grid two-cols">
            <div className="card">
              <h3>Experiencia</h3>
              <ul className="timeline">
                <li>
                  <span className="tag">RRHH &amp; BI</span>
                  <p className="timeline-title">Allied Global</p>
                  <p className="timeline-text">
                    Responsable del análisis y reportería de reclutamiento, rotación,
                    referidos y cumplimiento de metas, trabajando con equipos de
                    reclutamiento, operaciones y BI.
                  </p>
                </li>
                <li>
                  <span className="tag">Proyectos académicos</span>
                  <p className="timeline-title">Universidad Mariano Gálvez</p>
                  <p className="timeline-text">
                    Desarrollo de sistemas web (asistencia QR, transporte, salud),
                    proyectos de seguridad informática (PfSense, AD, SIEM) y análisis
                    cuantitativo (investigación de operaciones, logística).
                  </p>
                </li>
              </ul>
            </div>
            <div className="card">
              <h3>Educación &amp; bootcamps</h3>
              <ul className="timeline">
                <li>
                  <span className="tag">Universidad</span>
                  <p className="timeline-title">
                    Ingeniería (UMG, Guatemala) {/* ajusta el nombre exacto */}
                  </p>
                  <p className="timeline-text">
                    Formación en desarrollo de software, bases de datos, redes,
                    investigación y gestión de proyectos tecnológicos.
                  </p>
                </li>
                <li>
                  <span className="tag">Bootcamps</span>
                  <p className="timeline-title">Bootcamps &amp; formación intensiva</p>
                  <p className="timeline-text">
                    Participación en bootcamps y programas prácticos enfocados en
                    desarrollo web (React, Node.js), analítica de datos y herramientas
                    modernas como Power BI, SQL y Excel avanzado, siempre con proyectos
                    aplicados a casos reales.
                  </p>
                </li>
                <li>
                  <span className="tag">Autodidacta</span>
                  <p className="timeline-title">Cursos y práctica constante</p>
                  <p className="timeline-text">
                    Aprendizaje continuo en Power BI, Excel avanzado, React, Node.js,
                    APIs y buenas prácticas de documentación y análisis.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA ANTES DE CONTACTO */}
        <section className="section cta-section">
          <div className="card cta-card">
            <div>
              <h2 className="section-title no-underline">¿Colaboramos?</h2>
              <p className="section-text">
                Si necesitas alguien que hable el idioma del negocio, de los datos, del
                código y también pueda comunicarse en inglés o portugués con equipos
                regionales, hablemos. Podemos revisar juntos tu funnel, tus dashboards o
                el sistema que tienes en mente.
              </p>
            </div>
            <div className="cta-actions">
              <a
                href="#contacto"
                className="btn primary"
                onClick={handleNavClick('contacto')}
              >
                Ir a contacto
              </a>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section className="section" id="contacto">
          <h2 className="section-title">Contacto</h2>
          <p className="section-text center">
            ¿Quieres hablar de un proyecto, una vacante o una idea con datos y código?
            <br />
            Escríbeme y lo vemos.
          </p>
          <div className="contact-grid">
            <div className="card contact-card">
              <h3>Redes &amp; correo</h3>
              <ul className="contact-list">
                <li>
                  📧{' '}
                  <a href="mailto:bvillatorom4@gmail.com">
                    bvillatorom4@gmail.com
                  </a>
                </li>
                <li>
                  🔗{' '}
                  <a
                    href="https://www.linkedin.com/in/brenda-morales-12bbb41b7/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  💻{' '}
                  <a
                    href="https://github.com/mxralesb"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
            <div className="card contact-card">
              <h3>Mensaje rápido</h3>
              <p className="small">
                Puedes copiar este texto base y pegarlo en tu correo o LinkedIn:
              </p>
              <pre className="message-template">
Hola Brenda 👋

Vi tu portafolio y me gustaría conversar contigo sobre...

[cuenta un poco de tu proyecto, vacante o idea]

Saludos,
[Tu nombre]
              </pre>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Brenda Villatoro. Construido con React.</p>
      </footer>
    </div>
  )
}

export default App
