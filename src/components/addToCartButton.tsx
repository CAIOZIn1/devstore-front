'use client'

import { useCart } from '@/contexts/cart-context'

export interface addToCartButtonProps {
  productId: number
}

export function AddToCartButton({ productId }: addToCartButtonProps) {
  const { addToCart } = useCart()

  function handleAddProductToCart() {
    addToCart(productId)
  }

  return (
    <button
      type="button"
      onClick={handleAddProductToCart}
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 hover:bg-emerald-800 font-semibold text-white transition-all duration-300 ease-out scale-105"
    >
      Adicionar ao carrinho
    </button>
  )
}
