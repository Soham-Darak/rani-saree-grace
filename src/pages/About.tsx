
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <div className="bg-cream-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-sage-900 mb-6">
            About Rani's Collection
          </h1>
          <p className="text-xl text-sage-700 leading-relaxed">
            Preserving the timeless art of Indian textile craftsmanship 
            while making it accessible to the modern woman.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Story Section */}
        <div className="prose prose-lg max-w-none">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-serif font-bold text-sage-900 mb-6">
                Our Heritage
              </h2>
              <p className="text-sage-700 leading-relaxed mb-4">
                Rani's Collection was founded with a deep reverence for the rich 
                tradition of Indian textile artistry. Our journey began with a 
                simple mission: to celebrate and preserve the ancient craft of 
                saree weaving while making these timeless pieces accessible to 
                contemporary women.
              </p>
              <p className="text-sage-700 leading-relaxed">
                Every saree in our collection tells a story of generations of 
                skilled artisans who have perfected their craft through centuries 
                of dedication and passion. We work directly with master weavers 
                across India to ensure authenticity and fair trade practices.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1594736797933-d0a6d8b0d6a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Traditional weaving"
                className="rounded-lg elegant-shadow"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1583391733956-6c78276477e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Elegant saree display"
                className="rounded-lg elegant-shadow"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-serif font-bold text-sage-900 mb-6">
                Our Commitment
              </h2>
              <p className="text-sage-700 leading-relaxed mb-4">
                Quality is at the heart of everything we do. Each saree undergoes 
                rigorous quality checks to ensure that only the finest pieces 
                reach our customers. We believe that a saree is not just a garment, 
                but a work of art that deserves to be treasured.
              </p>
              <p className="text-sage-700 leading-relaxed">
                Our commitment extends beyond quality to sustainability and 
                ethical practices. We support local artisan communities and 
                ensure fair compensation for their exceptional craftsmanship.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-cream-100 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-serif font-bold text-sage-900 text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-burgundy-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-cream-50 font-serif">A</span>
              </div>
              <h3 className="text-xl font-serif font-semibold text-sage-900 mb-3">
                Authenticity
              </h3>
              <p className="text-sage-700">
                Every piece is genuine, sourced directly from master artisans 
                who have preserved traditional techniques for generations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-burgundy-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-cream-50 font-serif">Q</span>
              </div>
              <h3 className="text-xl font-serif font-semibold text-sage-900 mb-3">
                Quality
              </h3>
              <p className="text-sage-700">
                We maintain the highest standards in fabric selection, 
                craftsmanship, and finishing to ensure lasting beauty.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-burgundy-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-cream-50 font-serif">E</span>
              </div>
              <h3 className="text-xl font-serif font-semibold text-sage-900 mb-3">
                Ethics
              </h3>
              <p className="text-sage-700">
                Fair trade practices and sustainable production methods 
                that support artisan communities and preserve the environment.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold text-sage-900 mb-6">
            Meet Our Team
          </h2>
          <p className="text-lg text-sage-700 mb-12 max-w-3xl mx-auto">
            Our passionate team combines deep knowledge of traditional textiles 
            with modern design sensibilities to curate collections that honor 
            the past while embracing the future.
          </p>
          <div className="bg-burgundy-50 rounded-lg p-8">
            <blockquote className="text-xl italic text-sage-800 mb-4">
              "Each saree is a canvas that tells the story of our rich cultural 
              heritage. We are honored to be the bridge between ancient artistry 
              and contemporary elegance."
            </blockquote>
            <cite className="text-burgundy-700 font-semibold">
              — The Rani's Collection Team
            </cite>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
