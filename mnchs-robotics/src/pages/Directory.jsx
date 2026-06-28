import TitleBlock from '../components/TitleBlock.jsx'
import CircuitDivider from '../components/CircuitDivider.jsx'

/**
 * Placeholder roster — swap these names/initials for your club's actual
 * officers. Keeping the shape (role, name, year, initials) is enough for
 * the layout below to keep working.
 *
 * To add a photo for someone:
 *   1. Drop their image file into the `public/officers/` folder
 *      (e.g. public/officers/delacruz.jpg)
 *   2. Add a `photo: '/officers/delacruz.jpg'` line to their entry below.
 * No `photo` field (or leave it blank) → their initials are shown instead,
 * so you can fill in photos gradually without breaking the layout.
 */
const OFFICERS = [
  { role: 'Club Adviser', name: 'EDWIN A. GRANDE JR.', meta: 'Faculty, Science Dept.', initials: 'CA', photo: '' },
  { role: 'President', name: 'JOHN STEVE M. MARFIGA', meta: 'Grade 11 — Moonstone', initials: 'PR', photo: '/officers/PRESIDENT.png' },
  { role: 'Vice President', name: 'RENZI ASHER D. MAGBALON', meta: 'Grade 12 — Macmillan', initials: 'VP', photo: '/officers/VICEPRESIDENT.png' },
  { role: 'Secretary', name: 'CARLOS MIGUEL S. MAGALLANES', meta: 'Grade 11 - Moonstone', initials: 'SC', photo: '/officers/SECRETARY.png' },
  { role: 'Treasurer', name: 'JOSH C. CASTILLO', meta: 'Grade 12 - Macmillan', initials: 'TR', photo: '/officers/TREASURER.png' },
  { role: 'Auditor', name: 'EROS NIÑO A. TIMTIM', meta: 'Grade 11 - Zircon', initials: 'AU', photo: '/officers/AUDITOR.png' },
  { role: 'Public Information Officer', name: 'LANZ DARWIN L. DIMEN', meta: 'Grade 11 - Diamond', initials: 'PIO', photo: '/officers/PIO.png' },
  { role: 'Protocol Officer', name: 'JETH WILLIAM C. CASTILLO', meta: 'Grade 11 - Zircon', initials: 'PO', photo: '/officers/PO.png' },
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
            <p>Names below are placeholders — edit src/pages/Directory.jsx to add your actual officers.</p>
          </div>
          <div className="grid-4">
            {OFFICERS.map((o) => (
              <div className="officer-card" key={o.role}>
                <div className="officer-photo">
                  {o.photo ? (
                    <img src={o.photo} alt={o.name} />
                  ) : (
                    <span>{o.initials}</span>
                  )}
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
