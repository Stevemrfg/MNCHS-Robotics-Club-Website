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
          <svg className="brand-mark" viewBox="0 0 32 32" aria-hidden="true">
            <rect width="32" height="32" rx="4" fill="#0B2031" />
            <rect x="10" y="10" width="12" height="12" rx="1" fill="#F7FAFB" />
            <g stroke="#C8702A" strokeWidth="1.5">
              <line x1="13" y1="10" x2="13" y2="5" />
              <line x1="19" y1="10" x2="19" y2="5" />
              <line x1="13" y1="22" x2="13" y2="27" />
              <line x1="19" y1="22" x2="19" y2="27" />
              <line x1="10" y1="13" x2="5" y2="13" />
              <line x1="10" y1="19" x2="5" y2="19" />
              <line x1="22" y1="13" x2="27" y2="13" />
              <line x1="22" y1="19" x2="27" y2="19" />
            </g>
          </svg>
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
            <line x1="2" y1="5" x2="16" y2="5" stroke="#16324F" strokeWidth="1.6" />
            <line x1="2" y1="9" x2="16" y2="9" stroke="#16324F" strokeWidth="1.6" />
            <line x1="2" y1="13" x2="16" y2="13" stroke="#16324F" strokeWidth="1.6" />
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
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
