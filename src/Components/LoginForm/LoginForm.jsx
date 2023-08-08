import { useState } from 'react'
import './loginForm.styles.scss'
import {ReactComponent as Show} from './../../assets/svgs/show.svg'
import {ReactComponent as Hide} from './../../assets/svgs/hide.svg'
const LogInForm = () => {

    const [visible,setVisible] = useState(false)
    const visibilityToggle= ()=>{
        setVisible(!visible)
    }
    return (
        <div>
            <div className="login-form-container" >

                <form className="login-form">
                    <div className="input-box">
                        <label htmlFor="log-email">Email</label>
                        <input className='input-text' id='log-email' type="email" required />
                    </div>
                    <div className="input-box">
                        <label htmlFor="log-password">Password</label>
                        <input className='input-text' type={visible ? "text" : "password"} id='log-password' required />
                        <span className='visibility' onClick={visibilityToggle} >{visible ? <Hide/> : <Show/>}</span>
                    </div>
                    
                    <label htmlFor="log-rem" className='log-remember'>Remember me <input type="checkbox" id='log-rem' /></label>
                    <button type="submit" className="form-btn">LOG IN</button>
                    <a href='/'>Forgot password?</a>
                </form>
            </div>
        </div>
    )
}

export default LogInForm