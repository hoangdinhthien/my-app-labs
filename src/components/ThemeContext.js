import React from "react";
import { useState, useEffect } from "react";

const themes = {
    dark: {
        backgroundColor: 'black',
        color: 'white',
    },
    light: {
        backgroundColor: 'white',
        color: 'black',
    }
};

const initialState = {
    dark: false,
    theme: themes.light,
    toggle: () => { }
};

const ThemeContext = React.createContext( initialState );

//•	Create a method which wraps all children with ThemeContext.Provider component 
//and export this method and the actual ThemeContext object that we created just before.
function ThemeProvider ( { children } ) {
    const [dark, setDark] = useState( false ); //default theme is light 

    //On mount, read the preferred theme from the persistence
    useEffect( () => {
        const isDark = localStorage.getItem( 'dark' ) === 'true';

        //store the state mode tow the local storage
        setDark( isDark );
    }, [dark] );

    //To toggle between dark and light modes 
    const toggle = () => {
        const isDark = !dark;
        localStorage.setItem( 'dark', JSON.stringify( isDark ) );
        setDark( isDark );
    };

    const theme = dark ? themes.dark : themes.light;
    return (
        <ThemeContext.Provider value={{ theme, dark, toggle }}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeProvider, ThemeContext };