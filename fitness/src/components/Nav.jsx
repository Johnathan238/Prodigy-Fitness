import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <nav className="nav">
      
      <Link to="/Plans">
        <p className="header--create">Plans</p>
      </Link>
      <Link to="/Schedule With Me">
        <p className="header--create">Schedule With Me</p>
      </Link>
      
      <div className="Mobile--Icon">
        {/* <FaBars /> */}
      </div>
      
      <div className="Nav--Menu">
        <div className="Nav--Item">
          
          <div className="Nav--Links">

          </div>

        </div>
      </div>


    </nav>
  )
}

export default Nav