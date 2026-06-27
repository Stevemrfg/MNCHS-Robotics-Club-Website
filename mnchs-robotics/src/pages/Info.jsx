import TitleBlock from '../components/TitleBlock.jsx'
import CircuitDivider from '../components/CircuitDivider.jsx'

const ACTIVITIES = [
  { num: '01', title: 'Line-following & maze bots', body: 'Sensor calibration, PID basics, and chassis tuning using Arduino-based kits.' },
  { num: '02', title: 'Robot arms & grippers', body: 'Servo control and simple kinematics for pick-and-place tasks.' },
  { num: '03', title: 'Competition prep', body: 'Mock runs and scrimmages ahead of regional and DOST-SEI robotics meets.' },
  { num: '04', title: 'Coding workshops', body: 'Weekly sessions moving from block-based logic to C++ on the Arduino IDE.' },
]

const FAQS = [
  {
    q: 'Do I need prior experience to join?',
    a: 'No. Most members start with zero robotics background. We pair every new recruit with a mentor for their first build cycle.',
  },
  {
    q: 'What year levels can join?',
    a: 'The club is open to all junior and senior high students at MNCHS — Grades 7 through 12.',
  },
  {
    q: 'Is there a membership fee?',
    a: 'A small per-quarter contribution helps cover shared components like sensors and batteries. Scholars may request a waiver through the club adviser.',
  },
  {
    q: 'When and where do you meet?',
    a: 'Every Tuesday and Friday, 3:30–5:30 PM, at the STEM Building, Room 204. Schedules may shift slightly around exam weeks.',
  },
]

export default function Info() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Club Info</span>
          <h1 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', marginTop: 12 }}>
            What the robotics club actually does
          </h1>
          <p className="lede" style={{ marginTop: 14 }}>
            A student-run organization at Masbate National Comprehensive High School,
            built around hands-on robotics, programming, and friendly competition.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 16 }}>
        <div className="wrap grid-2">
          <TitleBlock
            doc="Sheet 02 — Mission"
            fields={[
              { label: 'Founded', value: '2018' },
              { label: 'Adviser', value: 'Edwin A. Grander Jr.' },
              { label: 'Meets', value: 'Tue / Fri' },
              { label: 'Room', value: 'STEM 204' },
            ]}
          />
          <div className="card">
            <span className="card-num">MISSION</span>
            <h3 style={{ fontSize: '1.15rem', marginBottom: 10 }}>Why we exist</h3>
            <p style={{ color: 'var(--ink-soft)' }}>
              We exist to give MNCHS students an accessible entry point into robotics
              and engineering — regardless of background — and to represent Masbate
              well in inter-school and provincial competitions.
            </p>
          </div>
        </div>
      </section>

      <div className="wrap"><CircuitDivider /></div>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Activities</span>
            <h2>What members actually build</h2>
          </div>
          <div className="grid-2">
            {ACTIVITIES.map((a) => (
              <div className="card" key={a.num}>
                <span className="card-num">ACT-{a.num}</span>
                <h3 style={{ fontSize: '1.05rem', marginBottom: 8 }}>{a.title}</h3>
                <p style={{ color: 'var(--ink-soft)', fontSize: '0.92rem' }}>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="wrap"><CircuitDivider /></div>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Before you ask</span>
            <h2>Frequently asked questions</h2>
          </div>
          <div>
            {FAQS.map((f) => (
              <div className="faq-item" key={f.q}>
                <div className="faq-q">{f.q}</div>
                <p style={{ color: 'var(--ink-soft)' }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
