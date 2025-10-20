import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Phone, Mail, MapPin } from "lucide-react";
import { Cart } from "@/components/Cart";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleAddToCart = (product: { id: string; name: string; price: number; image: string }) => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    });
  };

  const featuredProducts = [
    {
      id: "1",
      name: "Handwoven Bamboo Chair",
      price: 45000,
      image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&q=80",
      category: "Chairs"
    },
    {
      id: "2",
      name: "Teak Wood Dining Table",
      price: 125000,
      image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=500&q=80",
      category: "Tables"
    },
    {
      id: "3",
      name: "Carved Wooden Stool",
      price: 35000,
      image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=500&q=80",
      category: "Stools"
    },
    {
      id: "4",
      name: "Rattan Storage Basket",
      price: 18000,
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500&q=80",
      category: "Decor"
    }
  ];

  const categories = [
    { name: "Chairs & Seating", count: 24, icon: "🪑" },
    { name: "Tables", count: 18, icon: "🪑" },
    { name: "Storage", count: 15, icon: "📦" },
    { name: "Decor", count: 32, icon: "🎨" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <h1 className="text-2xl font-bold text-primary cursor-pointer" onClick={() => navigate("/")}>
            Malawi Furniture Hub
          </h1>
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate("/shop")}>Shop</Button>
            <Button variant="ghost" onClick={() => navigate("/about")}>About</Button>
            <Button variant="ghost" onClick={() => navigate("/contact")}>Contact</Button>
            <Cart />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1600&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/50" />
        </div>
        <div className="relative container mx-auto flex h-full items-center px-4">
          <div className="max-w-2xl space-y-6">
            <h2 className="text-5xl font-bold leading-tight text-foreground">
              Authentic Malawian Craftsmanship
            </h2>
            <p className="text-xl text-muted-foreground">
              Discover handcrafted furniture pieces made by skilled local artisans. 
              Each piece tells a story of tradition, quality, and sustainability.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="text-lg" onClick={() => navigate("/shop")}>
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="text-lg" onClick={() => navigate("/about")}>
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold text-foreground">
            Browse by Category
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Card 
                key={category.name} 
                className="cursor-pointer p-8 text-center transition-all hover:scale-105 hover:shadow-lg"
                onClick={() => navigate("/shop")}
              >
                <div className="mb-4 text-5xl">{category.icon}</div>
                <h3 className="mb-2 text-xl font-semibold text-card-foreground">
                  {category.name}
                </h3>
                <p className="text-muted-foreground">{category.count} items</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold text-foreground">
            Featured Products
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden transition-all hover:shadow-xl">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <p className="mb-2 text-sm text-muted-foreground">{product.category}</p>
                  <h3 className="mb-3 text-lg font-semibold text-card-foreground">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">
                      MWK {product.price.toLocaleString()}
                    </span>
                    <Button size="sm" onClick={() => handleAddToCart(product)}>
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-foreground">
                Crafted with Pride in Malawi
              </h2>
              <p className="mb-4 text-lg text-muted-foreground">
                Every piece of furniture in our collection is handcrafted by talented Malawian 
                artisans who have honed their skills through generations of tradition.
              </p>
              <p className="mb-6 text-lg text-muted-foreground">
                We work directly with local communities, ensuring fair wages and sustainable 
                practices. When you purchase from us, you're not just buying furniture – 
                you're supporting families and preserving traditional craftsmanship.
              </p>
              <Button size="lg" variant="outline" onClick={() => navigate("/about")}>
                Our Story
              </Button>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800&q=80"
                alt="Malawian artisan at work"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold text-foreground">
            Get in Touch
          </h2>
          <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-3">
            <Card className="p-6 text-center">
              <Phone className="mx-auto mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 font-semibold text-card-foreground">Phone</h3>
              <p className="text-muted-foreground">+265 999 123 456</p>
            </Card>
            <Card className="p-6 text-center">
              <Mail className="mx-auto mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 font-semibold text-card-foreground">Email</h3>
              <p className="text-muted-foreground">info@malawifurniture.com</p>
            </Card>
            <Card className="p-6 text-center">
              <MapPin className="mx-auto mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 font-semibold text-card-foreground">Location</h3>
              <p className="text-muted-foreground">Lilongwe, Malawi</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-card-foreground">About Us</h3>
              <p className="text-sm text-muted-foreground">
                Bringing authentic Malawian craftsmanship to the world.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-card-foreground">Quick Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Shop</a></li>
                <li><a href="#" className="hover:text-primary">About</a></li>
                <li><a href="#" className="hover:text-primary">Contact</a></li>
                <li><a href="#" className="hover:text-primary">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-card-foreground">Policies</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Shipping</a></li>
                <li><a href="#" className="hover:text-primary">Returns</a></li>
                <li><a href="#" className="hover:text-primary">Privacy</a></li>
                <li><a href="#" className="hover:text-primary">Terms</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-card-foreground">Follow Us</h3>
              <p className="text-sm text-muted-foreground">
                Stay connected for updates and new arrivals.
              </p>
            </div>
          </div>
          <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Malawi Furniture Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
