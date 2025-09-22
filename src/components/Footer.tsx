const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg gradient-text">ModernStore</h3>
            <p className="text-muted-foreground text-sm">
              Your trusted partner for quality products and exceptional shopping experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="/" className="block text-muted-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="/shop" className="block text-muted-foreground hover:text-primary transition-colors">
                Shop
              </a>
              <a href="/cart" className="block text-muted-foreground hover:text-primary transition-colors">
                Cart
              </a>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-semibold">Categories</h4>
            <div className="space-y-2 text-sm">
              <a href="/shop?category=electronics" className="block text-muted-foreground hover:text-primary transition-colors">
                Electronics
              </a>
              <a href="/shop?category=clothing" className="block text-muted-foreground hover:text-primary transition-colors">
                Clothing
              </a>
              <a href="/shop?category=accessories" className="block text-muted-foreground hover:text-primary transition-colors">
                Accessories
              </a>
              <a href="/shop?category=home" className="block text-muted-foreground hover:text-primary transition-colors">
                Home
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Email: support@modernstore.com</p>
              <p>Phone: (555) 123-4567</p>
              <p>Hours: Mon-Fri 9AM-6PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 ModernStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;