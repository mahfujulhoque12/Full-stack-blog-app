import { useForm } from 'react-hook-form';
import { Link } from 'react-router'; // Update to react-router-dom
import axios from 'axios';
import { useState } from 'react'; // Add useState

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [serverError, setServerError] = useState(''); // State for server errors

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/api/auth/register', data);
      console.log(response, 'response');
      setServerError(''); // Clear any previous errors
      // Optionally, redirect or show success message
    } catch (error) {
      console.log(error, 'error here');
      // Extract and display server error message
      if (error.response && error.response.status === 409) {
        setServerError('A user with this email or username already exists.');
      } else {
        setServerError('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        {/* Display server error */}
        {serverError && (
          <p className="text-red-500 text-sm mb-4 text-center">{serverError}</p>
        )}

        {/* Username */}
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

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email address' },
            })}
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
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
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-xl transition-colors"
        >
          Register
        </button>

        <p className="text-sm font-normal mt-4">
          Already have an account? <Link to="/login" className="font-semibold text-blue-500">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;