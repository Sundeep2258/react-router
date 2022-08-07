import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="container-width">
    <div className="nav-header">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave-icon"
      />
      <h1 className="wave-para">Wave</h1>
    </div>
    <ul className="head-container">
      <li className="head">
        <Link className="link-link" to="/">
          Home
        </Link>
      </li>
      <li className="head">
        <Link className="link-link" to="/about">
          About
        </Link>
      </li>
      <li className="head">
        <Link className="link-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
