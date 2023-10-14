import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { BG_IMG } from '../utils/constants';
import { USER_AVATHAR } from '../utils/constants';


const Login = () => {
const dispatch = useDispatch();
const navigate = useNavigate()
const [isSignInForm, setIsSignInForm] = useState(true);
const [errorMessage, setErrorMessage] = useState(null);

const name = useRef(null);
const email = useRef(null);
const password = useRef(null);

const handleButtonClick = ()=>{
  // console.log(name.current.value);
  // console.log(email.current.value);
  // console.log(password.current.value);

  const message = checkValidData( email.current.value, password.current.value);
  // console.log(message)
  setErrorMessage(message);
  if(message) return;

  if(!isSignInForm){
    // Sign Up Logic
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value )
  .then((userCredential) => {
    const user = userCredential.user;
    // console.log(user)
    navigate("/browse");
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +" - "+ errorMessage);
  });

  }else{
    // Sign In Logic
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, 
      photoURL: USER_AVATHAR,
    }).then(() => {
      // Profile updated!
      const {uid, email, displayName, photoURL} = auth;  
      dispatch(addUser({
        uid:uid, 
        email:email, 
        displayName:displayName, 
        photoURL:photoURL
      }));
    }).catch((error) => {
      // An error occurred
      setErrorMessage(error.message);
    });

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +" - "+ errorMessage);
  });
  }
}

  const toggleSignInForm =()=>{
    setIsSignInForm(!isSignInForm);
  }

  const submitHandler =(e)=>{
    e.preventDefault()
  }


  return (
    <div>
    <Header/>
    <div className='absolute bg-opacity-95'>
    <img className='h-screen object-cover md:h-full' src={BG_IMG} alt='bg-img'/>
    </div>
    <form onSubmit={submitHandler} className='absolute px-4 md:p-14 m-5 bg-black w-full  md:w-[450px] md:h-[570px]  text-white  my-28 mx-auto right-0 left-0 bg-opacity-80'>
      <h1 className='text-2xl md:text-3xl font-bold p-2 my-6'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
      {!isSignInForm && <input  type='text' placeholder='Full Name' className='p-2 m-2 w-full bg-gray-700 text-white rounded-lg'/>}
      <input ref={email} type='text' placeholder='Email' className='p-2 m-2 w-full bg-gray-700 text-white rounded-lg'/>
      <input ref={password} type='password' placeholder='Password' className='p-2 m-2 w-full bg-gray-700 text-white rounded-lg'/>
      <p className='text-red-500 font-semibold px-2 m-2'>{errorMessage}</p>
      <button className='p-3 m-2 my-4 bg-red-600 text-white font-bold w-full rounded-lg'
      onClick={handleButtonClick}>
      {isSignInForm ? "Sign In" : "Sign UP"}</button>
      <p className='p-3 m-2 my-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now.":"Already User? Sign In Now."}</p>
      <div>
      <small className='p-3 m-2 my-4'>This page is protected by Google reCAPTCHA to<br/><span className='p-3 m-2 my-4'>ensure you're not a bot. <span className='text-blue-500 cursor-pointer '>Learn more.</span></span></small>
      </div>
    </form>
    </div>
  )
}

export default Login
