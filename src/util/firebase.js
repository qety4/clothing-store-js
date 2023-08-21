import {firebaseToken} from './.firebaseToken.js'

import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    setPersistence,
    browserSessionPersistence,
    inMemoryPersistence,
    browserLocalPersistence
} from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'


const app = initializeApp({
   ...firebaseToken
});


const provider = new GoogleAuthProvider()
export const auth = getAuth()


export const signInWithEmail = async (email, password) => {
    const userCred = await signInWithEmailAndPassword(auth, email, password)
    return userCred.user
}
export const signIn = async (email,password,bool)=>{
    bool ?
    await setPersistence(auth,browserLocalPersistence)
    .then(()=>
    signInWithEmail(email,password)
    )
    :
    await setPersistence(auth,browserSessionPersistence)
    .then(()=>
    signInWithEmail(email,password))
}

export const signInWithGooglePopup = () => setPersistence(auth,browserSessionPersistence).then(()=>signInWithPopup(auth, provider))

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
        const { displayName } = userAuth
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






