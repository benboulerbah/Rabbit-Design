import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogIn, LogOut } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsProfileOpen(false);
    navigate('/auth');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-primary z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white text-xl font-bold">Rabbit Design</Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-accent">Home</Link>
            <Link to="/services" className="text-white hover:text-accent">Services</Link>
            <Link to="/work" className="text-white hover:text-accent">My Work</Link>
            <Link to="/newsletter" className="text-white hover:text-accent">Newsletter</Link>
            
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="text-white hover:text-accent p-2 rounded-full"
              >
                <User size={20} />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-primary-light rounded-md shadow-lg py-1">
                  <button 
                    onClick={handleLogin}
                    className="flex items-center px-4 py-2 text-white hover:bg-primary-dark w-full"
                  >
                    <LogIn size={16} className="mr-2" />
                    Login
                  </button>
                  <button className="flex items-center px-4 py-2 text-white hover:bg-primary-dark w-full">
                    <LogOut size={16} className="mr-2" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-accent p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-white hover:bg-primary-light rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="block px-3 py-2 text-white hover:bg-primary-light rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/work"
                className="block px-3 py-2 text-white hover:bg-primary-light rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                My Work
              </Link>
              <Link
                to="/newsletter"
                className="block px-3 py-2 text-white hover:bg-primary-light rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Newsletter
              </Link>
              <div className="border-t border-primary-light mt-2 pt-2">
                <button 
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate('/auth');
                  }}
                  className="flex items-center px-3 py-2 text-white hover:bg-primary-light rounded-md w-full"
                >
                  <LogIn size={16} className="mr-2" />
                  Login
                </button>
                <button className="flex items-center px-3 py-2 text-white hover:bg-primary-light rounded-md w-full">
                  <LogOut size={16} className="mr-2" />
                  Logout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}