
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products } from '../data/products';

const Home = () => {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1583391733956-6c78276477e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Elegant Saree Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-cream-50 mb-6 leading-tight">
            Grace in Every Drape
          </h1>
          <p className="text-xl md:text-2xl text-cream-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover the timeless elegance of traditional Indian sarees, 
            curated with love and crafted for the modern woman.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center px-8 py-4 bg-burgundy-600 text-cream-50 font-semibold rounded-lg hover:bg-burgundy-700 transition-colors group elegant-shadow"
          >
            Explore Collection
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-sage-900 mb-4">
              Featured Collection
            </h2>
            <p className="text-lg text-sage-700 max-w-2xl mx-auto">
              Handpicked pieces that embody the essence of traditional craftsmanship 
              and contemporary style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group hover-lift bg-cream-50 rounded-lg overflow-hidden elegant-shadow"
              >
                <div className="aspect-w-3 aspect-h-4 overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-sage-900 mb-2 group-hover:text-burgundy-700 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sage-600 text-sm mb-3">{product.fabric}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-semibold text-burgundy-700">
                      
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-sage-500 line-through">
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-flex items-center px-6 py-3 border-2 border-burgundy-600 text-burgundy-700 font-semibold rounded-lg hover:bg-burgundy-600 hover:text-cream-50 transition-all"
            >
              View All Products
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-sage-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-sage-700 mb-6 leading-relaxed">
                Rani's Collection was born from a passion for preserving the 
                timeless art of Indian textile craftsmanship while making it 
                accessible to the modern woman.
              </p>
              <p className="text-lg text-sage-700 mb-8 leading-relaxed">
                Each saree in our collection tells a story of heritage, 
                skill, and beauty. We work directly with master weavers 
                and artisans to bring you authentic pieces that celebrate 
                the rich tradition of Indian fashion.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-burgundy-700 font-semibold hover:text-burgundy-800 transition-colors"
              >
                Learn More About Us
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1594736797933-d0a6d8b0d6a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Traditional Craftsmanship"
                className="rounded-lg elegant-shadow w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
