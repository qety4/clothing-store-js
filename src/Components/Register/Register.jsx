import { useState } from 'react'
import './register.styles.scss'
import { ReactComponent as Show } from './../../assets/svgs/show.svg'
import { ReactComponent as Hide } from './../../assets/svgs/hide.svg'
import { createAuthUser, createUserDocumentFromAuth } from './../../util/firebase.js'


const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const Register = () => {
    const [visible, setVisible] = useState(false)

    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields


    const visibilityToggle = () => {
        setVisible(!visible)
    }


    const resetForm = (defaultForm) => {
        setFormFields(defaultForm)
    }

    const submit = async (event) => {
        event.preventDefault()
        console.log(event)
        if (password === confirmPassword) {
            try {
                const {user} = await createAuthUser(email, password)
                console.log(user)
                await createUserDocumentFromAuth(user, {displayName})
                alert('user created !')
            } catch (e) {
                switch (e.code) {
                    case 'auth/email-already-in-use':
                        alert('Cannot create user, email already used')
                        break
                    case 'auth/weak-password':
                        alert('Password, should be at least 6 figures long ')
                        break
                    default:
                        alert(e.code)
                }
                console.log('user creation error', e)
            }
            finally {
                resetForm(defaultFormFields)
            }
        }
        else {
            alert('password did not match')
        }
    }



const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value })
}


return (
    <div className="reg-form">
        <div className="login-form-container" >
            <form action="" className="login-form" onSubmit={(e) => submit(e)}>
                <div className="input-box">
                    <label htmlFor="reg-email">Email</label>

                    <input className='input-text'
                        name='email'
                        value={email}
                        onChange={handleChange}
                        required idr='reg-email'
                        type="email"
                    />

                </div>
                <div className="input-box">
                    <label htmlFor="reg-name">Name</label>

                    <input className='input-text'
                        name='displayName'
                        value={displayName}
                        onChange={handleChange}
                        required 
                        id='reg-name'
                        type="text"
                    />

                </div>
                <div className="input-box">
                    <label htmlFor="password">Password</label>

                    <input className='input-text'
                        name='password'
                        value={password}
                        onChange={handleChange}
                        type={visible ? "text" : "password"}
                        required
                        id='password'
                    
                    />

                    <span className='visibility' onClick={visibilityToggle} >{visible ? <Hide /> : <Show />}</span>
                </div>
                <div className="input-box">
                    <label htmlFor="confirm-password">Confirm password</label>

                    <input className='input-text'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={handleChange}
                        type={visible ? "text" : "password"}
                        required
                        id='confirm-password'
                    
                    />

                </div>
                <button className='form-btn'>CREATE ACCOUNT</button>
            </form>
        </div>
    </div>
)
}

export default Register