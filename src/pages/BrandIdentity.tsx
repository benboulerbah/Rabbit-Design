import { motion } from 'framer-motion';
import { CalendarDays, Clock } from 'lucide-react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import { format } from 'date-fns';
import emailjs from '@emailjs/browser';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const AVAILABLE_TIMES = [
  '09:00', '10:00', '11:00', '12:00', 
  '13:00', '14:00', '15:00', '16:00'
];

export default function BrandIdentity() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Value>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    website: '',
    description: ''
  });

  const handleDateChange = (value: Value) => {
    setSelectedDate(value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime) {
      alert('Please select both date and time for your appointment');
      return;
    }

    const templateParams = {
      to_email: 'YOUR_EMAIL@example.com', // Replace with your email
      from_name: formData.fullName,
      from_email: formData.email,
      business_name: formData.businessName,
      website: formData.website,
      description: formData.description,
      appointment_date: format(selectedDate as Date, 'MMMM dd, yyyy'),
      appointment_time: selectedTime
    };

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );
      
      alert('Appointment booked successfully! Check your email for confirmation.');
      
      // Reset form
      setFormData({
        fullName: '',
        businessName: '',
        email: '',
        website: '',
        description: ''
      });
      setSelectedDate(null);
      setSelectedTime('');
      setShowCalendar(false);
    } catch (error) {
      console.error('Error booking appointment:', error);
      alert('Failed to book appointment. Please try again.');
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
            <h1 className="text-4xl font-bold mb-4">Brand Identity Design</h1>
            <p className="text-xl text-gray-300">
              I deliver high-quality, well-thought-out brand identities that make your business stand out in the market. 
              With each plan, you receive a tailored identity system designed with precision and intention — ready to set your business apart.
            </p>
          </div>

          <div className="grid gap-8 mb-12">
            {/* Basic Plan */}
            <div className="bg-primary p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-2">🔹 Basic Plan – $175</h2>
              <p className="text-gray-300 mb-4">Perfect for small businesses and startups</p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• A professional logo design</li>
                <li>• A customized color palette</li>
                <li>• A unique brand pattern</li>
                <li>• A suitable font selection</li>
                <li>• A detailed brand guideline PDF</li>
                <li>• One concept presentation</li>
                <li>• One revision</li>
                <li>• Delivered in 7 days</li>
              </ul>
            </div>

            {/* Standard Plan */}
            <div className="bg-primary p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-2">🔸 Standard Plan – $250</h2>
              <p className="text-gray-300 mb-4">Ideal for growing businesses</p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• A professional logo design</li>
                <li>• A customized color palette</li>
                <li>• A unique brand pattern</li>
                <li>• A suitable font selection</li>
                <li>• A detailed brand guideline PDF</li>
                <li>• One concept presentation</li>
                <li>• One revision</li>
                <li>• Realistic mockups to showcase your brand</li>
                <li>• General print materials: business card, letterhead, envelope</li>
                <li>• A branded presentation deck</li>
                <li>• Delivered in 10 days</li>
              </ul>
            </div>

            {/* Premium Plan */}
            <div className="bg-primary p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-2">🔶 Premium Plan – $325</h2>
              <p className="text-gray-300 mb-4">Complete branding solution</p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• A professional logo design</li>
                <li>• A customized color palette</li>
                <li>• A unique brand pattern</li>
                <li>• A suitable font selection</li>
                <li>• A detailed brand guideline PDF</li>
                <li>• One concept presentation</li>
                <li>• Two revisions</li>
                <li>• Realistic mockups to showcase your brand</li>
                <li>• General print materials: business card, letterhead, envelope</li>
                <li>• A branded presentation deck</li>
                <li>• Specialized branded materials</li>
                <li>• 5 custom social media post designs for each platform</li>
                <li>• Delivered in 12–14 days</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-primary p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Book Your Brand Identity Design</h2>
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
                <label className="block text-sm font-medium mb-2">
                  Select Appointment Date and Time
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowCalendar(!showCalendar)}
                    className="w-full flex items-center justify-between px-4 py-2 rounded-md bg-primary-light focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <span>
                      {selectedDate 
                        ? `${format(selectedDate as Date, 'MMMM dd, yyyy')}${selectedTime ? ` at ${selectedTime}` : ''}`
                        : 'Select date and time'}
                    </span>
                    <CalendarDays size={20} />
                  </button>

                  {showCalendar && (
                    <div className="absolute z-10 mt-2 p-4 bg-primary-light rounded-lg shadow-xl">
                      <Calendar
                        onChange={handleDateChange}
                        value={selectedDate}
                        minDate={new Date()}
                        className="rounded-lg border-none bg-primary-light text-white"
                      />
                      {selectedDate && (
                        <div className="mt-4">
                          <h4 className="text-sm font-medium mb-2 flex items-center">
                            <Clock size={16} className="mr-2" />
                            Select Time
                          </h4>
                          <div className="grid grid-cols-4 gap-2">
                            {AVAILABLE_TIMES.map((time) => (
                              <button
                                key={time}
                                type="button"
                                onClick={() => {
                                  setSelectedTime(time);
                                  setShowCalendar(false);
                                }}
                                className={`px-3 py-1 rounded ${
                                  selectedTime === time
                                    ? 'bg-accent text-white'
                                    : 'bg-primary text-gray-300 hover:bg-accent-dark'
                                }`}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-accent hover:bg-accent-dark py-3 px-6 rounded-md transition-colors"
              >
                <CalendarDays size={20} />
                <span>Book an appointment</span>
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}