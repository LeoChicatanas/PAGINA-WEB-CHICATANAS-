import './App.css'
import robots from './data/robots.json'
import members from './data/members.json'
import competitions from './data/competitions.json'

// importar imágenes dinámicamente (Vite way)
const robotImages = import.meta.glob('./images/robots/*', { eager: true })
const memberImages = import.meta.glob('./images/members/*', { eager: true })
const competitionImages = import.meta.glob('./images/competitions/*', { eager: true })

// importar logos fijos
import logo from './images/Logo/Logo.jpeg'
import esimeLogo from './images/Logo/esimeazcch.jpg'

function App() {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <img src={logo} alt="Logo" className="logo-small" />
          <h1 className="club-name">Chicatanas Mini Sumo</h1>
          <img src={esimeLogo} alt="esimeazcch" className="logo-universidad" />
        </div>
        <p className="club-subtitle">
          Club de Robótica · ESIME Azcapotzalco · IPN
        </p>
      </header>

      {/* Robots */}
      <section className="section">
        <h2>🤖 Robots del Club</h2>
        <div className="robots">
          {robots.map((robot, index) => (
            <div key={index} className={`robot-card ${robot.estado}`}>
              <img
                src={robotImages[`./images/robots/${robot.imagen}`]?.default}
                alt={robot.nombre}
              />
              <h3>{robot.nombre}</h3>
              <p>{robot.descripcion}</p>
              <ul>
                <li><strong>Peso:</strong> {robot.peso}</li>
                <li><strong>Control:</strong> {robot.control}</li>
                <li><strong>Sensores:</strong> {robot.sensores}</li>
              </ul>
              <span className="estado">{robot.estado}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Miembros */}
      <section className="section">
        <h2>👥 Miembros del Club</h2>
        <div className="members">
          {members.map((m, i) => (
            <div key={i} className="member-card">
              <img
                src={memberImages[`./images/members/${m.foto}`]?.default}
                alt={m.nombre}
              />
              <h3>{m.nombre}</h3>
              <p>{m.rol}</p>
              <small>{m.semestre}</small>
            </div>
          ))}
        </div>
      </section>

      {/* Competencias */}
      <section className="section">
        <h2>🏆 Competencias</h2>
        <div className="competitions">
          {competitions.map((c, i) => (
            <div key={i} className="competition-card">
              <img
                src={competitionImages[`./images/competitions/${c.imagen}`]?.default}
                alt={c.nombre}
              />
              <h3>{c.nombre}</h3>
              <p>{c.año} — {c.resultado}</p>
              <small>Robot: {c.robot}</small>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>ESIME Azcapotzalco · IPN</p>
      </footer>
    </div>
  )
}

export default App
