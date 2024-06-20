import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { signInFailure, signInSuccess, signInStart } from '../redux/user/userSlice';

const Signin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const onSubmit = async (data) => {
    dispatch(signInStart());
    try {
      const response = await axios.post('http://localhost:3000/auth/signin', data);
      dispatch(signInSuccess(response.data));
      navigate('/home');
    } catch (err) {
      dispatch(signInFailure(err.message));
    }
  };

  if (user.isLoggedIn) {
    navigate('/home');
  }

  return (
    <div className='flex justify-center items-center w-screen h-[600px]'>
      <div className='flex flex-col'>
        <div className='w-[400px]'>
          <h1>HARSH'S blog</h1>
          <p className='font-sm'>
            This is a demo project. You can sign up with your email and password or with Google.
          </p>
        </div>
      </div>
      <div className='w-1/2 flex justify-center items-center'>
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="username">Your username</label>
          <input 
            placeholder='username'
            className='border rounded-lg h-[40px] w-[300px] bg-slate-100 border-slate-300'
            {...register("username", { required: true })}
          />
          {errors.username && <span className="text-red-500">Username is required</span>}
          
          <label htmlFor="password">Your password</label>
          <input 
            type='password'
            placeholder='password'
            className='border rounded-lg h-[40px] w-[300px] bg-slate-100 border-slate-300'
            {...register("password", { required: true })}
          />
          {errors.password && <span className="text-red-500">Password is required</span>}
          
          <button type="submit" className='mt-4 bg-blue-500 text-white rounded-lg h-[40px] w-[300px] '>
            Sign In
          </button>
          <Link to='/signup' className='mt-2 text-blue-500'>Don't have an account? Sign Up</Link>
        </form>
      </div>
    </div>
  );
}

export default Signin;
