import { motion } from 'framer-motion';
import { CalendarDays } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function LogoDesign() {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    website: '',
    logoType: '',
    package: '',
    description: '',
    references: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      to_email: 'YOUR_EMAIL@example.com', // Replace with your email
      from_name: formData.fullName,
      from_email: formData.email,
      business_name: formData.businessName,
      website: formData.website,
      logo_type: formData.logoType,
      package_type: formData.package,
      description: formData.description,
      references: formData.references
    };

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );
      
      alert('Form submitted successfully! We will contact you soon.');
      
      // Reset form
      setFormData({
        fullName: '',
        businessName: '',
        email: '',
        website: '',
        logoType: '',
        package: '',
        description: '',
        references: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please try again.');
    }
  };

  return (
    <div className="py-12 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Logo Design Service</h1>
            <p className="text-xl text-gray-300">
              Your logo is the first handshake between your brand and your audience — let's make it unforgettable. 
              Whether you're just starting or rebranding, I provide carefully crafted logo solutions that represent 
              your brand identity and communicate your values.
            </p>
          </div>

          <div className="grid gap-8 mb-12">
            {/* Basic Plan */}
            <div className="bg-primary p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-2">🔹 Basic Plan – $25</h2>
              <p className="text-gray-300 mb-4">Perfect for startups and small businesses</p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• One logo concept</li>
                <li>• Two revisions</li>
                <li>• Final files in high-resolution (PNG, JPG, SVG, PDF)</li>
                <li>• Delivered in 3–4 days</li>
              </ul>
            </div>

            {/* Standard Plan */}
            <div className="bg-primary p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-2">🔸 Standard Plan – $50</h2>
              <p className="text-gray-300 mb-4">For businesses seeking more options</p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• Two unique logo concepts</li>
                <li>• Two revisions for one selected concept</li>
                <li>• Final files in high-resolution (PNG, JPG, SVG, PDF)</li>
                <li>• A custom color palette</li>
                <li>• Professional mockups to preview your logo in real-world settings</li>
                <li>• Delivered in 4–5 days</li>
              </ul>
            </div>

            {/* Premium Plan */}
            <div className="bg-primary p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-2">🔶 Premium Plan – $59</h2>
              <p className="text-gray-300 mb-4">Complete logo design solution</p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• Two unique logo concepts</li>
                <li>• Three revisions for each concept</li>
                <li>• Final files in high-resolution (PNG, JPG, SVG, PDF)</li>
                <li>• A custom color palette</li>
                <li>• A custom brand pattern</li>
                <li>• Professional mockups to showcase your logo in different use-cases</li>
                <li>• Delivered in 5–6 days</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-primary p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Order Your Logo Design</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-md bg-primary-light focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="businessName" className="block text-sm font-medium mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-md bg-primary-light focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-md bg-primary-light focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-medium mb-2">
                  Link to website/socials
                </label>
                <input
                  type="url"
                  id="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-md bg-primary-light focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label htmlFor="logoType" className="block text-sm font-medium mb-2">
                  What type of logo are you looking for?
                </label>
                <select
                  id="logoType"
                  value={formData.logoType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-md bg-primary-light focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                >
                  <option value="">Select logo type</option>
                  <option value="icon-based">Icon-based</option>
                  <option value="text-based">Text-based</option>
                  <option value="combination">Combination (Icon + Text)</option>
                </select>
              </div>

              <div>
                <label htmlFor="package" className="block text-sm font-medium mb-2">
                  Which package do you want?
                </label>
                <select
                  id="package"
                  value={formData.package}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-md bg-primary-light focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                >
                  <option value="">Select package</option>
                  <option value="basic">Basic ($25)</option>
                  <option value="standard">Standard ($50)</option>
                  <option value="premium">Premium ($59)</option>
                </select>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-2">
                  Tell me more about your Business
                </label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-2 rounded-md bg-primary-light focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="What products/services do you sell? The more information the better."
                  required
                ></textarea>
              </div>

              <div>
                <label htmlFor="references" className="block text-sm font-medium mb-2">
                  Do you have any reference files or images?
                </label>
                <textarea
                  id="references"
                  value={formData.references}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-2 rounded-md bg-primary-light focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Please provide links to any reference images or files"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-accent hover:bg-accent-dark py-3 px-6 rounded-md transition-colors"
              >
                <CalendarDays size={20} />
                <span>Submit Order</span>
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}