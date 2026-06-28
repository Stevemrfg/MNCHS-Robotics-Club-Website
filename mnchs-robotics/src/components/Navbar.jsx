import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const LINKS = [
  { to: '/', label: 'Home', pin: 'P01' },
  { to: '/info', label: 'Info', pin: 'P02' },
  { to: '/directory', label: 'Directory', pin: 'P03' },
  { to: '/membership', label: 'Join', pin: 'P04' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <img className="brand-mark" src="/CLUBLOGO.jpg" alt="MNCHS Robotics Club logo" />
          <span className="brand-text">
            MNCHS Robotics
            <small>MASBATE NAT'L COMPREHENSIVE HS</small>
          </span>
        </NavLink>

        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <line x1="2" y1="5" x2="16" y2="5" stroke="var(--ink)" strokeWidth="1.6" />
            <line x1="2" y1="9" x2="16" y2="9" stroke="var(--ink)" strokeWidth="1.6" />
            <line x1="2" y1="13" x2="16" y2="13" stroke="var(--ink)" strokeWidth="1.6" />
          </svg>
        </button>

        <nav>
          <ul className={`pin-nav ${open ? 'open' : ''}`}>
            {LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => `pin-link ${isActive ? 'active' : ''}`}
                >
                  <span className="pin-num">{link.pin}</span>
                  <span className="pin-label">{link.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
