

const Register = () => {

    return (
        <div className="login-form-container" >
            <form action="" className="login-form" >
                <input required placeholder='name' type="text" />

                <input required placeholder='email' type="text" />

                <input required placeholder='password' type="password" />

                <input required placeholder='confirm password' type="password" />
                <button className='create-account'>CREATE ACCOUNT</button>
            </form>
        </div>
    )
}

export default Register