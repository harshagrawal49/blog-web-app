import React, { useState } from 'react';
import axios from "axios";
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate()

  const [formData, setFormdata] = useState({
    username: '',
    email: '',
    password: ''
  });

  const onUsernameChange = (e) => {
    const newUsername = e.target.value;
    setFormdata(prevState => ({
      ...prevState,
      username: newUsername
    }));
    console.log({ ...formData, username: newUsername });
  };

  const onEmailChange = (e) => {
    const newEmail = e.target.value;
    setFormdata(prevState => ({
      ...prevState,
      email: newEmail
    }));
    console.log({ ...formData, email: newEmail });
  };

  const onPasswordChange = (e) => {
    const newPassword = e.target.value;
    setFormdata(prevState => ({
      ...prevState,
      password: newPassword
    }));
    console.log({ ...formData, password: newPassword });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here, e.g., sending data to a server
    axios.post('http://localhost:3000/user/signup',formData)
    .then(function (response) {
        console.log(response);
        navigate('/signin')
    })
    .catch(function (error) {
        console.log(error);
    });
    console.log("user created via frontend")
  };

  return (
    <div className='flex justify-center items-center w-screen h-[600px]'>
      <div className='flex flex-col'>
        <div className='w-[200px]'>
          <h1>HARSH'S blog</h1>
          <p className='font-sm'>
            This is a demo project. You can sign up with your email and password or with Google.
          </p>
        </div>
      </div>
      <div className='w-1/2 flex justify-center items-center'>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <label htmlFor="username">Your username</label>
          <input
            type="text"
            id="username"
            placeholder='username'
            className='border rounded-lg h-[40px] w-[300px] bg-slate-100 border-slate-300'
            onChange={onUsernameChange}
          />
          <label htmlFor="email">Your email</label>
          <input
            type="text"
            id="email"
            placeholder="email"
            className='border rounded-lg h-[40px] w-[300px] bg-slate-100 border-slate-300'
            onChange={onEmailChange}
          />
          <label htmlFor="password">Your password</label>
          <input
            type="text"
            id="password"
            placeholder='password'
            className='border rounded-lg h-[40px] w-[300px] bg-slate-100 border-slate-300'
            onChange={onPasswordChange}
          />
          <button type="submit" className='mt-4 bg-blue-500 text-white rounded-lg h-[40px] w-[300px]'>
            Sign Up
          </button>
        <Link to='/signin'>Already have account? SigIn</Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
