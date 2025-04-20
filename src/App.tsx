import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Work from './pages/Work';
import Newsletter from './pages/Newsletter';
import BrandIdentity from './pages/BrandIdentity';
import LogoDesign from './pages/LogoDesign';
import PostDesign from './pages/PostDesign';
import Auth from './pages/Auth';
import Privacy from './pages/Privacy';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary-dark">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/brand-identity" element={<BrandIdentity />} />
            <Route path="/services/logo-design" element={<LogoDesign />} />
            <Route path="/services/post-design" element={<PostDesign />} />
            <Route path="/work" element={<Work />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;