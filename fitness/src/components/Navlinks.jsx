import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavLinksContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    text-decoration: 'none';
    color: black;
`;

const LinksWrapper = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    height: 100%;
    list-style: none;
    text-decoration: 'none';
    color: black;
    background-color: #fff;
    width: 100%;
`;

const LinkItem = styled.li`
    height: 100%;
    padding: 0 1.1em;
    color: #222;
    font-weight: 500;
    font-size: 14px;
    text-decoration: 'none';
    color: black;
    align-items: center;
    justify-content: flex-end;
    display: flex;
    border-top: 2px solid transparent;
    transition: all 200ms ease-in-out;

    &:hover,  &:link {
        border-top: 2px solid #2ecc71;
        text-decoration: none;
    }
`;

const Links = styled.a`
    text-decoration: none;
    color: #222;
`;

export function NavLinks(prop){
    return <NavLinksContainer>
        <LinksWrapper>
            <LinkItem>
                <Link to='Plans'>
                    <Links href="#">Plans</Links>
                </Link>
            </LinkItem>

            <LinkItem>
                <Links href="https://docs.google.com/forms/d/e/1FAIpQLSe_GMrl59g4LeierD0XkO2S5yLU6P8b4ItKtrvmfRnj4p4SmA/viewform?usp=sf_link" target="_blank">Schedule With Me</Links>
            </LinkItem>
        </LinksWrapper>
    </NavLinksContainer>
}

export default NavLinks