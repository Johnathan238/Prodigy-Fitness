import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { button } from 'react-bootstrap'
import { lightTheme, darkTheme, GlobalStyles } from './Theme'

const StyledApp = styled.div`
    color: ${(props) => props.theme.fontColor};
`;

function DarkMode() {
    const [theme, setTheme] = useState("light");

    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
            <StyledApp>
                {/* <button onClick={() => themeToggler()}>Change Theme</button> */}
                <button onClick={() => themeToggler()} type="button" class="btn">Small button</button>
        </StyledApp>
    </ThemeProvider>
    );
}

export default DarkMode