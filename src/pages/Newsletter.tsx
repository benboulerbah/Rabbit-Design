import { motion, AnimatePresence } from 'framer-motion';
import { Send, Star, X } from 'lucide-react';
import { useState } from 'react';

interface Article {
  id: number;
  title: string;
  image: string;
  summary: string;
  content: string;
  date: string;
}

interface ArticleModalProps {
  article: Article;
  onClose: () => void;
}

function ArticleModal({ article, onClose }: ArticleModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-primary max-w-3xl w-full rounded-lg overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-64 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-accent bg-black bg-opacity-50 rounded-full p-2"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">{article.title}</h3>
          <p className="text-gray-400 mb-4">{article.date}</p>
          <div className="prose prose-invert max-w-none">
            {article.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Newsletter() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const articles: Article[] = [
    {
      id: 1,
      title: "5 Essential Principles of Effective Logo Design",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80",
      summary: "Learn the fundamental principles that make logos memorable and impactful.",
      content: "A great logo is more than just an attractive symbol – it's a powerful tool that communicates your brand's essence at a glance.\n\nIn this article, we explore the five essential principles that make logos truly effective:\n\n1. Simplicity: The power of minimal design and why less is often more in logo creation.\n\n2. Memorability: Techniques to make your logo stick in people's minds.\n\n3. Versatility: Ensuring your logo works across all mediums and sizes.\n\n4. Relevance: Creating designs that resonate with your target audience.\n\n5. Timelessness: Avoiding trendy elements that might date your logo.\n\nBy following these principles, you'll create logos that not only look professional but also serve their primary purpose: making your brand instantly recognizable and memorable.",
      date: "April 15, 2025"
    },
    {
      id: 2,
      title: "Color Psychology in Brand Design",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80",
      summary: "Discover how colors influence brand perception and customer behavior.",
      content: "Colors are more than just visual elements – they're powerful communicators that can influence emotions, decisions, and brand perception.\n\nThis comprehensive guide explores:\n\n• The emotional impact of different colors\n• How to choose the right color palette for your brand\n• Cultural considerations in color selection\n• Color combinations that work (and why)\n• Common color mistakes to avoid\n\nUnderstanding color psychology is crucial for creating designs that not only look good but also effectively communicate your brand's message and values.",
      date: "April 10, 2025"
    },
    {
      id: 3,
      title: "Creating Engaging Social Media Designs",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80",
      summary: "Tips and techniques for designing scroll-stopping social media content.",
      content: "In today's fast-paced social media landscape, catching and holding attention is more challenging than ever.\n\nThis guide covers essential strategies for creating engaging social media designs:\n\n• Understanding platform-specific design requirements\n• Creating visual hierarchy that guides the eye\n• Using typography effectively in social media posts\n• Incorporating trending design elements without losing brand identity\n• Tips for maintaining consistent brand presence across platforms\n\nMaster these techniques to create social media content that not only stops the scroll but also drives engagement and builds brand recognition.",
      date: "April 5, 2025"
    }
  ];

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-primary p-8 rounded-lg shadow-xl"
        >
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-accent-light">Enhance</span> your brand design skills with just a few minutes of weekly learning
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to receive weekly insights, strategies, and resources to help you launch and grow your design business—just like many dedicated designers already do.
            </p>
          </div>

          <form className="space-y-6 mb-12">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-md bg-primary-light focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-md bg-primary-light focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="john@example.com"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent-dark py-3 rounded-md transition-colors flex items-center justify-center space-x-2"
            >
              <span>Subscribe Now</span>
              <Send size={20} />
            </button>
          </form>

          {/* Testimonials */}
          <div className="border-t border-primary-light pt-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">What Our Subscribers Say</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-primary-light p-6 rounded-lg">
                <div className="flex text-accent mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-300">"The weekly tips have transformed how I approach design projects. Invaluable resource!"</p>
                <p className="mt-2 font-semibold">- Sarah Johnson</p>
              </div>
              <div className="bg-primary-light p-6 rounded-lg">
                <div className="flex text-accent mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-300">"Clear, actionable advice that has helped me grow my design business significantly."</p>
                <p className="mt-2 font-semibold">- Michael Chen</p>
              </div>
            </div>
          </div>

          {/* Previous Articles */}
          <div className="border-t border-primary-light pt-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Previous Articles</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {articles.map(article => (
                <motion.div
                  key={article.id}
                  className="bg-primary-light rounded-lg overflow-hidden cursor-pointer hover:transform hover:scale-105 transition-transform"
                  onClick={() => setSelectedArticle(article)}
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">{article.title}</h3>
                    <p className="text-gray-300 text-sm mb-2">{article.summary}</p>
                    <p className="text-gray-400 text-sm">{article.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedArticle && (
          <ArticleModal
            article={selectedArticle}
            onClose={() => setSelectedArticle(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}