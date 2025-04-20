import { motion } from 'framer-motion';

export default function Privacy() {
  return (
    <div className="py-12 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-primary p-8 rounded-lg shadow-xl"
        >
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-gray-300 mb-4">Last updated: April 18, 2025</p>
          
          <div className="prose prose-invert">
            <p className="mb-6">
              We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
            <p className="mb-4">We only collect the following personal information:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Name</li>
              <li>Email address</li>
            </ul>
            <p className="mb-6">This information is collected when you voluntarily provide it through our contact or subscription forms.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use your information solely to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Communicate with you about your project or inquiry.</li>
              <li>Send you newsletters or updates (only if you've subscribed).</li>
            </ul>
            <p className="mb-6">We do not sell, share, or rent your personal information to any third parties.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Data Security</h2>
            <p className="mb-6">Your information is stored securely. We take reasonable steps to protect your data from loss, misuse, or unauthorized access.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Access and Control</h2>
            <p className="mb-4">You may request to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>View the personal data we have about you.</li>
              <li>Update or correct your data.</li>
              <li>Delete your personal information at any time.</li>
            </ul>
            <p className="mb-6">To do so, please contact us directly.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Children's Privacy</h2>
            <p className="mb-6">Our services are intended for a general audience and are not directed at children under the age of 13. We do not knowingly collect personal data from children.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Updates to This Policy</h2>
            <p className="mb-6">We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date at the top.</p>

            <h1 className="text-3xl font-bold mt-12 mb-8">Terms and Conditions</h1>
            <p className="text-gray-300 mb-4">Last updated: April 18, 2025</p>

            <p className="mb-6">By using this website, you agree to the following terms and conditions. Please read them carefully.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Our Services</h2>
            <p className="mb-4">We offer design services including:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Brand identity design</li>
              <li>Logo creation</li>
              <li>Social media post design</li>
              <li>Printed materials</li>
            </ul>
            <p className="mb-6">All services are customized based on the client's request and communication.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Orders and Payments</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>All project details and pricing are discussed and confirmed before work begins.</li>
              <li>Payment terms (full or partial) are agreed upon in advance.</li>
              <li>Payments are non-refundable once the work has started.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Ownership and Rights</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Once full payment is received, the client receives full commercial usage rights of the final design.</li>
              <li>We retain the right to showcase the final work in our portfolio unless requested otherwise.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Website Usage</h2>
            <p className="mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Use the website or its content for illegal or unauthorized purposes.</li>
              <li>Copy, reproduce, or redistribute any part of the site without written permission.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Limitation of Liability</h2>
            <p className="mb-4">We are not responsible for:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Any loss or damage resulting from your use or inability to use the site or our services.</li>
              <li>Interruptions or errors on the website.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Modifications</h2>
            <p className="mb-6">We reserve the right to update these Terms at any time. Continued use of the website after changes means you accept the new terms.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}