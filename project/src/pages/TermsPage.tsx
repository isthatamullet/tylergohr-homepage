import React from 'react';
import Header from '../components/Header'; // Adjust path if Header is located elsewhere
import Footer from '../components/Footer'; // Adjust path if Footer is located elsewhere

const TermsPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-navy text-gray-200">
      <Header /> {/* Include your site header */}

      <main className="flex-grow container mx-auto px-6 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white">Terms of Service</h1>

          {/* --- START TERMS OF SERVICE CONTENT --- */}
          <div className="prose prose-invert lg:prose-xl max-w-none space-y-6 text-gray-300">
            {/* Add paragraphs using <p> tags */}
            <p>
              <strong>Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</strong>
            </p>
            <p>
              Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the [Your Website URL, e.g., tylerghor.com] website (the "Service")
              operated by [Your Name/Website Name] ("us", "we", or "our").
            </p>
            <p>
              Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms. These Terms apply to all
              visitors, users and others who wish to access or use the Service. By accessing or using the Service you agree to be bound by these Terms.
              If you disagree with any part of the terms then you do not have permission to access the Service.
            </p>

            {/* --- ADD MORE SECTIONS AS NEEDED --- */}
            {/* Examples: Intellectual Property, Links To Other Web Sites, Limitation Of Liability, Governing Law, Changes, Contact Us */}

            <h2 className="text-2xl font-semibold text-white">Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us using the contact form on this website.
            </p>

          </div>
          {/* --- END TERMS OF SERVICE CONTENT --- */}
        </div>
      </main>

      <Footer /> {/* Include your site footer */}
    </div>
  );
};

export default TermsPage;
