import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Instagram, Atom as Tiktok } from 'lucide-react';

export default function Home() {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-dark bg-opacity-70"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Design That Speaks
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Let your brand visuals do the talking with clarity, purpose, and impact
            </p>
            <Link to="/services" className="inline-block bg-accent hover:bg-accent-dark px-8 py-3 rounded-md transition-colors">
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Who We Are Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="w-full">
              <img
                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80"
                alt="Who We Are"
                className="rounded-lg w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
              <div className="text-gray-300 mb-6 space-y-4">
                <p>Hey there! I'm Rabbit — not your average designer name, right? But behind the quirky name is a passionate creative soul who's all about bringing brands to life through smart, stylish design.</p>
                <p>I don't just make things look good — I help businesses feel right. From unique visual identities to scroll-stopping social media content, I mix strategy with a splash of fun to make your brand unforgettable.</p>
                <p>I'm also pretty active on socials — always sharing tips, trends, and design inspo to help you grow your brand with confidence.</p>
                <p>🔍 Starting fresh or giving your brand a glow-up? I've got your back with designs that speak, shine, and stick.</p>
                <p>✨ Go ahead, scroll through my work — I bet your next favorite design is just a swipe away!</p>
              </div>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/design_rabb1t?igsh=MXJoZ2oxdXBxZGFreg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a 
                  href="https://www.tiktok.com/@rab_it.0?_t=ZM-8vYeTcfGUsR&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent transition-colors"
                >
                  <Tiktok size={24} />
                </a>
                <a 
                  href="https://pin.it/2WbbqrMCI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0a12 12 0 0 0-4.373 23.178c-.01-.937-.02-2.375.492-3.398.446-.861 2.882-5.574 2.882-5.574s-.738-1.476-.738-3.655c0-3.425 1.987-5.981 4.461-5.981 2.106 0 3.123 1.58 3.123 3.472 0 2.116-1.344 5.277-2.04 8.206-.577 2.447 1.227 4.444 3.642 4.444 4.375 0 7.312-5.625 7.312-12.287 0-5.063-3.415-8.85-9.621-8.85-7.008 0-11.381 5.223-11.381 11.063 0 2.016.758 3.437 1.946 4.535.216.262.246.492.185.754-.205.84-.663 2.647-.754 3.01-.12.492-.394.594-.912.36-3.412-1.582-5.001-5.82-5.001-10.587C1.623 4.814 6.832 0 13.661 0 19.148 0 24 3.84 24 9.936c0 5.328-2.957 9.309-7.312 9.309-1.462 0-2.834-.79-3.303-1.688l-.897 3.57c-.324 1.248-1.203 2.808-1.79 3.756A12.01 12.01 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* What We Offer Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
              <div className="text-gray-300 mb-6 space-y-4">
                <p>At Rabbit Design, I help your brand stand out from the crowd with bold, clear, and meaningful designs that people trust and remember.</p>
                <p>🔧 Here's what I do:</p>
                <ul className="list-none space-y-2">
                  <li>• Logo design that's simple, smart, and unique</li>
                  <li>• Brand colors, fonts & patterns that reflect your vibe</li>
                  <li>• Brand guidelines to keep everything consistent everywhere</li>
                  <li>• Social media designs that grab attention and spark engagement</li>
                </ul>
                <p>I don't just make things look good — I create brand stories that sell. Good design builds trust, boosts engagement, and helps your business grow.</p>
                <p>🎯 Design isn't just decoration. It's how your brand speaks — clearly, confidently, and with style.</p>
              </div>
              <Link to="/services" className="inline-block bg-accent hover:bg-accent-dark px-6 py-2 rounded-md transition-colors">
                Order Now
              </Link>
            </div>
            <div className="w-full order-1 md:order-2">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                alt="What We Offer"
                className="rounded-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Our Work Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="w-full">
              <img
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80"
                alt="Our Work"
                className="rounded-lg w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Work</h2>
              <div className="text-gray-300 mb-6 space-y-4">
                <p>Our design journey is packed with successful projects, happy clients, and brands that stand out. From small startups to growing businesses, we've created visual identities that turn heads and get results. Every project is a reflection of our passion for quality, creativity, and smart design.</p>
                <p>🛠️ With years of brand design experience, we know how to make a brand feel just as good as it looks.</p>
                <p>Want proof?</p>
                <p>🚀 Click below to check out our portfolio — and see how we've brought ideas to life with impact.</p>
              </div>
              <Link to="/work" className="inline-block bg-accent hover:bg-accent-dark px-6 py-2 rounded-md transition-colors">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}