import { useState } from 'react'
import TitleBlock from '../components/TitleBlock.jsx'

const GRADE_LEVELS = ['Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12']
const EXPERIENCE = ['None — first time', 'Some — built a small project before', 'Experienced — joined competitions before']
const TRACKS = ['Mechanical / Build', 'Programming', 'Either — not sure yet']

const initialForm = {
  fullName: '',
  gradeLevel: '',
  section: '',
  contactNumber: '',
  email: '',
  experience: '',
  track: '',
  reason: '',
}

function validate(form) {
  const errors = {}
  if (!form.fullName.trim()) errors.fullName = 'Enter your full name.'
  if (!form.gradeLevel) errors.gradeLevel = 'Select your grade level.'
  if (!form.section.trim()) errors.section = 'Enter your section.'
  if (!form.contactNumber.trim()) {
    errors.contactNumber = 'Enter a contact number.'
  } else if (!/^[0-9+\s-]{7,15}$/.test(form.contactNumber.trim())) {
    errors.contactNumber = 'Use digits only, 7–15 characters.'
  }
  if (!form.email.trim()) {
    errors.email = 'Enter an email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = 'That email looks incomplete.'
  }
  if (!form.experience) errors.experience = 'Pick your experience level.'
  if (!form.track) errors.track = 'Pick a track.'
  return errors
}

export default function Membership() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true)
      // NOTE: there is no backend wired up yet. To actually receive these
      // submissions, send `form` to a service such as Formspree, Google
      // Forms, or your own API endpoint here (e.g. inside a fetch() call).
    }
  }

  if (submitted) {
    return (
      <section className="section">
        <div className="wrap">
          <div className="success-panel">
            <span className="eyebrow">Submitted</span>
            <h2 style={{ marginTop: 10, fontSize: '1.4rem' }}>Thanks, {form.fullName.split(' ')[0]} — you're on the list.</h2>
            <p style={{ marginTop: 10, color: 'var(--ink-soft)', maxWidth: 520 }}>
              An officer will reach out via {form.email} or {form.contactNumber} about your
              onboarding session. Keep an eye on the club's Facebook page for the schedule.
            </p>
            <button
              className="btn btn-ghost"
              style={{ marginTop: 20 }}
              onClick={() => { setForm(initialForm); setSubmitted(false) }}
            >
              Register another member
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Membership Registration</span>
          <h1 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', marginTop: 12 }}>
            Sign up for the build season
          </h1>
          <p className="lede" style={{ marginTop: 14 }}>
            Fill in the form below — it takes about two minutes. No experience required.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap grid-2">
          <TitleBlock
            doc="Sheet 04 — Membership"
            fields={[
              { label: 'Form', value: 'New Member' },
              { label: 'Time', value: '~2 minutes' },
              { label: 'Fee', value: 'Per quarter*' },
              { label: 'Status', value: 'Open' },
            ]}
          />

          <form className="card" onSubmit={handleSubmit} noValidate>
            <span className="card-num">REGISTRATION FORM</span>

            <div className="field">
              <label htmlFor="fullName">Full name</label>
              <input
                id="fullName"
                type="text"
                value={form.fullName}
                onChange={update('fullName')}
                placeholder="Juan Dela Cruz"
              />
              {errors.fullName && <span className="field-error">{errors.fullName}</span>}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <div className="field">
                <label htmlFor="gradeLevel">Grade level</label>
                <select id="gradeLevel" value={form.gradeLevel} onChange={update('gradeLevel')}>
                  <option value="">Select</option>
                  {GRADE_LEVELS.map((g) => <option key={g} value={g}>{g}</option>)}
                </select>
                {errors.gradeLevel && <span className="field-error">{errors.gradeLevel}</span>}
              </div>

              <div className="field">
                <label htmlFor="section">Section</label>
                <input
                  id="section"
                  type="text"
                  value={form.section}
                  onChange={update('section')}
                  placeholder="e.g. STEM-A"
                />
                {errors.section && <span className="field-error">{errors.section}</span>}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <div className="field">
                <label htmlFor="contactNumber">Contact number</label>
                <input
                  id="contactNumber"
                  type="tel"
                  value={form.contactNumber}
                  onChange={update('contactNumber')}
                  placeholder="09xx xxx xxxx"
                />
                {errors.contactNumber && <span className="field-error">{errors.contactNumber}</span>}
              </div>

              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  placeholder="you@example.com"
                />
                {errors.email && <span className="field-error">{errors.email}</span>}
              </div>
            </div>

            <div className="field">
              <label>Robotics experience</label>
              <div className="radio-row">
                {EXPERIENCE.map((opt) => (
                  <label className="radio-pill" key={opt}>
                    <input
                      type="radio"
                      name="experience"
                      value={opt}
                      checked={form.experience === opt}
                      onChange={update('experience')}
                    />
                    {opt}
                  </label>
                ))}
              </div>
              {errors.experience && <span className="field-error">{errors.experience}</span>}
            </div>

            <div className="field">
              <label>Preferred track</label>
              <div className="radio-row">
                {TRACKS.map((opt) => (
                  <label className="radio-pill" key={opt}>
                    <input
                      type="radio"
                      name="track"
                      value={opt}
                      checked={form.track === opt}
                      onChange={update('track')}
                    />
                    {opt}
                  </label>
                ))}
              </div>
              {errors.track && <span className="field-error">{errors.track}</span>}
            </div>

            <div className="field">
              <label htmlFor="reason">Why do you want to join? (optional)</label>
              <textarea
                id="reason"
                rows={3}
                value={form.reason}
                onChange={update('reason')}
                placeholder="Tell us a bit about yourself..."
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Submit Registration
            </button>
            <p style={{ marginTop: 12, fontSize: '0.74rem', color: 'var(--ink-soft)', fontFamily: 'var(--font-mono)' }}>
              *Fee waivers available — ask the club adviser.
            </p>
          </form>
        </div>
      </section>
    </>
  )
}
