import React from 'react'
import './Compon.css'
import styled from "styled-components"
import { Link } from 'react-router-dom'
import Logo from './Logo'



const NavBarContainer = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 0 1px 3px  #0f0f0f;
  // opacity: 0.1;
  display: flex;
  align-items: center;
  padding: 0 1.5em;
`;
const LeftSide = styled.div`
  display: flex;

`;

const MiddleSide = styled.div`
  display: flex;
  flex: 2;
`;

const RightSide = styled.div`
  display: flex;
`;

export function Navbar(props) {
  return (
  <NavBarContainer>
    <LeftSide>
      <Logo />
      </LeftSide>
    <MiddleSide></MiddleSide>
    <RightSide></RightSide>
  </NavBarContainer>
  )
}

export default Navbar

// const Header = () => {
//   return (
//     <header className="header">




//       {/* <button className="nav-toggle" aria-label="toggle navigation">
//           <span className="hamburger"></span>
//         </button> */}

//       <nav className="nav">
//         <div className="hamburger">
//           <div className="line"></div>
//           <div className="line"></div>
//           <div className="line"></div>
//         </div>

//         <Link to='/' className="Home-Link">
//           <h1>PRODIGY FITNESS </h1>
//         </Link>

//         <ul className="nav__list">

//           <Link to='/'>
//             <li className="nav__item">About Me</li>
//           </Link>

//           <Link to='/Plans'>
//             <li className="nav__item">Plans</li>
//           </Link>

          
//             <li className="nav__item"><a href="https://docs.google.com/forms/d/e/1FAIpQLSe_GMrl59g4LeierD0XkO2S5yLU6P8b4ItKtrvmfRnj4p4SmA/viewform?usp=sf_link" target="_blank" className="nav__link">Schedule With Me</a></li>
          
          
          
//         </ul>
//       </nav>

//     </header>
//   )
// }

// export default Header