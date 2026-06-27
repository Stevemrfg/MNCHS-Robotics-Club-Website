import TitleBlock from '../components/TitleBlock.jsx'
import CircuitDivider from '../components/CircuitDivider.jsx'

/**
 * Placeholder roster — swap these names/initials for your club's actual
 * officers. Keeping the shape (role, name, year, initials) is enough for
 * the layout below to keep working.
 */
const OFFICERS = [
  { role: 'Club Adviser', name: 'Edwin A. Grande Jr.', meta: 'Teacher, Science Dept.', initials: 'CA' },
  { role: 'President', name: 'John Steve M. Marfiga', meta: 'Grade 11 — Moonstone', initials: 'PR' },
  { role: 'Vice President', name: 'Renzi Asher D. Magbalon', meta: 'Grade 12 - Macmillan', initials: 'VP' },
  { role: 'Secretary', name: 'Carlos Miguel S. Magallanes', meta: 'Grade 11 - Moonstone', initials: 'SC' },
  { role: 'Treasurer', name: 'Josh C. Castillo', meta: 'Grade 12 - Macmillan ', initials: 'TR' },
  { role: 'Auditor', name: 'Eros Nino A. Timtim', meta: 'Grade 11 - Zircon', initials: 'AU' },
  { role: 'Public Information Officer', name: 'Lanz Darwin L. Dimen', meta: 'Grade 11 - Diamond', initials: 'PIO' },
  { role: 'Protocol Officer', name: 'Jeth William C. Castillo', meta: 'Grade 11 - Zircon', initials: 'PO' },
]

const CONTACT_LINES = [
  { label: 'Email', value: 'mnchs.robotics@example.edu.ph' },
  { label: 'Facebook', value: '/MNCHSRoboticsClub' },
  { label: 'Meeting room', value: 'STEM Building, Room 204' },
  { label: 'Meeting time', value: 'Tuesdays & Fridays, 3:30–5:30 PM' },
]

export default function Directory() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Directory</span>
          <h1 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', marginTop: 12 }}>
            Officers &amp; where to find us
          </h1>
          <p className="lede" style={{ marginTop: 14 }}>
            The people who keep builds on schedule and the channels to reach them.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }} className="section">
        <div className="wrap grid-2">
          <TitleBlock
            doc="Sheet 03 — Directory"
            fields={[
              { label: 'Officers', value: String(OFFICERS.length) },
              { label: 'Term', value: 'S.Y. 2025–2026' },
              { label: 'Room', value: 'STEM 204' },
              { label: 'Contact', value: 'See Sheet ▸' },
            ]}
          />
          <div className="card">
            <span className="card-num">CONTACT</span>
            <h3 style={{ fontSize: '1.1rem', marginBottom: 12 }}>Reach the club</h3>
            <div style={{ display: 'grid', gap: 10 }}>
              {CONTACT_LINES.map((c) => (
                <div key={c.label} style={{ display: 'flex', justifyContent: 'space-between', gap: 12, fontSize: '0.88rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--ink-soft)', fontSize: '0.74rem', textTransform: 'uppercase' }}>
                    {c.label}
                  </span>
                  <span style={{ textAlign: 'right' }}>{c.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="wrap"><CircuitDivider /></div>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Officer roster</span>
            <h2>Current term lineup</h2>
            <p>Names below are the current Adviser and Officer for the S.Y. 2026 - 2O27</p>
          </div>
          <div className="grid-4">
            {OFFICERS.map((o) => (
              <div className="officer-card" key={o.role}>
                <div className="officer-photo">
                  <span>{o.initials}</span>
                </div>
                <div className="officer-body">
                  <div className="officer-role">{o.role}</div>
                  <div className="officer-name">{o.name}</div>
                  <div className="officer-meta">{o.meta}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
