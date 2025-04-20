import { Facebook, Instagram, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Subscribe to Newsletter</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-md bg-primary-light focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="px-4 py-2 bg-accent hover:bg-accent-dark rounded-r-md transition-colors">
                <Send size={20} />
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61552515157565"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://www.instagram.com/design_rabb1t?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://pin.it/2WbbqrMCI"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0a12 12 0 0 0-4.373 23.178c-.01-.937-.02-2.375.492-3.398.446-.861 2.882-5.574 2.882-5.574s-.738-1.476-.738-3.655c0-3.425 1.987-5.981 4.461-5.981 2.106 0 3.123 1.58 3.123 3.472 0 2.116-1.344 5.277-2.04 8.206-.577 2.447 1.227 4.444 3.642 4.444 4.375 0 7.312-5.625 7.312-12.287 0-5.063-3.415-8.85-9.621-8.85-7.008 0-11.381 5.223-11.381 11.063 0 2.016.758 3.437 1.946 4.535.216.262.246.492.185.754-.205.84-.663 2.647-.754 3.01-.12.492-.394.594-.912.36-3.412-1.582-5.001-5.82-5.001-10.587C1.623 4.814 6.832 0 13.661 0 19.148 0 24 3.84 24 9.936c0 5.328-2.957 9.309-7.312 9.309-1.462 0-2.834-.79-3.303-1.688l-.897 3.57c-.324 1.248-1.203 2.808-1.79 3.756A12.01 12.01 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                </svg>
              </a>
              <a 
                href="https://api.whatsapp.com/send/?phone=213797559957&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <Link to="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary-light text-center">
          <p>&copy; {new Date().getFullYear()} Rabbit Design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}