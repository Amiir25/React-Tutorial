import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Auth = () => {

  const [mode, setMode] = useState('signup');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const {register, handleSubmit, formState: {errors}} = useForm();

  const {signup, login} = useContext(AuthContext);

  const onSubmit = (data) => {
    setError(null);
    let result;

    if (mode === "signup") {
      result = signup(data.email, data.password);
    } else {
      result = login(data.email, data.password);
    }

    if (result.success) {
      navigate('/');
    } else {
      setError(result.error);
    }

    console.log(result);
  }
  
  return (
    <section className='w-full h-full mt-20'>
      <div className='w-75 bg-white rounded mx-auto p-4'>
        
        <h1 className='text-3xl font-bold'>
          {mode === "signup" ? 'Sign Up' : 'Login'}
        </h1>
        
        <form onSubmit={handleSubmit(onSubmit)} className='mt-6'>
          {error && <p className='bg-red-200 text-red-600 p-2 rounded'>{error}</p> }
          <div className='mt-4'>
            <label htmlFor="email">Email</label>
            <input type="text" id='email'
            className='border border-gray-400 rounded block'
            {...register("email", {required: "Email is required"})} />
            {errors.email && 
              <span className='text-sm text-red-500'>
                {errors.email.message}
              </span>
            }
          </div>

          <div className='mt-4'>
            <label htmlFor="password">Password</label>
            <input type="password" id='password'
            className='border border-gray-400 rounded block'
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 4,
                message: "Password must be at least 4 characters"
              },
              maxLength: {
                value: 12,
                message: "Password must be at most 12 characters"
              }
            })} />
            {errors.password && 
              <span className='text-sm text-red-500'>
                {errors.password.message}
              </span>
            }
          </div>

          <button type='submit' className='mt-8 mb-2 bg-blue-600 text-white px-3 py-1 rounded'>
            {mode === "signup" ? 'Sign Up' : 'Login'}
          </button>

          {mode === "signup" ?
            <p
            onClick={() => setMode("login")}
            className='text-sm'>Already have an account?
            <span className='text-blue-600 cursor-pointer'> Login</span></p>
            :
            <p
            onClick={() => setMode("signup")}
            className='text-sm'>Don't have an account?
            <span className='text-blue-600 cursor-pointer'> Sign Up</span></p>
          }
        </form>

      </div>
    </section>
  )
}

export default Auth