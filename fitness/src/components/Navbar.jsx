import React from 'react'
import NavItem from './NavItem'
import './Compon.css'
// import { useMediaQuery } from 'react-responsive'
// import styled from 'styled-components'
// import { Logo } from './Logo'
// import { NavLinks } from './NavLinks'
// import { DeviceSize } from './responsive'
// import { MobileNavLinks } from './MobileNavLinks'


export function Navbar (props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav"> <NavItem /> </ul>

    </nav>
  )
}

// export default Navbar
// const NavbarContainer = styled.div`
//   width: 100%;
//   height: 90px;
//   box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
//   display: flex;
//   align-items: center;
//   padding: 0 1.5em;
//   background-color: #5FA8D3;
//   text-decoration: none;
// `;

// const LeftSection = styled.div`
//   display: flex;
//   text-decoration: none;
// `;

// const MiddleSection = styled.div`
//   display: flex;
//   flex: 2;
//   height: 100%;
//   justify-content: flex-end;
//   text-decoration: none;
// `;

// const RightSection = styled.div`
//   display: flex;
//   text-decoration: none;
// `;

// export function Navbar(props) {
//   const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
  
//   return (
//     <NavbarContainer>
//       <LeftSection>
//         <Logo />
//       </LeftSection>
//       <MiddleSection>{!isMobile && <NavLinks />}</MiddleSection>
//       <RightSection>
//         {!isMobile }
//         {isMobile && <MobileNavLinks />}
//       </RightSection>
//     </NavbarContainer>
//   );
// }



