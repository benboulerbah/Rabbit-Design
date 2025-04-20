import { motion } from 'framer-motion';
import { CalendarDays } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function PostDesign() {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    website: '',
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
            <h1 className="text-4xl font-bold mb-4">Social Media Post Design</h1>
            <p className="text-xl text-gray-300">
              Social media is your digital storefront — and I make sure it looks great. 
              With professionally crafted posts designed to match your brand's vibe, your audience will connect faster, 
              trust more, and engage better. Whether you're launching a product, announcing a service, or just sharing 
              content, I've got you covered with impactful visuals.
            </p>
          </div>

          <div className="grid gap-8 mb-12">
            {/* Package 1 */}
            <div className="bg-primary p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-2">🔹 Package 1 – You Provide the Materials</h2>
              <p className="text-gray-300 mb-4">If you already have high-quality product images or photos of your environment</p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• 1 Post Design – $25</li>
                <li>• 2 Post Designs – $40</li>
                <li>• 5 Post Designs – $99</li>
                <li className="mt-4">Each design will be:</li>
                <li>✔ Fully customized to your brand style</li>
                <li>✔ Delivered in required formats (square, story, etc.)</li>
                <li>✔ Delivered in 1–3 days depending on quantity</li>
              </ul>
            </div>

            {/* Package 2 */}
            <div className="bg-primary p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-2">🔸 Package 2 – I Create with Provided Info Only</h2>
              <p className="text-gray-300 mb-4">If you don't have product photos or styled images, I will source everything legally to create powerful visuals</p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• 1 Post Design – $30</li>
                <li>• 2 Post Designs – $50</li>
                <li>• 5 Post Designs – $119</li>
                <li className="mt-4">Each design will be:</li>
                <li>✔ Fully customized to your brand style</li>
                <li>✔ Using royalty-free licensed visuals</li>
                <li>✔ Delivered in required formats</li>
                <li>✔ Delivered in 1–4 days depending on quantity</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-primary p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Order Your Post Designs</h2>
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
                  <optgroup label="Package 1 - You Provide Materials">
                    <option value="p1-1">1 Post Design ($25)</option>
                    <option value="p1-2">2 Post Designs ($40)</option>
                    <option value="p1-5">5 Post Designs ($99)</option>
                  </optgroup>
                  <optgroup label="Package 2 - I Create Everything">
                    <option value="p2-1">1 Post Design ($30)</option>
                    <option value="p2-2">2 Post Designs ($50)</option>
                    <option value="p2-5">5 Post Designs ($119)</option>
                  </optgroup>
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