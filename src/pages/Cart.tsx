
import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center">
        <div className="text-center space-y-6">
          <ShoppingCart size={64} className="mx-auto text-sage-400" />
          <h2 className="text-2xl font-serif font-bold text-sage-900">
            Your cart is empty
          </h2>
          <p className="text-sage-600">
            Discover our beautiful collection of sarees
          </p>
          <Link
            to="/shop"
            className="inline-block px-6 py-3 bg-burgundy-600 text-cream-50 font-semibold rounded-lg hover:bg-burgundy-700 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-sage-900 mb-4">
            Shopping Cart
          </h1>
          <p className="text-sage-600">
            {items.length} {items.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-cream-50 rounded-lg p-6 elegant-shadow flex flex-col sm:flex-row gap-6"
              >
                <div className="flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                </div>
                
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-sage-900">
                      {item.name}
                    </h3>
                    <p className="text-sage-600">{item.fabric}</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 rounded-full hover:bg-cream-200 transition-colors"
                      >
                        <Minus size={16} className="text-sage-600" />
                      </button>
                      <span className="w-12 text-center font-medium text-sage-900">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 rounded-full hover:bg-cream-200 transition-colors"
                      >
                        <Plus size={16} className="text-sage-600" />
                      </button>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <span className="text-lg font-semibold text-burgundy-700">
                        ₹{(item.price * item.quantity).toLocaleString()}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="flex justify-between items-center pt-6 border-t border-cream-300">
              <button
                onClick={clearCart}
                className="text-red-600 hover:text-red-700 font-medium transition-colors"
              >
                Clear Cart
              </button>
              <Link
                to="/shop"
                className="text-burgundy-600 hover:text-burgundy-700 font-medium transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-cream-50 rounded-lg p-6 elegant-shadow sticky top-8">
              <h2 className="text-xl font-serif font-semibold text-sage-900 mb-6">
                Order Summary
              </h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sage-600">Subtotal</span>
                  <span className="font-medium text-sage-900">
                    ₹{getTotalPrice().toLocaleString()}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-sage-600">Shipping</span>
                  <span className="font-medium text-sage-900">Free</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-sage-600">Tax</span>
                  <span className="font-medium text-sage-900">
                    ₹{Math.round(getTotalPrice() * 0.18).toLocaleString()}
                  </span>
                </div>
                
                <div className="border-t border-cream-300 pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-sage-900">Total</span>
                    <span className="text-lg font-bold text-burgundy-700">
                      ₹{Math.round(getTotalPrice() * 1.18).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-6 px-6 py-4 bg-burgundy-600 text-cream-50 font-semibold rounded-lg hover:bg-burgundy-700 transition-colors elegant-shadow">
                Proceed to Checkout
              </button>
              
              <p className="text-xs text-sage-500 text-center mt-4">
                Secure checkout powered by SSL encryption
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
