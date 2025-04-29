import React from 'react';
// --- REMOVED: Unused Send icon import ---
// import { Send } from 'lucide-react';
// ----------------------------------------

const CTASection: React.FC = () => {
  // State and handlers removed for basic FormSubmit integration

  return (
    <section id="contact" className="py-20 bg-navy-dark relative">
      {/* Background Element */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(152,251,152,0.1)_0%,rgba(0,0,0,0)_70%)] z-0"></div>

      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-4xl mx-auto bg-navy-light/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Content Side */}
            <div className="p-8 lg:p-12">
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-white">Ready to Bring </span>
                <br />
                <span className="text-mint">Order to Your Digital Content?</span>
              </h2>
              <p className="text-gray-300 mb-8">
                Let's discuss how our expertise can transform your content ecosystem and enhance your digital distribution.
              </p>
              <ul className="space-y-4">
                {['Customized Content Architectures', 'Seamless Multi-Platform Distribution', 'Optimized Metadata Frameworks', 'Improved Search & Discovery'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-mint/20 border border-mint/40 flex items-center justify-center mr-3 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-mint"></div>
                    </div>
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Form Side */}
            <div className="p-8 lg:p-12 bg-navy/50 backdrop-blur-md border-l border-white/10">
              <form
                action="https://formsubmit.co/682e37e118eb9c6df459b920a578b027" // Make sure this is your correct FormSubmit endpoint
                method="POST"
                className="space-y-6"
              >
                {/* FormSubmit Hidden Fields */}
                <input type="hidden" name="_subject" value="New Submission from tylergohr.com!" />
                <input type="hidden" name="_replyto" />
                {/* Optional settings */}
                {/* <input type="hidden" name="_next" value="https://yoursite.co/thanks.html" /> */}
                {/* <input type="hidden" name="_captcha" value="false" /> */}

                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-md bg-navy-dark/80 border border-white/20 text-white focus:border-mint focus:ring-1 focus:ring-mint focus:outline-none transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-md bg-navy-dark/80 border border-white/20 text-white focus:border-mint focus:ring-1 focus:ring-mint focus:outline-none transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-md bg-navy-dark/80 border border-white/20 text-white focus:border-mint focus:ring-1 focus:ring-mint focus:outline-none transition-all duration-300"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-mint text-navy-dark font-medium rounded-md transition-all duration-300 shadow-lg shadow-mint/20 hover:bg-mint-dark"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;