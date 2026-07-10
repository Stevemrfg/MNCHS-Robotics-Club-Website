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
  { role: 'Club Adviser', name: 'EDWIN A. GRANDE JR.', meta: 'Faculty, Science Dept.', initials: 'CA', photo: '/officers/CLUBADVISER.png' },
  { role: 'President', name: 'JOHN STEVE M. MARFIGA', meta: 'Grade 11 — Moonstone', initials: 'PR', photo: '/officers/PRESIDENT.png' },
  { role: 'Vice President', name: 'RENZI ASHER D. MAGBALON', meta: 'Grade 12 — Macmillan', initials: 'VP', photo: '/officers/VICEPRESIDENT.png' },
  { role: 'Secretary', name: 'CARLOS MIGUEL S. MAGALLANES', meta: 'Grade 11 - Moonstone', initials: 'SC', photo: '/officers/SECRETARY.png' },
  { role: 'Treasurer', name: 'JOSH C. CASTILLO', meta: 'Grade 12 - Macmillan', initials: 'TR', photo: '/officers/TREASURER.png' },
  { role: 'Auditor', name: 'EROS NIÑO A. TIMTIM', meta: 'Grade 11 - Zircon', initials: 'AU', photo: '/officers/AUDITOR.png' },
  { role: 'Public Information Officer', name: 'LANZ DARWIN L. DIMEN', meta: 'Grade 11 - Diamond', initials: 'PIO', photo: '/officers/PIO.png' },
  { role: 'Protocol Officer', name: 'JETH WILLIAM C. CASTILLO', meta: 'Grade 11 - Zircon', initials: 'PO', photo: '/officers/PO.png' },
]

const CONTACT_LINES = [
  { label: 'Email', value: 'mnchsroboclub@gmail.com' },
  { label: 'Facebook', value: '/MNCHSRoboticsClub' },
  { label: 'Meeting room', value: 'DOST Building, RM. 1' },
  { label: 'Meeting time', value: 'TBA in Facebook page or group chat' },
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
          <div className="title-block">
  <div className="title-block-main" style={{ padding: 0 }}>
    <img
      src="/SSTFROBOT.jpg"
      alt="MNCHS Robotics Club directory"
      style={{ width: '100%', height: '100%', minHeight: 180, objectFit: 'cover', display: 'block' }}
    />
  </div>
  <div className="title-block-fields">
    <div className="title-block-field">
      <span>Officers</span>
      {OFFICERS.length}
    </div>
    <div className="title-block-field">
      <span>Term</span>
      S.Y. 2026–2027
    </div>
    <div className="title-block-field">
      <span>Room</span>
      DOST Building, RM. 1
    </div>
    <div className="title-block-field">
      <span>Contact</span>
      See Sheet ▸
    </div>
  </div>
</div>
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
            <p>Below are the officers of the of the MNCHS Robotics CLub for the S.Y. 2026-2027</p>
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
