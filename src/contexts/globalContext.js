import React, { createContext, useState, useContext, useEffect } from 'react';

const GlobaContext = createContext({
    themeName: "dark"
}
);

export const globalProvider = ({ children }) => {

    const themes = {
        dark: {
            background: '#222844',
            color: '#EBEBEB',
        },
        light: {
            background: '#dfdfdf',
            color: '#000000',
        }
    }
    const [themeName, setThemeName] = useState("dark");
    const [theme, setTheme] = useState(themes[themeName]);


    const setCSSVariables = theme => {
        for (const value in theme) {
            document.documentElement.style.setProperty(`--${value}`, theme[value]);
        }
    };
    useEffect(() => {
        setCSSVariables(theme);
    }, [theme]);

    const toggleTheme = () => {
        if (themeName === "dark") {
            console.log(themes)
            setTheme(themes.light);
            setThemeName("light");
        } else {
            console.log(theme)
            setTheme(themes.dark);
            setThemeName("dark");
        }
    };
    const [language, setLanguage] = useState('es');


    const toggleLanguage = () => {
        setLanguage(prevLanguage => (prevLanguage === 'en' ? 'es' : 'en'));
    };

    const translate = (key) => {
        return dictionary[language][key] || key;
    };

    return (
        <GlobaContext.Provider value={{ toggleTheme, themeName, setCSSVariables, language, toggleLanguage, translate }}>
            {children}
        </GlobaContext.Provider>
    );
};

export const useGlobal = () => useContext(GlobaContext);