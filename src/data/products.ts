
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  description: string;
  fabric: string;
  care: string;
  category: string;
  inStock: boolean;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Royal Silk Banarasi",
    price: 12500,
    originalPrice: 15000,
    images: [
      "https://images.unsplash.com/photo-1583391733956-6c78276477e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594736797933-d0a6d8b0d6a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    description: "Exquisite handwoven Banarasi saree featuring intricate gold zari work and traditional motifs. This timeless piece embodies the rich heritage of Indian craftsmanship.",
    fabric: "Pure Silk with Gold Zari",
    care: "Dry clean only. Store in a cool, dry place.",
    category: "Traditional",
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: "Elegant Chiffon Drape",
    price: 4500,
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    description: "Lightweight and graceful chiffon saree perfect for contemporary occasions. Features delicate embroidery and a flowing silhouette.",
    fabric: "Pure Chiffon",
    care: "Hand wash with mild detergent. Iron on low heat.",
    category: "Contemporary",
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: "Vintage Cotton Handloom",
    price: 3200,
    images: [
      "https://images.unsplash.com/photo-1606140842219-ca7c2c84d2a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    description: "Handwoven cotton saree with traditional block prints. Comfortable and elegant for daily wear or special occasions.",
    fabric: "Handloom Cotton",
    care: "Machine wash cold. Tumble dry low.",
    category: "Casual",
    inStock: true
  },
  {
    id: 4,
    name: "Designer Georgette Beauty",
    price: 6800,
    originalPrice: 8500,
    images: [
      "https://images.unsplash.com/photo-1583391733975-9a1c0c8e7ba5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    description: "Contemporary georgette saree with modern patterns and subtle shimmer. Perfect for evening events and parties.",
    fabric: "Georgette with Sequin Work",
    care: "Dry clean recommended. Handle with care.",
    category: "Party",
    inStock: true,
    featured: true
  },
  {
    id: 5,
    name: "Classic Kanjeevaram",
    price: 18500,
    images: [
      "https://images.unsplash.com/photo-1594736797933-7d236b0d6a90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    description: "Authentic Kanjeevaram silk saree with traditional temple border and rich color combination. A masterpiece of South Indian weaving.",
    fabric: "Pure Kanjeevaram Silk",
    care: "Dry clean only. Store with care to preserve zari work.",
    category: "Traditional",
    inStock: true
  },
  {
    id: 6,
    name: "Modern Linen Saree",
    price: 2800,
    images: [
      "https://images.unsplash.com/photo-1606140842219-ca7c2c84d2a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    description: "Minimalist linen saree with clean lines and contemporary appeal. Perfect for the modern woman who appreciates simplicity.",
    fabric: "Pure Linen",
    care: "Machine wash gentle cycle. Iron while damp.",
    category: "Contemporary",
    inStock: true
  }
];
