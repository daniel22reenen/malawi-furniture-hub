import { Button } from "@/components/ui/button";
import { Cart } from "@/components/Cart";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

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

      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">Our Story</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Preserving Malawian craftsmanship and empowering local artisans
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2 mb-16">
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800&q=80"
                alt="Malawian artisan at work"
                className="h-full w-full object-cover"
              />
            </div>
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
            </div>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <h2 className="mb-6 text-4xl font-bold text-foreground">
                Sustainable & Ethical
              </h2>
              <p className="mb-4 text-lg text-muted-foreground">
                We source our materials responsibly, using locally harvested timber and natural 
                materials that are renewable and environmentally friendly.
              </p>
              <p className="mb-6 text-lg text-muted-foreground">
                Our commitment to sustainability extends beyond materials – we ensure that every 
                artisan receives fair compensation and works in safe, respectful conditions.
              </p>
              <Button size="lg" onClick={() => navigate("/shop")}>
                Shop Our Collection
              </Button>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80"
                alt="Sustainable craftsmanship"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
