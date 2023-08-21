import { useState } from 'react'
import './loginModal.styles.scss'
import { ReactComponent as GoogleSvg} from './../../assets/svgs/google.svg'
import {signInWithGooglePopup} from './../../util/firebase.js'
import LogInForm from '../LoginForm/LoginForm.jsx'
import Register from '../Register/Register'
import { useEffect } from 'react'

const body= document.body


const LogIn = () => {
    const [modal, setModal] = useState(false);
    const [log, setLog] = useState(0)

    useEffect(()=>{
        return ()=>{
            body.classList.remove('stop-scroll')
            setModal(false)
        }
    },[])

    const toggle = () => {
        setModal(!modal)
    }
    const toggleLogin = (e) => {
        setLog(e)
    }
    if (modal){
        body.classList.add('stop-scroll')
    }else{
        body.classList.remove('stop-scroll')
    }


    
    const signInWithGoogle = async ()=>{
        await signInWithGooglePopup()
    }

    return (
        <>
            <button
                className='login-btn'
                onClick={toggle}
            >
                LOGIN
            </button>
            {
                modal && (
                    <div className="login-modal">
                        <div className='login-modal-overlay' onClick={toggle}></div>
                        <div className='login-modal-content'>
                            <h3>Welcome</h3>
                            <div className='login-register'>
                                <p
                                    className={log === 0 ? 'login' : ''}
                                    onClick={() => { toggleLogin(0) }}>LOGIN</p>
                                <p
                                    className={log === 0 ? '' : 'login'}
                                    onClick={() => toggleLogin(1)}>SIGN UP</p>
                            </div>
                            <div className='modal-form'>
                                {
                                    log === 0 ?
                                        <>
                                            <LogInForm />
                                            <p className='reg-link'>don't have an account? <b onClick={() => toggleLogin(1)}>register</b></p>

                                        </>
                                        :
                                        <>
                                            <Register />

                                        </>
                                }
                            </div>
                            <p className='modal-or'>OR</p>
                            <button className='mail-signin' onClick={signInWithGoogle} ><GoogleSvg/>  sign in with google</button>

                            
                            {/* <button className='close-modal-btn' onClick={toggle}>&#10005;</button> */}
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default LogIn