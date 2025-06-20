
import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sage-900 text-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-cream-100">
              Rani's Collection
            </h3>
            <p className="text-cream-200 text-sm leading-relaxed">
              Celebrating the timeless elegance of traditional Indian sarees with 
              modern sophistication. Each piece tells a story of heritage and grace.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-semibold text-cream-100">
              Quick Links
            </h4>
            <div className="space-y-2">
              <a href="/shop" className="block text-cream-200 hover:text-cream-100 transition-colors text-sm">
                Shop Collection
              </a>
              <a href="/about" className="block text-cream-200 hover:text-cream-100 transition-colors text-sm">
                About Us
              </a>
              <a href="/contact" className="block text-cream-200 hover:text-cream-100 transition-colors text-sm">
                Contact
              </a>
              <a href="/shipping" className="block text-cream-200 hover:text-cream-100 transition-colors text-sm">
                Shipping Info
              </a>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-semibold text-cream-100">
              Connect With Us
            </h4>
            <p className="text-cream-200 text-sm">
              contact@raniscollection.com
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-cream-200 hover:text-cream-100 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-cream-200 hover:text-cream-100 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-cream-200 hover:text-cream-100 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-sage-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-cream-300 text-sm">
              © 2024 Rani's Collection. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="/privacy" className="text-cream-300 hover:text-cream-100 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-cream-300 hover:text-cream-100 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
