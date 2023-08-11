import { createContext, useEffect,useReducer } from "react"

import {authStateChangeListener,createUserDocumentFromAuth,signOutUser} from './../util/firebase.js'


export const UserContext = createContext({
    currentUser: null,
    currentUserInfo:null,
    rememberUser:false,
    setCurrentUser: ()=> null,
    setRememberUser:()=> null
})

export const USER_ACTION_TYPES ={
    SET_CURRENT_USER : 'SET_CURRENT_USER',
    SET_USER_INFO: 'SET_USER_INFO',
    SET_REMEMBER_USER:'SET_REMEMBER_USER'
}

let INITIAL_STATE = {
    currentUser:null,
    currentUserInfo:null,
    rememberUser:false
}

const remember = localStorage.getItem('rem')
if (remember){
    const rem = localStorage.getItem('rem')
    INITIAL_STATE={
        ...INITIAL_STATE,
        rememberUser:rem
    }
}

const userReducer = (state,action)=>{
    const {type,payload} = action


    switch(type){
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser:payload}
        case 'SET_USER_INFO':
            return{
                ...state,
                currentUserInfo:payload
            }
        case 'SET_REMEMBER_USER':
            return{
                ...state,
                rememberUser:payload
            }
        default:
            throw new Error(`unhandled type ${type} in userReducer`)
    }

}



export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)

    const {currentUser,currentUserInfo,rememberUser} = state
    console.log(currentUser)
    console.log(currentUserInfo)

    
    const setCurrentUser = (user)=>{
        dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user});
    }
    
    const setCurrentUserInfo = (user)=>{
        dispatch({type: USER_ACTION_TYPES.SET_USER_INFO, payload: user})
    }
    const setRememberUser = (bool)=>{
        dispatch({type:USER_ACTION_TYPES.SET_REMEMBER_USER,payload:bool})
        localStorage.setItem('rem',bool)
    }
    
    const value = { currentUser, setCurrentUser, currentUserInfo,setRememberUser}   
    
    useEffect(()=>{
        const stopListener = authStateChangeListener((user)=>{
            console.log('current',user) 
            if(user){
                createUserDocumentFromAuth(user)
                .then((user)=> setCurrentUserInfo(user._document.data.value.mapValue.fields))
            }
            setCurrentUser(user);
        })
        const onUnmount = ()=>{
            if (!rememberUser) {
                signOutUser()
                setCurrentUserInfo(null)
            }
            return stopListener
        }
        return onUnmount
    },[]);
    
    return (
        <UserContext.Provider value={value}>
                {children}
        </UserContext.Provider>)
}