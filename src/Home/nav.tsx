import { NavLink, type NavLinkProps } from 'react-router-dom'
import './styles/nav.css'

function Nav() {
  const linkClass: NavLinkProps['className'] = ({ isActive }) =>
    isActive ? 'nav-link active' : 'nav-link'

  return (
    <nav className="nav">
      <ul className="nav-list">
        <li>
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/In-Media" className={linkClass}>
            In-Media
          </NavLink>
        </li>
        <li>
          <NavLink to="/Weekends" className={linkClass}>
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/Blogs" className={linkClass}>
            Blogs
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav