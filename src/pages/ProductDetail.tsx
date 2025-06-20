
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const product = products.find(p => p.id === parseInt(id || '0'));

  if (!product) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif font-bold text-sage-900 mb-4">
            Product Not Found
          </h2>
          <button
            onClick={() => navigate('/shop')}
            className="text-burgundy-600 hover:text-burgundy-700 font-medium"
          >
            Return to Shop
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      fabric: product.fabric
    });
    toast.success('Added to cart successfully!');
  };

  return (
    <div className="min-h-screen bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/shop')}
          className="flex items-center text-sage-700 hover:text-burgundy-700 mb-8 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Shop
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-w-3 aspect-h-4 overflow-hidden rounded-lg elegant-shadow">
              <img
                src={product.images[selectedImageIndex]}
                alt={product.name}
                className="w-full h-96 lg:h-[600px] object-cover"
              />
            </div>
            
            {product.images.length > 1 && (
              <div className="flex space-x-4 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImageIndex === index
                        ? 'border-burgundy-600'
                        : 'border-cream-300 hover:border-sage-400'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-sage-900 mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-2xl font-bold text-burgundy-700">
                  ₹{product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-sage-500 line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="text-sm bg-burgundy-100 text-burgundy-700 px-2 py-1 rounded">
                    Save ₹{(product.originalPrice - product.price).toLocaleString()}
                  </span>
                )}
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  product.inStock 
                    ? 'bg-sage-100 text-sage-700' 
                    : 'bg-red-100 text-red-700'
                }`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
                <span className="text-sm text-sage-600 bg-sage-100 px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-serif font-semibold text-sage-900 mb-3">
                Description
              </h3>
              <p className="text-sage-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-serif font-semibold text-sage-900 mb-2">
                  Fabric Details
                </h4>
                <p className="text-sage-700">{product.fabric}</p>
              </div>
              <div>
                <h4 className="font-serif font-semibold text-sage-900 mb-2">
                  Care Instructions
                </h4>
                <p className="text-sage-700">{product.care}</p>
              </div>
            </div>

            <div className="border-t border-cream-300 pt-8">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`w-full flex items-center justify-center px-8 py-4 rounded-lg font-semibold transition-colors ${
                  product.inStock
                    ? 'bg-burgundy-600 text-cream-50 hover:bg-burgundy-700 elegant-shadow'
                    : 'bg-sage-300 text-sage-600 cursor-not-allowed'
                }`}
              >
                <ShoppingCart size={20} className="mr-2" />
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
            </div>

            <div className="bg-cream-100 p-6 rounded-lg">
              <h4 className="font-serif font-semibold text-sage-900 mb-3">
                Why Choose Rani's Collection?
              </h4>
              <ul className="space-y-2 text-sage-700">
                <li>• Authentic handcrafted sarees</li>
                <li>• Premium quality fabrics</li>
                <li>• Direct from master weavers</li>
                <li>• Easy returns within 7 days</li>
                <li>• Free shipping across India</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
