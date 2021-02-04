import React from 'react'
import { Component } from 'react';
import styled from 'styled-components'
import ProdigyFitnessImg from "../images/3e6397c8-387e-4d6d-bee2-c669df7db54a_200x200.png"

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const LogoImg = styled.div`
    width: 29px;
    height: 29px

    img {
        width: 100%
        height: 100%
    }
`;

const LogoText = styled.h2`
    font-size: 16px;
    margin: 0px;
    margin-left: 4px
    color: #222;
    font-weight: 500px;
`;

// Rendering Logo Component

export function Logo(props){
    return <LogoWrapper>
        <LogoImg><img src={ProdigyFitnessImg} alt="Prodigy-Fitness" /></LogoImg>
        <LogoText>Prodigy Fitness</LogoText>
    </LogoWrapper>
}

export default Logo
