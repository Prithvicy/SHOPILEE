import React , {createContext, useContext , useReducer} from 'react'

// basically preparing the data layer
export const StateContext = createContext();

//Wraps our app and provides the data layer to every comonent of the app
export const StateProvider=({reducer, initialState , children}) =>(
    <StateContext.Provider value={useReducer (reducer, initialState)}>
     {children}   
    </StateContext.Provider>
)

//pull info from the data layer 
export const useStateValue = () => useContext(StateContext);