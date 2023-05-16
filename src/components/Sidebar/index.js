import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faImage, faUser, faBars, faJ } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faGitlab, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
        <div className='navbar'>
            <Link className="menu-bars">
                <FontAwesomeIcon icon={faBars} color="#1f2a37" size="2x" onClick={showSidebar}/>
            </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-items">
                <li className="home-link">
                <NavLink exact="true" activeclassname="active" className="home-link" to="/">
                 <FontAwesomeIcon icon={faHome} color="#1f2a37" size="2x" />
             </NavLink>
                </li>
                <li className="about-link">
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                 <FontAwesomeIcon icon={faUser} color="#1f2a37" size="2x" />
             </NavLink>
                </li>
                <li className="contact-link">
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                 <FontAwesomeIcon icon={faEnvelope} color="#1f2a37" size="2x" />
             </NavLink>
                </li>
                <li className="portfolio-link">
                <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
                 <FontAwesomeIcon icon={faImage} color="#1f2a37" size="2x" />
             </NavLink>
                </li>
                <li>
                 <a className="link" target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/jake-tippit/'>
                     <FontAwesomeIcon icon={faLinkedin} color="#1f2a37" size="2x"/>
                 </a>
             </li>
             <li>
                 <a className="gitlab" target="_blank" rel='noreferrer' href='https://gitlab.com/JakTac'>
                     <FontAwesomeIcon icon={faGitlab} color="#1f2a37" size="2x"/>
                 </a>
             </li>
             <li>
                 <a className="github" target="_blank" rel='noreferrer' href='https://github.com/JakTac'>
                     <FontAwesomeIcon icon={faGithub} color="#1f2a37" size="2x"/>
                 </a>
             </li>
             <li>
                <NavLink exact="true" activeclassname="active" className="dashboard-link" to="/dashboard">
                 <FontAwesomeIcon icon={faJ} color="rgba(17, 25, 40, 0)" size="2x" />
             </NavLink>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Sidebar
