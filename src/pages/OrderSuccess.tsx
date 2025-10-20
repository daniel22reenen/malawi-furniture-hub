import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

export default function OrderSuccess() {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-primary" />
          </div>
          <CardTitle className="text-2xl">Order Successful!</CardTitle>
          <CardDescription>
            Thank you for your purchase. Your order has been received and is being processed.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-muted-foreground">
            You will receive a confirmation email shortly with your order details and tracking information.
          </p>
          <Button onClick={() => navigate('/')} className="w-full">
            Continue Shopping
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
