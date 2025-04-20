import { motion } from 'framer-motion';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password || (!isLogin && (!confirmPassword || !fullName))) {
      return setError("Please fill in all required fields.");
    }

    if (!isLogin && password !== confirmPassword) {
      return setError("Passwords do not match.");
    }

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Account created!");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 text-white">
      <div className="max-w-md w-full mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-primary p-8 rounded-lg shadow-xl"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">
              {isLogin ? 'Welcome Back!' : 'Create an Account'}
            </h1>
            <p className="text-gray-300">
              {isLogin 
                ? 'Sign in to access your account' 
                : 'Join us to get started with your design journey'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-2 rounded-md bg-primary-light focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="John Doe"
                />
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-primary-light focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 rounded-md bg-primary-light focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-2 rounded-md bg-primary-light focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
            )}

            {error && (
              <div className="text-red-500 text-sm text-center">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent-dark py-3 rounded-md transition-colors"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-accent hover:text-accent-light"
            >
              {isLogin 
                ? "Don't have an account? Sign up" 
                : "Already have an account? Sign in"}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
