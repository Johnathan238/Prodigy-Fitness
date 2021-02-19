import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const Button = styled.div`
    width: 2em;
    height: 3px;
    border-radius: 1em;
    transition: transform 250ms ease-in-out;
    outline: none;
    border: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    cursor: pointer;
    background: transparent;
`

const Path = (props) => (
    <motion.path
        fill="transparent"
        strokeLinecap="round"
        strokeWidth="3"
        {...props}
    />
)

const transition = { duration: 0.1 }

export function MenuToggle({ toggle, isOpen }) {
    return (
        <Button onClick={toggle}>
        <svg width="30" height="30" >
            <Path
                animate={isOpen ? 'open' : 'closed'}
                initial={false}
                variants={{
                    closed: { d: 'M 2 2.5 L 20 2.5', stroke: 'hsl(0, 0%, 18%)' },
                    open: { d: 'M 3 16.5 L 17 2.5', stroke: 'hsl(0, 0%, 18%)' },
            }}
            transition={transition}
        />
        <Path
            d="M 2 9.423 L 20 9.423"
            stroke="hsl(0, 0%, 18%)"
            animate={isOpen ? 'open' : 'closed'}
            initial={false}
            variants={{
                closed: { opacity: 1 },
                open: { opacity: 1 },
            }}
            transition={transition}
        />
        <Path
            animate={isOpen ? 'open' : 'closed'}
            initial={false}
            variants={{
                closed: { d: 'M 2 16.346 L 20 16.346', stroke: 'hsl(0, 0%, 18%)' },
                open: { d: 'M 3 2.5 L 17 16.346', stroke: 'hsl(0, 0%, 18%)' },
            }}
            transition={transition}
        />
            </svg>
        </Button>
    )
}

export default MenuToggle
