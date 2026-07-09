import { useState } from 'react'

// Edit these with your club's actual projects
const PROJECTS = [
  {
    id: 'PRJ-01',
    name: '1st ARAngkadaBotz Robotics Seminar & Workshop',
    category: 'Public Service',
    status: 'Planning',
    team: 'Executives',
    desc: 'The first robotics seminar held in the City of Masbate for schools.',
    progress: 0,
  },
  {
    id: 'PRJ-02',
    name: '1st ARAngkadaBotz RoboFest',
    category: 'Competitions',
    status: 'Planning',
    team: 'Executives',
    desc: 'The first citywide robotics competition in the City of Masbate.',
    progress: 0,
  },
  {
    id: 'PRJ-03',
    name: 'SOON...',
    category: 'SOON...',
    status: 'SOON...',
    team: 'SOON...',
    desc: 'SOON...',
    progress: 0,
  },
]

// Edit current values as the year progresses
const GOALS = [
  { label: 'N/A', target: 0, current: 0, unit: '' },
  { label: 'Active members recruited', target: 100, current: 54, unit: 'members' },
  { label: 'N/A', target: 0, current: 0, unit: '' },
  { label: 'N/A', target: 0, current: 0, unit: '' },
  { label: 'N/A', target: 0, current: 0, unit: '' },
]

const STATUS_STYLE = {
  'In Progress': { background: '#DCEAF7', color: '#2E8BE6' },
  'Planning':    { background: '#FFF3E0', color: '#F57C00' },
  'Completed':   { background: '#E8F5E9', color: '#388E3C' },
}

const initialSuggestion = { type: 'Project Idea', name: '', title: '', message: '' }

export default function Projects() {
  const [suggestion, setSuggestion] = useState(initialSuggestion)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const update = (key) => (e) => setSuggestion(f => ({ ...f, [key]: e.target.value }))

  const validate = (form) => {
    const errs = {}
    if (!form.title.trim()) errs.title = 'Please enter a subject.'
    if (!form.message.trim()) errs.message = 'Please write your suggestion.'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate(suggestion)
    setErrors(errs)
    if (Object.keys(errs).length === 0) setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Projects & Progress</span>
          <h1 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', marginTop: 12 }}>
            What we're building this year
          </h1>
          <p className="lede" style={{ marginTop: 14 }}>
            Active builds, yearly goals, and a place to drop your ideas or feedback for the officers.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Current Builds</span>
            <h2>Active projects</h2>
            <p>The current projects of the club</p>
          </div>
          <div className="grid-3">
            {PROJECTS.map(p => (
              <div className="card" key={p.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                  <span className="card-num">{p.id}</span>
                  <span style={{
                    fontSize: '0.7rem',
                    fontFamily: 'var(--font-mono)',
                    padding: '3px 10px',
                    borderRadius: 999,
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    ...STATUS_STYLE[p.status],
                  }}>
                    {p.status}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.05rem', marginBottom: 6 }}>{p.name}</h3>
                <p style={{ color: 'var(--ink-soft)', fontSize: '0.88rem', marginBottom: 14 }}>{p.desc}</p>
                <div style={{ fontSize: '0.76rem', color: 'var(--ink-soft)', fontFamily: 'var(--font-mono)', marginBottom: 8 }}>
                  {p.category} — {p.team}
                </div>
                <div style={{ background: 'var(--paper-line)', borderRadius: 4, height: 8, overflow: 'hidden' }}>
                  <div style={{
                    width: `${p.progress}%`,
                    height: '100%',
                    background: p.progress === 100 ? '#388E3C' : 'var(--copper)',
                    borderRadius: 4,
                  }} />
                </div>
                <div style={{ textAlign: 'right', fontSize: '0.7rem', color: 'var(--ink-soft)', marginTop: 4, fontFamily: 'var(--font-mono)' }}>
                  {p.progress}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals progress charts */}
      <section style={{ background: 'var(--paper-line)', padding: '40px 0' }}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">S.Y. 2026-2027</span>
            <h2>Club goals this year</h2>
            <p>The goals of the club</p>
          </div>
          <div style={{ display: 'grid', gap: 16 }}>
            {GOALS.map(g => {
              const pct = Math.min(Math.round((g.current / g.target) * 100), 100)
              return (
                <div className="card" key={g.label}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                    <span style={{ fontWeight: 600, color: 'var(--ink-deep)', fontFamily: 'var(--font-display)' }}>
                      {g.label}
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--ink-soft)', whiteSpace: 'nowrap', marginLeft: 12 }}>
                      {g.current} / {g.target} {g.unit}
                    </span>
                  </div>
                  <div style={{ background: 'var(--paper-line)', borderRadius: 4, height: 14, overflow: 'hidden' }}>
                    <div style={{
                      width: `${pct}%`,
                      height: '100%',
                      background: pct >= 100 ? '#388E3C' : 'var(--copper)',
                      borderRadius: 4,
                    }} />
                  </div>
                  <div style={{ textAlign: 'right', fontSize: '0.72rem', color: 'var(--ink-soft)', marginTop: 4, fontFamily: 'var(--font-mono)' }}>
                    {pct}%
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Suggestions */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Suggestions</span>
            <h2>Got an idea or feedback?</h2>
            <p>Submit a project idea or general feedback to the officers. You can stay anonymous.</p>
          </div>

          {submitted ? (
            <div className="success-panel" style={{ maxWidth: 600 }}>
              <span className="eyebrow">Received</span>
              <h3 style={{ marginTop: 10 }}>Thanks — your suggestion was submitted.</h3>
              <p style={{ color: 'var(--ink-soft)', marginTop: 8 }}>
                Officers review submissions every week. Keep an eye on the club Facebook page for updates.
              </p>
              <button
                className="btn btn-ghost"
                style={{ marginTop: 18 }}
                onClick={() => { setSuggestion(initialSuggestion); setSubmitted(false) }}
              >
                Submit another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate style={{ maxWidth: 600 }} className="card">
              <span className="card-num">SUGGESTION FORM</span>

              <div className="field">
                <label>Type</label>
                <div className="radio-row">
                  {['Project Idea', 'General Feedback'].map(opt => (
                    <label className="radio-pill" key={opt}>
                      <input
                        type="radio"
                        name="type"
                        value={opt}
                        checked={suggestion.type === opt}
                        onChange={update('type')}
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>

              <div className="field">
                <label htmlFor="sug-name">Your name (optional — leave blank to stay anonymous)</label>
                <input
                  id="sug-name"
                  type="text"
                  value={suggestion.name}
                  onChange={update('name')}
                  placeholder="Anonymous"
                />
              </div>

              <div className="field">
                <label htmlFor="sug-title">Subject</label>
                <input
                  id="sug-title"
                  type="text"
                  value={suggestion.title}
                  onChange={update('title')}
                  placeholder={suggestion.type === 'Project Idea' ? 'e.g. Sumo robot for regional meet' : 'e.g. Feedback on build sessions'}
                />
                {errors.title && <span className="field-error">{errors.title}</span>}
              </div>

              <div className="field">
                <label htmlFor="sug-message">Details</label>
                <textarea
                  id="sug-message"
                  rows={4}
                  value={suggestion.message}
                  onChange={update('message')}
                  placeholder="Describe your idea or feedback..."
                />
                {errors.message && <span className="field-error">{errors.message}</span>}
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Submit Suggestion
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}

