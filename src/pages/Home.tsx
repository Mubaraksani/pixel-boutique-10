import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShoppingBag } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  // Get featured products (first 6 products)
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Discover Amazing
              <span className="block">Products</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 animate-slide-up">
              Shop the latest trends and timeless classics. Quality products, exceptional service, and unbeatable prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-scale-in">
              <Link to="/shop" className="btn-hero inline-flex items-center gap-2">
                Shop Now
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/shop" className="btn-hero-outline inline-flex items-center gap-2">
                Browse Categories
                <ShoppingBag className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <ShoppingBag className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Free Shipping</h3>
              <p className="text-muted-foreground">Free shipping on orders over $50. Fast and reliable delivery.</p>
            </div>
            <div className="text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Quality Guarantee</h3>
              <p className="text-muted-foreground">All products are carefully selected for quality and durability.</p>
            </div>
            <div className="text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <ArrowRight className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Easy Returns</h3>
              <p className="text-muted-foreground">30-day return policy. Shop with confidence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-xl text-muted-foreground">Discover our most popular items</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/shop" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-hover transition-colors"
            >
              View All Products
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;