export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <h4>MNCHS Robotics Club</h4>
            <p className="footer-mono">
              Masbate National Comprehensive High School<br />
              Masbate City, Masbate, Philippines
            </p>
          </div>
          <div>
            <h4>Sheet Index</h4>
            <p className="footer-mono">
              <a href="#/">Home</a><br />
              <a href="#/info">Club Info</a><br />
              <a href="#/directory">Directory</a><br />
              <a href="#/membership">Membership</a>
            </p>
          </div>
          <div>
            <h4>Reach Us</h4>
            <p className="footer-mono">
              mnchs.robotics@example.edu.ph<br />
              Facebook: /MNCHSRoboticsClub<br />
              Rm. 204 — STEM Building
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>REV 2026.1 — DRAWN BY MNCHS ROBOTICS CLUB</span>
          <span>© {new Date().getFullYear()} MNCHS Robotics Club</span>
        </div>
      </div>
    </footer>
  )
}
