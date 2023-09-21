import React, { useEffect } from 'react'
import { Logo } from '../utils/constants';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(store => store.user);

  const handleSignOut =()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      // navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error")

    });
  }


  
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in,
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({
          uid:uid, 
          email:email, 
          displayName:displayName, 
          photoURL:photoURL
        }));
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser());  
        navigate("/") 
      }
    });
    //unsubscribe is called when component unMount
    return ()=> unsubscribe()
  },[])

  return (
    <div className=' w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
    <img className='' src={Logo} width={150} alt='logo'/>
    {user && <div className='flex p-2'>
      <img className=' w-10 h-10' alt='userIcon' 
      src={user?.photoURL}/>
      <button onClick={handleSignOut} className='font-bold text-white ml-2'>(Sign Out)</button>
    </div>}
    </div>
  )
}

export default Header;

