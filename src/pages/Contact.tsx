import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Cart } from "@/components/Cart";
import { Phone, Mail, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
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
          <h1 className="text-5xl font-bold text-foreground mb-6">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-3 mb-16">
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

          {/* Additional Info */}
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Visit Our Workshop</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Come see our artisans at work and explore our full collection in person. 
              We're open Monday through Saturday, 9:00 AM to 5:00 PM.
            </p>
            <Button size="lg" onClick={() => navigate("/shop")}>
              Browse Collection
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
