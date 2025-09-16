import React, {createContext, useReducer} from "react";

const initialState = {
    // TODO: Define your global states whatever you want to use on this project
    user: null,
    theme: 'light',
    // blah blah blah
};

// Reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.payload };
        case 'TOGGLE_THEME':
            return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
        // Add more cases for other actions
        default:
            return state;
    }
};

const AppContext = createContext();

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    );
}

export {AppContext, AppProvider};
