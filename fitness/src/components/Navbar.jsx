import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import { Logo } from './Logo'
// import { Accessibility } from "./accessibility";
import { NavLinks } from './NavLinks'
import { DeviceSize } from './responsive'
import { MobileNavLinks } from './MobileNavLinks'

const NavbarContainer = styled.div`
  width: 100%;
  height: 90px;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  display: flex;
  align-items: center;
  padding: 0 1.5em;
  background-color: #5FA8D3;
  text-decoration: none;
`;

const LeftSection = styled.div`
  display: flex;
  text-decoration: none;
`;

const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: flex-end;
  text-decoration: none;
`;

const RightSection = styled.div`
  display: flex;
  text-decoration: none;
`;

export function Navbar(props) {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
  
  return (
    <NavbarContainer>
      <LeftSection>
        <Logo />
      </LeftSection>
      <MiddleSection>{!isMobile && <NavLinks />}</MiddleSection>
      <RightSection>
        {!isMobile }
        {isMobile && <MobileNavLinks />}
      </RightSection>
    </NavbarContainer>
  );
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