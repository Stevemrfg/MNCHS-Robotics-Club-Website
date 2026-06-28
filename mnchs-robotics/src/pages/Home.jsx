import { Link } from 'react-router-dom'
import CircuitDivider from '../components/CircuitDivider.jsx'

const HIGHLIGHTS = [
  {
    num: 'M01',
    title: 'Build sessions',
    body: 'Hands-on time with motors, sensors, and chassis kits — every build teaches wiring, torque, and patience in equal parts.',
  },
  {
    num: 'M02',
    title: 'Programming labs',
    body: 'From blocks to Arduino C++, members learn to turn logic into motion, one debugged line at a time.',
  },
  {
    num: 'M03',
    title: 'Competitions',
    body: 'We send teams to regional and DOST-backed robotics meets, representing Masbate on the provincial and national stage.',
  },
  {
    num: 'M04',
    title: 'Peer mentorship',
    body: 'Senior members walk new recruits through their first robot, no experience required to start.',
  },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">Masbate National Comprehensive High School</span>
            <h1>We build robots.<br />We build builders.</h1>
            <p className="lede">
              The MNCHS Robotics Club is where circuits, code, and curiosity meet.
              We design, wire, and program machines — then take them to compete.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/membership">Join the Club</Link>
              <Link className="btn btn-ghost" to="/info">See What We Do</Link>
            </div>
          </div>
          
          <img
            src="/SUMOBOTCOMP.jpg"
            alt="MNCHS Robotics Summit, CCTO of the image"
            className="hero-image"
          />
        </div>
      </section>

      <div className="wrap"><CircuitDivider /></div>

      <section className="section">
        <div className="wrap">
          <div className="stats-strip">
            <div className="stat"><strong>SOON...</strong><span>Active members</span></div>
            <div className="stat"><strong>SOON...</strong><span>Robots built this year</span></div>
            <div className="stat"><strong>SOON...</strong><span>Competitions joined</span></div>
            <div className="stat"><strong>2018</strong><span>Club founded</span></div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">What happens here</span>
            <h2>Four ways to get your hands dirty</h2>
            <p>
              No prior robotics experience is needed — just bring curiosity. Every member
              passes through these four stations on the way to their first working build.
            </p>
          </div>
          <div className="grid-4">
            {HIGHLIGHTS.map((h) => (
              <div className="card" key={h.num}>
                <span className="card-num">{h.num}</span>
                <h3 style={{ fontSize: '1.05rem', marginBottom: 8 }}>{h.title}</h3>
                <p style={{ color: 'var(--ink-soft)', fontSize: '0.9rem' }}>{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="wrap"><CircuitDivider /></div>

      <section className="section">
        <div className="wrap">
          <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
            <div>
              <span className="eyebrow">Recruitment is open</span>
              <h2 style={{ marginTop: 10, fontSize: '1.5rem' }}>Sign-ups close before the first quarter ends.</h2>
              <p style={{ marginTop: 8, color: 'var(--ink-soft)', maxWidth: 460 }}>
                Fill out the membership form and an officer will reach out about your
                onboarding session and first build group.
              </p>
            </div>
            <Link className="btn btn-primary" to="/membership">Register Now</Link>
          </div>
        </div>
      </section>
    </>
  )
}
