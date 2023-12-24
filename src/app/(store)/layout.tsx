import Header from '@/components/header'
import { CartPovider } from '@/contexts/cart-context'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <CartPovider>
      <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-app gap-5 px-8 py-8">
        <Header />
        {children}
      </div>
    </CartPovider>
  )
}
