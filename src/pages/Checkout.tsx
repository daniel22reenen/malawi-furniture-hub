import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

export default function Checkout() {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.address || !formData.city) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all required fields',
        variant: 'destructive',
      });
      return;
    }

    // Generate unique order ID
    const orderId = `ORD-${Date.now()}`;
    
    // PayFast integration
    const payFastForm = document.createElement('form');
    payFastForm.method = 'POST';
    payFastForm.action = 'https://sandbox.payfast.co.za/eng/process'; // Use sandbox for testing
    
    // PayFast required fields
    const fields = {
      merchant_id: '10000100', // Replace with your merchant ID
      merchant_key: '46f0cd694581a', // Replace with your merchant key
      amount: totalPrice.toFixed(2),
      item_name: `Malawian Furniture Order #${orderId}`,
      item_description: items.map(item => `${item.name} (x${item.quantity})`).join(', '),
      email_address: formData.email,
      name_first: formData.firstName,
      name_last: formData.lastName,
      cell_number: formData.phone,
      return_url: `${window.location.origin}/order-success`,
      cancel_url: `${window.location.origin}/checkout`,
      notify_url: `${window.location.origin}/api/payment-notify`,
    };

    Object.entries(fields).forEach(([key, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value;
      payFastForm.appendChild(input);
    });

    document.body.appendChild(payFastForm);
    payFastForm.submit();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (items.length === 0) {
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" onClick={() => navigate('/')} className="mb-6">
          ← Back to Shop
        </Button>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Shipping Information</CardTitle>
              <CardDescription>Please provide your delivery details</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="address">Street Address *</Label>
                  <Textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="postalCode">Postal Code</Label>
                    <Input
                      id="postalCode"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <Button type="submit" className="w-full mt-6">
                  Proceed to Payment
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex gap-3">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="font-semibold">MWK {(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                ))}
                
                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total:</span>
                    <span>MWK {totalPrice.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5">
              <CardHeader>
                <CardTitle className="text-base">Payment Method</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <img src="https://www.payfast.co.za/images/logo.png" alt="PayFast" className="h-8" />
                  <p className="text-sm text-muted-foreground">Secure payment via PayFast</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
