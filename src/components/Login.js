import React, { useState } from 'react'
import Header from './Header'


const Login = () => {
const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm =()=>{
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
    <Header/>
    <div className='absolute'>
    <img className=''src='https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg'
    alt='bg-img'/>
    </div>
    <form className='absolute p-14 m-5 bg-black w-[450px] h-[570px]  text-white  my-28 mx-auto right-0 left-0 bg-opacity-90'>
      <h1 className=' text-3xl font-bold p-2 my-6'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
      {!isSignInForm && <input type='text' placeholder='Full Name' className='p-2 m-2 w-full bg-gray-700 text-white rounded-lg'/>}
      <input type='text' placeholder='Email' className='p-2 m-2 w-full bg-gray-700 text-white rounded-lg'/>
      <input type='password' placeholder='Password' className='p-2 m-2 w-full bg-gray-700 text-white rounded-lg'/>
      <button className='p-3 m-2 my-4 bg-red-600 text-white font-bold w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign UP"}</button>
     <h1 className='p-3 m-2 my-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now.":"Already User? Sign In Now."}</h1>
      <div>
      <small className='p-3 m-2 my-4'>This page is protected by Google reCAPTCHA to<br/><span className='p-3 m-2 my-4'>ensure you're not a bot. <span className='text-blue-500 cursor-pointer '>Learn more.</span></span></small>
      </div>
    </form>
    </div>
  )
}

export default Login
