
import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <div className="bg-cream-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-sage-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-sage-700">
            We'd love to hear from you. Get in touch with any questions 
            or to learn more about our collection.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-cream-50 rounded-lg p-8 elegant-shadow">
            <h2 className="text-2xl font-serif font-bold text-sage-900 mb-6">
              Send us a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-sage-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent bg-cream-50"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-sage-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent bg-cream-50"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-sage-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent bg-cream-50"
                >
                  <option>General Inquiry</option>
                  <option>Product Question</option>
                  <option>Custom Order</option>
                  <option>Shipping & Returns</option>
                  <option>Wholesale Inquiry</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-sage-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent bg-cream-50"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-burgundy-600 text-cream-50 py-3 px-6 rounded-lg font-semibold hover:bg-burgundy-700 transition-colors elegant-shadow"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-serif font-bold text-sage-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-sage-700 leading-relaxed mb-8">
                Whether you have questions about our sarees, need styling advice, 
                or want to place a custom order, our team is here to help. 
                We typically respond within 24 hours.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-cream-100 p-6 rounded-lg">
                <h3 className="font-serif font-semibold text-sage-900 mb-3">
                  Email Us
                </h3>
                <p className="text-sage-700 mb-2">General Inquiries:</p>
                <a
                  href="mailto:contact@raniscollection.com"
                  className="text-burgundy-600 hover:text-burgundy-700 transition-colors"
                >
                  raniscollection57@gmail.com
                </a>
                <p className="text-sage-700 mb-2 mt-4">Customer Support:</p>
                <a
                  href="mailto:support@raniscollection.com"
                  className="text-burgundy-600 hover:text-burgundy-700 transition-colors"
                >
                  raniscollection57@gmail.com
                </a>
              </div>

              <div className="bg-cream-100 p-6 rounded-lg">
                <h3 className="font-serif font-semibold text-sage-900 mb-3">
                  Call Us
                </h3>
                <p className="text-sage-700 mb-2">Customer Service:</p>
                <a
                  href="tel:+919860805057"
                  className="text-burgundy-600 hover:text-burgundy-700 transition-colors"
                >
                  +91 9860805057
                </a>
                <p className="text-sage-700 text-sm mt-2">
                  Mon-Sat: 9:00 AM - 7:00 PM IST
                </p>
              </div>
            </div>

            <div className="bg-cream-100 p-6 rounded-lg">
              <h3 className="font-serif font-semibold text-sage-900 mb-3">
                Visit Our Showroom
              </h3>
              <address className="text-sage-700 not-italic">
                Rani's Collection<br />
                Rokadiya Hanuman Colony,<br/>
                near Krishna Hospital<br />
                Ch. Sambhaji Nagar, Maharashtra 431001<br />
                India
              </address>
              <p className="text-sage-700 text-sm mt-3">
                Appointments recommended for personalized consultations
              </p>
            </div>

            <div className="bg-burgundy-50 p-6 rounded-lg">
              <h3 className="font-serif font-semibold text-sage-900 mb-3">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-sage-900 mb-1">
                    Do you offer international shipping?
                  </h4>
                  <p className="text-sage-700 text-sm">
                    Yes, we ship worldwide. Shipping costs and delivery times 
                    vary by location.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-sage-900 mb-1">
                    Can I return or exchange a saree?
                  </h4>
                  <p className="text-sage-700 text-sm">
                    We accept returns within 7 days of delivery, provided 
                    the item is in original condition.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-sage-900 mb-1">
                    Do you offer custom designs?
                  </h4>
                  <p className="text-sage-700 text-sm">
                    Yes, we work with our artisan partners to create custom 
                    pieces. Contact us for details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
