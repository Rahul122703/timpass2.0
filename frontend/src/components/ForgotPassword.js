import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth/login', { email, password });
            console.log('Login successful', response.data);
            // Store token in local storage or context
            navigate('/dashboard');
        } catch (error) {
            console.error('Login failed', error.response?.data);
        }
    };

    const handleGoogleLogin = async (response) => {
        try {
            const googleResponse = await axios.post('/api/auth/google-login', { token: response.tokenId });
            console.log('Google login successful', googleResponse.data);
            navigate('/dashboard');
        } catch (error) {
            console.error('Google login failed', error.response?.data);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold">Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded" required />
                    </div>
                    <div className="mb-4 relative">
                        <label className="block text-sm font-semibold">Password</label>
                        <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border rounded" required />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-10">
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-2">Login</button>
                </form>
                <GoogleLogin clientId="YOUR_GOOGLE_CLIENT_ID" buttonText="Login with Google" onSuccess={handleGoogleLogin} onFailure={handleGoogleLogin} className="w-full mt-3" />
                <p className="text-center text-sm mt-3"><a href="/forgot-password" className="text-blue-500">Forgot Password?</a></p>
            </div>
        </div>
    );
};

export default Login;
