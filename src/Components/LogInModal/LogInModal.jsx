import { useState } from 'react'
import './loginModal.styles.scss'

import LogInForm from '../LoginForm/LoginForm.jsx'
import Register from '../Register/Register'

const LogIn = () => {
    const [modal, setModal] = useState(false);
    const [log, setLog] = useState(0)
    
    const toggle = () => {
        setModal(!modal)
    }
    const toggleLogin = (e) => {
        setLog(e)
    }
    return (
        <div className='modal-container'>
            <button
                className='login-btn'
                onClick={toggle}
            >
                login
            </button>
            {
                modal && (
                    <div className="login-modal">
                        <div className='login-modal-overlay' onClick={toggle}></div>
                        <div className='login-modal-content'>
                            <h3>Hi 👋</h3>
                            <div className='login-register'>
                                <p
                                    className={log === 0 ? 'login' : ''}
                                    onClick={() => { toggleLogin(0) }}>Login</p>
                                <p
                                    className={log === 0 ? '' : 'login' }
                                    onClick={() => toggleLogin(1)}>Sign Up</p>
                            </div>
                            <div className='modal-form'>
                            {
                                log === 0 ?
                                <>
                                        <LogInForm />
                                        <div className="register-link">
                                            <p>Don't have an account ? <b onClick={() => toggleLogin(1)}>Register</b></p>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <Register />
                                
                                    </>
                            }
                            </div>
                            <p>OR</p>
                            <button className='mail-signin'>sign in with google</button>

                            <button className='close-modal' onClick={toggle}>close</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default LogIn