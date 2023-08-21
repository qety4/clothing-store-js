import { createContext, useEffect, useReducer } from "react"

import { authStateChangeListener, createUserDocumentFromAuth, signOutUser } from './../util/firebase.js'


export const UserContext = createContext({
    currentUser: null,
    currentUserInfo: null,
    setCurrentUser: () => null,
})

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER',
    SET_USER_INFO: 'SET_USER_INFO',
}

const INITIAL_STATE = {
    currentUser: null,
    currentUserInfo: null,
}




const userReducer = (state, action) => {
    const { type, payload } = action


    switch (type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: payload
            }
        case 'SET_USER_INFO':
            return {
                ...state,
                currentUserInfo: payload
            }
        default:
            throw new Error(`unhandled type ${type} in userReducer`)
    }

}



export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)

    const { currentUser, currentUserInfo } = state
    console.log(currentUser)
    console.log(currentUserInfo)


    const setCurrentUser = (user) => {
        dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
    }

    const setCurrentUserInfo = (user) => {
        dispatch({ type: USER_ACTION_TYPES.SET_USER_INFO, payload: user })
    }


    useEffect(() => {
        const stopListener = authStateChangeListener((user) => {
            console.log('current', user)
            if (user) {
                createUserDocumentFromAuth(user)
                    .then((user) => user && setCurrentUserInfo(user.data()))
            }
            setCurrentUser(user);
        }
        )

        return stopListener
    }, []);

    const value = { currentUser, setCurrentUser, currentUserInfo}
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>)
}