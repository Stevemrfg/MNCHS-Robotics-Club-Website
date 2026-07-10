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
              <a href="#/">HOME</a><br />
              <a href="#/info">CLUB INFO</a><br />
              <a href="#/directory">DIRECTORY</a><br />
              <a href="#/projects">PROJECTS</a><br />
              <a href="#/membership">REGISTER</a>
            </p>
          </div>
          <div>
            <h4>Reach Us</h4>
            <p className="footer-mono">
              mnchsroboclub@gmail.com<br />
              Facebook: /MNCHSRoboticsClub<br />
              DOST Building, RM. 1
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>REV 2026.1.9 — DRAWN BY MNCHS ROBOTICS CLUB</span>
          <span>© {new Date().getFullYear()} MNCHS Robotics Club</span>
        </div>
      </div>
    </footer>
  )
}
