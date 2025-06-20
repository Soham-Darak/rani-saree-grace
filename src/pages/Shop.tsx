
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');

  const categories = ['All', 'Traditional', 'Contemporary', 'Casual', 'Party'];

  const filteredProducts = products.filter(product => 
    selectedCategory === 'All' || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <div className="bg-cream-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-sage-900 mb-4">
            Our Collection
          </h1>
          <p className="text-lg text-sage-700 max-w-2xl mx-auto">
            Discover our curated selection of premium sarees, each piece 
            carefully chosen for its craftsmanship and timeless appeal.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-burgundy-600 text-cream-50'
                    : 'bg-cream-200 text-sage-700 hover:bg-cream-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-cream-300 rounded-lg bg-cream-50 text-sage-700 focus:outline-none focus:ring-2 focus:ring-burgundy-500"
          >
            <option value="name">Sort by Name</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sortedProducts.map((product) => (
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
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-serif font-semibold text-sage-900 group-hover:text-burgundy-700 transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  {!product.inStock && (
                    <span className="text-xs bg-sage-200 text-sage-700 px-2 py-1 rounded">
                      Out of Stock
                    </span>
                  )}
                </div>
                <p className="text-sage-600 text-sm mb-3">{product.fabric}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-semibold text-burgundy-700">
                      ₹{product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-sage-500 line-through">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-sage-500 bg-sage-100 px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-sage-600">
              No products found in the selected category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
