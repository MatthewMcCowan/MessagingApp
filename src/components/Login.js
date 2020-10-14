import React from "react";
import sketchArt from "../image/sketch-3045125_1920.jpg";
import {auth, provider } from '../firebase/firebase'

const Login = () => {
    const singIn = () => {
        auth.signInWithPopup(provider).catch( (error) => alert(error.message))
    }
    
  return (
    <div className="login">
      <div className="login__logo flex flex-col items-center h-screen bg-gray-200 place-content-center">
        <img
          src={sketchArt}
          alt="logo space"
          className="w-40 h-40 rounded-full border-2 p-2 bg-blue-300  object-contain"
        />
        <h2 className='text-5xl font-bold text-gray-700 mb-40'>Star Message</h2>
        <button onClick={singIn} className='border-2 border-gray-700 tracking-wider shadow-xl py-2 px-8 rounded-lg bg-blue-300 uppercase text-2xl hover:text-white hover:bg-blue-600 hover:border-gray-800 hover:shadow-none'>Sign In</button>
      </div>
    </div>
  );
};

export default Login;
