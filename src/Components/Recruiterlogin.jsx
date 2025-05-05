import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Recruiterlogin = () => {
  const navigate = useNavigate(); // Hook to navigate
  const [mode, setMode] = useState('Login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 const [textdata,settextdata]= useState(false)
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'auto');
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Blurred background */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0" />

      {/* Login form */}
      <div className="relative z-10 max-w-md w-full p-8 bg-white bg-opacity-90 rounded-xl shadow-lg">
        {/* Back button */}
        <div className="mb-4">
          <img
            src={assets.left_arrow_icon}
            alt="Back"
            onClick={() => navigate('/')}
            className="w-6 h-6 cursor-pointer"
          />
        </div>

        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Recruiter {mode}
        </h1>
        <p className="text-center text-gray-600 mb-6">
          {mode === 'Login'
            ? 'Please log in to continue'
            : 'Please sign up to continue'}
        </p>
        {mode==="Sign Up" && textdata ? <></> :<>
        
        </>}
         
        <div className="flex items-center mb-4 border-b-2 border-gray-300">
          <img src={assets.person_icon} alt="" className="w-5 h-5 mr-3" />
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Company Name"
            className="w-full px-4 py-2 text-gray-700 focus:outline-none"
          />
        </div>

        <div className="flex items-center mb-4 border-b-2 border-gray-300">
          <img src={assets.email_icon} alt="" className="w-5 h-5 mr-3" />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email ID"
            className="w-full px-4 py-2 text-gray-700 focus:outline-none"
          />
        </div>

        <div className="flex items-center mb-6 border-b-2 border-gray-300">
          <img src={assets.lock_icon} alt="" className="w-5 h-5 mr-3" />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 text-gray-700 focus:outline-none"
          />
        </div>

        <button className="text-blue-600 mb-4 hover:text-blue-800 text-sm">
          Forgot Password?
        </button>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          {mode === 'Login' ? 'Login' : 'Create Account'}
        </button>

        <div className="mt-4 text-center">
          <button
            onClick={() => setMode(mode === 'Login' ? 'Sign Up' : 'Login')}
            className="text-blue-600 hover:text-blue-800 text-sm"
          >
            {mode === 'Login'
              ? 'New to us? Create an account'
              : 'Already have an account? Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recruiterlogin;
