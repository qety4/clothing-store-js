import './loginForm.styles.scss'

const LogInForm =()=>{

return(
    <div>
        <div className="login-form-container" >

            <form className="login-form">
                    <input className='input-text' type="text" required placeholder="Username" />
                    <input className='input-text' type="password" required placeholder="Password" />
                    <label htmlFor=""><input type="checkbox" />Remember me</label>
                    <a href="">Forgot password?</a>
                <button type="submit" className="btn">Log In</button>
            </form>
        </div>
    </div>
)
}

export default LogInForm