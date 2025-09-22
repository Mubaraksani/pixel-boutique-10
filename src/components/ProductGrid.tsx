import { useState, useMemo } from 'react';
import { Filter } from 'lucide-react';
import { Product, categories, priceRanges } from '../data/products';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  showFilters?: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, showFilters = true }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Category filter
      const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
      
      // Price filter
      const priceRange = priceRanges.find(range => range.id === selectedPriceRange);
      const priceMatch = !priceRange || 
        (product.price >= priceRange.min && product.price <= priceRange.max);
      
      return categoryMatch && priceMatch;
    });
  }, [products, selectedCategory, selectedPriceRange]);

  return (
    <div className="space-y-6">
      {showFilters && (
        <>
          {/* Mobile Filter Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg"
            >
              <Filter className="h-4 w-4" />
              Filters
            </button>
          </div>

          {/* Filter Bar */}
          <div className={`space-y-4 ${showMobileFilters ? 'block' : 'hidden'} md:block`}>
            <div className="flex flex-col md:flex-row gap-4">
              {/* Category Filter */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Category</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Price Range</label>
                <div className="flex flex-wrap gap-2">
                  {priceRanges.map(range => (
                    <button
                      key={range.id}
                      onClick={() => setSelectedPriceRange(range.id)}
                      className={`filter-btn ${selectedPriceRange === range.id ? 'active' : ''}`}
                    >
                      {range.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground">
          Showing {filteredProducts.length} of {products.length} products
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">No products found matching your filters.</p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;