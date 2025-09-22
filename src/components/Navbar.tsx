import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Store } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { state } = useCart();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <Store className="h-6 w-6 text-primary" />
            <span className="gradient-text">ModernStore</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/shop') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Shop
            </Link>
          </div>

          {/* Cart Button */}
          <Link 
            to="/cart" 
            className="relative flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-accent transition-colors"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="hidden sm:inline font-medium">Cart</span>
            {state.totalItems > 0 && (
              <span className="cart-badge">
                {state.totalItems}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-4">
          <div className="flex gap-4">
            <Link 
              to="/" 
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/shop') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Shop
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;