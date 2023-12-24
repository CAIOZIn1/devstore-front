'use client'

import { useCart } from '@/contexts/cart-context'
import { ShoppingBag } from 'lucide-react'

interface CartLengthProps {
  productId: number
  quantity: number
}

export function CartWidget() {
  const { items } = useCart()

  return (
    <div className="flex items-center gap-2">
      <ShoppingBag className="h-4 w-4 text-zinc-200" />
      <span className="text-sm text-zinc-200">Cart ({items.length})</span>
    </div>
  )
}
