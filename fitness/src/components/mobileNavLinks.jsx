import React, { useState } from 'react'
import styled from 'styled-components'
import { MenuToggle } from './menuToggle'
import { Link } from 'react-router-dom'

const NavLinksContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;

const LinksWrapper = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    height: 100%;
    list-style: none;
    background-color: #fff;
    width: 100%;
    flex-direction: column;
    position: fixed;
    top: 65px;
    left: 0;
`;

const LinkItem = styled.li`
    width: 100%;
    padding: 0 1.1em;
    color: #222;
    font-weight: 500;
    font-size: 16px;
    display: flex;
    margin-bottom: 10px;
`;

const Links = styled.a`
    text-decoration: none;
    color: inherit;
    font-size: inherit;
`;

const Marginer = styled.div`
    height: 2em;
`;

export function MobileNavLinks(props) {
    const [isOpen, setOpen] = useState(false);

    return (
        <NavLinksContainer>
        <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
        {isOpen && (
            <LinksWrapper>
            <LinkItem>
                <Link to='Plans'>
                    <Links>Plans</Links>
                </Link>
            </LinkItem>

            <LinkItem>
                <Links href="https://docs.google.com/forms/d/e/1FAIpQLSe_GMrl59g4LeierD0XkO2S5yLU6P8b4ItKtrvmfRnj4p4SmA/viewform?usp=sf_link" target="_blank">Schedule With Me</Links>
            </LinkItem>
            <Marginer />
        </LinksWrapper>
        )}
        </NavLinksContainer>
    );
}

export default MobileNavLinks