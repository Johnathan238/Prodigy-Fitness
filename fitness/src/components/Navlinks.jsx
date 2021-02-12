import React from 'react'
import styled from 'styled-components'

const NavLinksContainer = styled.div`
    height: 100%
    display: flex;
    align-items: center
`;

const LinksWrapper = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    height: 100%
`;

const LinkItem = styled.li`
    height: 100%
    padding 0 1.1em;
    color: #222;
    font-weight: 500;
    font-size: 14px;
    align-items: center;
    justify-content: center;aa
`;

const Link = styled.a`
    text-decoration: none;
    color: inherit
`;

export function NavLinks(prop){
    return <NavLinksContainer>
        <LinksWrapper>
            <LinkItem>
            <Link href="#">Plans</Link>
            </LinkItem>

            <LinkItem>
            <Link href="#">Schedule With Me</Link>
            </LinkItem>
        </LinksWrapper>
    </NavLinksContainer>
}

export default NavLinks