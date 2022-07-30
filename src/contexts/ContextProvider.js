import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}

export const ContextProvider = ({ children }) => {
   
    const [ activeMenu, setActiveMenu] = useState(true); 
    const [ isClicked, setIsClicked] = useState(initialState);
    const [ screenSize, setScreenSize] = useState(undefined);
    const [ currentColor, setCurrentColor] =useState("#264653");
    const [ currentMode, setCurrentMode ] = useState('Light');
    const [ themeSettings, setThemeSettings ] = useState(false);
    
    const setMode = (e) => {
        
        setCurrentMode(e.target.value);

        localStorage.setItem('themeMode', e.target.value);

        setThemeSettings(false);

    }

    const setColor = (e) => {
        
        setCurrentColor(e);

        localStorage.setItem('colorMode', e);

        setThemeSettings(false);
        
    }


    const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

    return (
        <StateContext.Provider 
        value={{ 
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
            screenSize,
            setScreenSize,
            currentColor, 
            setCurrentColor,
            currentMode, 
            setCurrentMode,
            setMode,
            setColor,
            themeSettings,
            setThemeSettings,
            initialState
            }}>
            {children}
        </StateContext.Provider>
    )

}

export const useStateContext = () => useContext(StateContext);