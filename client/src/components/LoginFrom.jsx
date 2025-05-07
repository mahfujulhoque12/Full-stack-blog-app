

import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';


const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [serverError, setServerError] = useState('');
  const navigate = useNavigate()
  const onSubmit = async (data) => {
    try {
       await axios.post('/api/auth/login', data);
       navigate("/")
      
      setServerError('');
      // Redirect or success message here if needed
    } catch (error) {
      console.log(error, 'error here');

      // ✅ Extract error message safely
      const message =
      error?.response?.data?.message || // ✅ new preferred
      error?.response?.data?.error ||   // ✅ fallback to "error"
      error?.message ||
      'Something went wrong';
    

      setServerError(message);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
         {/* Display server error */}
         {serverError && (
          <p className="text-red-500 text-sm mb-4 text-center">{serverError}</p>
        )}

        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">
            Username
          </label>
          <input
            id="username"
            type="text"
            {...register('username', { required: 'Username is required' })}
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your username"
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register('password', { required: 'Password is required' })}
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl transition-colors"
        >
          Login
        </button>

        <p className='text-sm font-normal mt-4'>Don't have any account <Link to="/register" className='font-semibold text-yellow-300'>Register</Link></p>
      </form>
    </div>
  );
};

export default LoginForm;
