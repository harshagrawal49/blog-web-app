import React from 'react'
import { useForm } from "react-hook-form"

const Signin = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
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
        <form className="flex flex-col"onSubmit={handleSubmit(onSubmit)}>
          <input 
            placeholder='username'
            className='border rounded-lg h-[40px] w-[300px] bg-slate-100 border-slate-300'
            {...register("username",  { required: true })}
            />
          <input 
          placeholder='password'
          className='border rounded-lg h-[40px] w-[300px] bg-slate-100 border-slate-300'
          {...register("password", { required: true })}
          />
          {errors.password && <span>This field is required</span>}
          <button type="submit" className='mt-4 bg-blue-500 text-white rounded-lg h-[40px] w-[300px]'>
            Sign In
          </button>
        </form>
      </div>
    </div>
  
    
  );
}

export default Signin