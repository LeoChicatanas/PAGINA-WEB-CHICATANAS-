import './App.css'
import robots from './data/robots.json'
import members from './data/members.json'
import competitions from './data/competitions.json'

function App() {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <img
            src="/images/Logo/Logo.jpeg"
            alt="Logo"
            className="logo-small"
          />
          <h1 className="club-name">Chicatanas Mini Sumo</h1>
          <img
            src="/images/Logo/esimeazcch.jpg"
            alt="esimeazcch"
            className="logo-universidad"
          />
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
                src={`/images/robots/${robot.imagen}`}
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
                src={`/images/members/${m.foto}`}
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
                src={`/images/competitions/${c.imagen}`}
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
