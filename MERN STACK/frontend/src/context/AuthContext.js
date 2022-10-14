import {createContext, useReducer} from 'react'

export const AuthContext = createContext()

export const authReducer = (state,action) => {
    switch (action.type){
        case 'LOGIN':
            return{
                user: action.payload
            }
        case 'LOGOUT':
            return{
                user: null
            }
        default:
            return state
    }
}

export const AuthContextProvider = ({children}) => {
    const [state, dispath] = useReducer(authReducer, {
       user: null 
    })

    //! just for debbunging
    console.log('AuthContext state: ', state);

    return(
        <AuthContext.Provider value={{...state, dispath}}>
            {children}
        </AuthContext.Provider>
    )
}