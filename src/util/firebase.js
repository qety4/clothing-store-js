import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'


const app = initializeApp({
    apiKey: "AIzaSyCZeMliLAFzhsUf4lbLh37__YlJKbemxfY",
    authDomain: "clothing-store-263ed.firebaseapp.com",
    projectId: "clothing-store-263ed",
    storageBucket: "clothing-store-263ed.appspot.com",
    messagingSenderId: "996498456112",
    appId: "1:996498456112:web:3e851cf0a6ccba5ebdb7f5"
});


const provider = new GoogleAuthProvider()
export const auth = getAuth()



export const signInWithGooglePopup = () => signInWithPopup(auth, provider)


export const signInWithEmail = async (email, password) => {

    const userCred = await signInWithEmailAndPassword(auth, email, password)
    return userCred.user
}


export const createAuthUser = async (email, password) => {
    
    return await createUserWithEmailAndPassword(auth, email, password)
    
}


export const signOutUser = async () => signOut(auth)


export const authStateChangeListener = (callback) => {
    
    onAuthStateChanged(auth, callback)
}


export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth, additionalinformation = {}) => {

    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef);


    if (!userSnapshot.exists()) {
        const { displayName } = userAuth || additionalinformation
        const { email } = userAuth

        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalinformation
            })
        } catch (e) {
            console.log('error creating project', e.message)
        }
    }
    console.log(userSnapshot)
    return userSnapshot
};






