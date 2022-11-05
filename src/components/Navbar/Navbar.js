
import React, { useState } from "react"
import {Link, Outlet} from "react-router-dom"
import './Navbar.scss'

import chevron from '../../assets/icon-chevron.svg'

const Navbar = () => {
  const [closeNav, setCloseNav] = useState(false)
  
  const close = () => {
    setCloseNav(current => !current)
  }

    return (
      <header>
        <h1 className="logo">THE PLANETS</h1>
        <input id="burger" onClick={() => close()} checked={closeNav} type="checkbox" />
        <label aria-label="click to expand info links" for="burger">
            <span></span>
            <span></span>
            <span></span>
        </label>
        <nav>    
          <ul>
            <li>
              <Link onClick={() => close()} className="link" to="/"><span className="mercury-dot"></span>MERCURY <img alt="chevron" src={chevron}/></Link>
            </li>
            <span className="gray-line"></span>
            <li>
              <Link onClick={() => close()} className="link" to="/venus"><span className="venus-dot"></span>VENUS <img alt="chevron" src={chevron}/></Link>
            </li>
            <span className="gray-line"></span>
            <li>
              <Link onClick={() => close()} className="link" to="/earth"><span className="earth-dot"></span>EARTH <img alt="chevron" src={chevron}/></Link>
            </li>
            <span className="gray-line"></span>
            <li>
              <Link onClick={() => close()} className="link" to="/mars"><span className="mars-dot"></span>MARS <img alt="chevron" src={chevron}/></Link>
            </li>
            <span className="gray-line"></span>
            <li>
              <Link onClick={() => close()} className="link" to="/jupiter"><span className="jupiter-dot"></span>JUPITER <img alt="chevron" src={chevron}/></Link>
            </li>
            <span className="gray-line"></span>
            <li>
              <Link onClick={() => close()} className="link" to="/saturn"><span className="saturn-dot"></span>SATURN <img alt="chevron" src={chevron}/></Link>
            </li>
            <span className="gray-line"></span>
            <li>
              <Link onClick={() => close()} className="link" to="/uranus"><span className="uranus-dot"></span>URANUS <img alt="chevron" src={chevron}/></Link>
            </li>
            <span className="gray-line"></span>
            <li>
              <Link onClick={() => close()} className="link" to="/neptune"><span className="neptune-dot"></span>NEPTUNE <img alt="chevron" src={chevron}/></Link>
            </li>
          </ul>  
        </nav>
        </header>
    )
}

export default Navbar