import { products } from '../data/products';
import ProductGrid from '../components/ProductGrid';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Shop = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Shop All Products</h1>
          <p className="text-xl text-muted-foreground">
            Browse our complete collection of quality products
          </p>
        </div>

        {/* Product Grid with Filters */}
        <ProductGrid products={products} showFilters={true} />
      </div>

      <Footer />
    </div>
  );
};

export default Shop;