import React from 'react'
import './Compon.css'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// const NavLinksContainer = styled.div`
//     height: 100%;
//     display: flex;
//     align-items: center;
//     text-decoration: none;
// `

// const LinksWrapper = styled.ul`
//     margin: 0;
//     padding: 0;
//     display: flex;
//     height: 100%;
//     list-style: none;
//     text-decoration: none;
//     width: 100%;
// `;

// const LinkItem = styled.li`
//     height: 100%;
//     padding: 0 1.1em;
//     font-weight: 500;
//     font-size: 14px;
//     text-decoration: none;
//     color: #62b6cb;
//     align-items: center;
//     justify-content: flex-end;
//     display: flex;
//     border-top: 2px solid transparent;
//     transition: all 200ms ease-in-out;

//     &:hover,
//     &:link {
//     border-top: 2px solid #1b4965;
//     color: #000;
//     text-decoration: none;
// }
// `;

// const Links = styled.a`
//     color: black;
//     text-decoration: none;

//     &:hover,
//     &:focus,
//     &:active {
//     border-top: 2px solid #1b4965;
//     color: #000;
//     text-decoration: underline;
// }
// `;

export function NavItem() {
    return (
        <li className="nav-item">

            <Link to="/">
            <span className="icon-button"> 🦾 </span>
            </Link>

            <Link to="/Plans">
            <span className="icon-button"> 💳 </span>
            </Link>

            
            <span href="https://docs.google.com/forms/d/e/1FAIpQLSe_GMrl59g4LeierD0XkO2S5yLU6P8b4ItKtrvmfRnj4p4SmA/viewform?usp=sf_link" target="_blank" className="icon-button"> 📅 </span>
            


        </li>
    // <NavLinksContainer>
    //     <LinksWrapper>
    //         <LinkItem>
    //             <LinkItem>
    //                 <Link to="/">
    //                 <Links>PRODIGY FITNESS</Links>
    //             </Link>
    //         </LinkItem>

    //         <LinkItem>
    //             <Link to="Plans">
    //                 <Links>Plans</Links>
    //             </Link>
    //         </LinkItem>

    //         <LinkItem>
    //             <Links href="https://docs.google.com/forms/d/e/1FAIpQLSe_GMrl59g4LeierD0XkO2S5yLU6P8b4ItKtrvmfRnj4p4SmA/viewform?usp=sf_link"target="_blank">Schedule With Me</Links>
    //         </LinkItem>

    //         {/* <Link to="/">
    //                 <Links>MERCHANDISE</Links>
    //             </Link> */}
    //         </LinkItem>
    //     </LinksWrapper>
    // </NavLinksContainer>
    )
}

export default NavItem
