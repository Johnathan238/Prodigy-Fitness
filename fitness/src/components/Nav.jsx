import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import './Nav.css'

const Nav = () => {
  return (
    <nav className="nav">


      <div className="Mobile--Icon">
        <FaBars />
      </div>

      <div className="Nav--Menu">
        <div className="Nav--Item">

          <div className="Nav--Links">
            <Link to="/Plans">
              <p className="header--create">About</p>
            </Link>

            <Link to="/Plans">
              <p className="header--create">Plans</p>
            </Link>

            <Link to="/Schedule With Me">
              <p className="header--create">Schedule With Me</p>
            </Link>

          </div>

        </div>
      </div>


    </nav>
  )
}

export default Nav

  // < Link to = "/Plans" >
  //   <p className="header--create">Plans</p>
  //           </Link >
  // <Link to="/Schedule With Me">
  //   <p className="header--create">Schedule With Me</p>
  // </Link>