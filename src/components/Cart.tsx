import { ShoppingCart, X, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useCart } from '@/contexts/CartContext';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart();
  const navigate = useNavigate();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
          <SheetDescription>
            {totalItems === 0 ? 'Your cart is empty' : `${totalItems} items in your cart`}
          </SheetDescription>
        </SheetHeader>
        <div className="mt-8 space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4 items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <h4 className="font-semibold text-sm">{item.name}</h4>
                <p className="text-sm text-muted-foreground">
                  MWK {item.price.toLocaleString()}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-6 w-6"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="text-sm">{item.quantity}</span>
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-6 w-6"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeFromCart(item.id)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
        {items.length > 0 && (
          <div className="mt-8 space-y-4">
            <div className="border-t pt-4">
              <div className="flex justify-between font-semibold text-lg">
                <span>Total:</span>
                <span>MWK {totalPrice.toLocaleString()}</span>
              </div>
            </div>
            <Button className="w-full" onClick={() => navigate('/checkout')}>
              Proceed to Checkout
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
