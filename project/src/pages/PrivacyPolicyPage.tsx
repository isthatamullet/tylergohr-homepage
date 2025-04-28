import React from 'react';
import Header from '../components/Header'; // Adjust path if Header is located elsewhere
import Footer from '../components/Footer'; // Adjust path if Footer is located elsewhere

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-navy text-gray-200">
      <Header /> {/* Include your site header */}

      <main className="flex-grow container mx-auto px-6 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white">Privacy Policy</h1>

          {/* --- START PRIVACY POLICY CONTENT --- */}
          <div className="prose prose-invert lg:prose-xl max-w-none space-y-6 text-gray-300">
            {/* Add paragraphs using <p> tags */}
            <p>
              <strong>Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</strong>
            </p>
            <p>
              Your privacy is important to us. This Privacy Policy explains how [Your Name/Website Name] ("we," "us," or "our")
              collects, uses, discloses, and safeguards your information when you visit our website [Your Website URL, e.g., tylerghor.com]
              including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the "Site").
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>

            <h2 className="text-2xl font-semibold text-white">Collection of Your Information</h2>
            <p>
              We may collect information about you in a variety of ways. The information we may collect on the Site includes:
            </p>
            <ul>
              <li>
                <strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, that you voluntarily
                give to us when you use the contact form on the Site. You are under no obligation to provide us with personal
                information of any kind, however your refusal to do so may prevent you from using certain features of the Site (like the contact form).
              </li>
              <li>
                <strong>Contact Form Submissions:</strong> When you submit information through our contact form, that data (name, email, message)
                is processed by a third-party service, FormSubmit (formsubmit.co), which then forwards the submission to our designated email address.
                Please review FormSubmit's privacy policy for information on how they handle data. We do not store this information on our servers.
              </li>
              {/* Add sections on Derivative Data (IP, browser - if collected by hosting/analytics), Cookies, etc. */}
            </ul>

            <h2 className="text-2xl font-semibold text-white">Use of Your Information</h2>
            <p>
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically,
              we may use information collected about you via the Site to:
            </p>
            <ul>
              <li>Respond to your comments, inquiries, and requests made via the contact form.</li>
              {/* Add other uses if applicable */}
            </ul>

            {/* --- ADD MORE SECTIONS AS NEEDED --- */}
            {/* Examples: Disclosure of Information, Security, Cookies, GDPR Rights (if applicable), CCPA Rights (if applicable), Contact Us */}

            <h2 className="text-2xl font-semibold text-white">Contact Us</h2>
             <p>
               If you have questions or comments about this Privacy Policy, please contact us using the contact form on this website.
             </p>

          </div>
          {/* --- END PRIVACY POLICY CONTENT --- */}
        </div>
      </main>

      <Footer /> {/* Include your site footer */}
    </div>
  );
};

export default PrivacyPolicyPage;
