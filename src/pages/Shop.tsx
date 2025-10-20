import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Cart } from "@/components/Cart";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const handleAddToCart = (product: { id: string; name: string; price: number; image: string }) => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    });
  };

  const products = [
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
    },
    {
      id: "5",
      name: "Mahogany Bookshelf",
      price: 95000,
      image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=500&q=80",
      category: "Storage"
    },
    {
      id: "6",
      name: "Bamboo Lounge Chair",
      price: 55000,
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&q=80",
      category: "Chairs"
    },
    {
      id: "7",
      name: "Wooden Coffee Table",
      price: 65000,
      image: "https://images.unsplash.com/photo-1551298370-9d3d53740c72?w=500&q=80",
      category: "Tables"
    },
    {
      id: "8",
      name: "Handcrafted Wall Mirror",
      price: 28000,
      image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=500&q=80",
      category: "Decor"
    },
    {
      id: "9",
      name: "Teak Dining Chair Set",
      price: 85000,
      image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=500&q=80",
      category: "Chairs"
    },
    {
      id: "10",
      name: "Bamboo Side Table",
      price: 32000,
      image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=500&q=80",
      category: "Tables"
    },
    {
      id: "11",
      name: "Woven Storage Chest",
      price: 72000,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
      category: "Storage"
    },
    {
      id: "12",
      name: "Carved Wooden Bowl",
      price: 15000,
      image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=500&q=80",
      category: "Decor"
    }
  ];

  const categories = ["All", "Chairs", "Tables", "Storage", "Decor", "Stools"];

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <h1 className="text-2xl font-bold text-primary cursor-pointer" onClick={() => navigate("/")}>
            Malawi Furniture Hub
          </h1>
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate("/")}>Home</Button>
            <Button variant="ghost" onClick={() => navigate("/shop")}>Shop</Button>
            <Button variant="ghost" onClick={() => navigate("/about")}>About</Button>
            <Button variant="ghost" onClick={() => navigate("/contact")}>Contact</Button>
            <Cart />
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-foreground mb-4">Our Collection</h1>
          <p className="text-xl text-muted-foreground">Explore our handcrafted Malawian furniture pieces</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
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
    </div>
  );
};

export default Shop;
