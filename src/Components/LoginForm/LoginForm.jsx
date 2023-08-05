import './loginForm.styles.scss'

const LogInForm = () => {

    return (
        <div>
            <div className="login-form-container" >

                <form className="login-form">
                    <div className="input-box">
                        <label htmlFor="log-email">Email</label>
                        <input className='input-text' id='log-email' type="text" required />
                    </div>
                    <div className="input-box">
                        <label htmlFor="log-password">Password</label>
                        <input className='input-text' type="password" id='log-password' required />
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