import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  price: string;
  features: string[];
  link: string;
}

function ServiceCard({ title, description, image, price, features, link }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-primary p-6 rounded-lg shadow-xl"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-6"
      />
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="text-3xl font-bold text-accent mb-4">{price}</div>
      <ul className="mb-6 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <span className="mr-2">•</span>
            {feature}
          </li>
        ))}
      </ul>
      <Link
        to={link}
        className="block w-full text-center bg-accent hover:bg-accent-dark py-3 rounded-md transition-colors"
      >
        Learn More
      </Link>
    </motion.div>
  );
}

export default function Services() {
  const services = [
    {
      title: "Brand Identity Design",
      description: "I craft professional visual identities that leave a lasting impression and reflect the essence of your brand from the very first glance.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80",
      price: "$175",
      features: [
        "Unique, memorable logo design",
        "Carefully selected, cohesive color palette",
        "Custom brand pattern",
        "Tailored typography",
        "Clear and professional brand guidelines"
      ],
      link: "/services/brand-identity"
    },
    {
      title: "Logo Design",
      description: "A bold, professional logo designed to reflect your brand's essence and grab attention in any crowd",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80",
      price: "$25",
      features: [
        "Logo Concepts",
        "Many Revisions",
        "Source Files Provided",
        "Copyright Transfer",
        "Brand Style Guide"
      ],
      link: "/services/logo-design"
    },
    {
      title: "Post Design",
      description: "I design creative and scroll-stopping posts that perfectly match your brand style — helping you attract attention, increase engagement, and stand out in the feed.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80",
      price: "$25",
      features: [
        "Eye-catching custom graphics",
        "Multiple formats (Instagram posts, Stories, Reels covers, etc.)",
        "Quick delivery and smooth communication",
        "100% legal assets (fonts, icons, mockups, stock photos)",
        "Designs tailored to your brand identity"
      ],
      link: "/services/post-design"
    }
  ];

  return (
    <div className="py-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-300">
            Professional design solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}