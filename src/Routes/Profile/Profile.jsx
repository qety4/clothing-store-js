import React from 'react'
import './profile.styles.scss'
import { useContext } from 'react'
import { UserContext } from '../../Contexts/User.context'
import { signOutUser } from '../../util/firebase'
import { useNavigate } from 'react-router-dom'


const Profile = () => {
  const { currentUserInfo, currentUser } = useContext(UserContext)
  console.log(currentUserInfo)
  console.log(currentUser)
  const navigate = useNavigate()
  const signOut = () => {
    navigate('/')
    signOutUser()
  }
  return (
    <>
      <div className='profile-info-container'>
        {
          currentUserInfo ?
          <>
            <p className='profile-title'><b>Profile
            </b>
            </p>
            <p className='name-profile'><b>Name:</b> {currentUserInfo.displayName.stringValue}
            </p>
            <p className='email-profile'><b>Email:</b> {currentUserInfo.email.stringValue}
            </p>
            <p className='date-profile'><b>Date Created at:</b> {currentUserInfo.createdAt.timestampValue}
            </p>
          </>:''
        }
      </div>

      <button className="sign-out-button" onClick={signOut}>Sign Out</button>
    </>
  )
}

export default Profile