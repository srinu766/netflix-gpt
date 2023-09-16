import React from 'react'
import Netflix_logo from "../Asserts/Netflix_Logo.png"
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector(store => store.user);
  const handleSignOut =()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error")

    });
    
  }
  return (
    <div className=' w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
    <img className='' src={Netflix_logo} width={150}
    alt='logo'/>
    {user && <div className='flex p-2'>
      <img className=' w-10 h-10' alt='userIcon' 
      src={user?.photoURL}/>
      <button onClick={handleSignOut} className='font-bold text-white ml-2'>(Sign Out)</button>
    </div>}
    </div>
  )
}

export default Header;

